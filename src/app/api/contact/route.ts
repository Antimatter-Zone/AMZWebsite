import {NextResponse} from "next/server";

type ContactPayload = {
    email: string;
    message: string;
    name: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 320;
const MAX_MESSAGE_LENGTH = 2000;

function readString(value: unknown): string {
    return typeof value === "string" ? value.trim() : "";
}

function truncateForDiscord(value: string, maxLength: number): string {
    if (value.length <= maxLength) {
        return value;
    }

    return `${value.slice(0, maxLength - 1)}…`;
}

async function parsePayload(request: Request): Promise<ContactPayload | null> {
    const contentType = request.headers.get("content-type") ?? "";

    if (contentType.includes("application/json")) {
        const body = await request.json().catch(() => null);

        if (!body || typeof body !== "object") {
            return null;
        }

        return {
            name: readString(body.name),
            email: readString(body.email),
            message: readString(body.message),
        };
    }

    if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
        const formData = await request.formData();

        return {
            name: readString(formData.get("name")),
            email: readString(formData.get("email")),
            message: readString(formData.get("message")),
        };
    }

    return null;
}

function validatePayload(payload: ContactPayload): string | null {
    if (!payload.name || !payload.email || !payload.message) {
        return "Name, email, and message are required.";
    }

    if (payload.name.length > MAX_NAME_LENGTH) {
        return `Name cannot exceed ${MAX_NAME_LENGTH} characters.`;
    }

    if (payload.email.length > MAX_EMAIL_LENGTH) {
        return `Email cannot exceed ${MAX_EMAIL_LENGTH} characters.`;
    }

    if (!EMAIL_REGEX.test(payload.email)) {
        return "Please provide a valid email address.";
    }

    if (payload.message.length > MAX_MESSAGE_LENGTH) {
        return `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;
    }

    return null;
}

export async function POST(request: Request) {
    try {
        const payload = await parsePayload(request);

        if (!payload) {
            return NextResponse.json({error: "Unsupported or invalid request body."}, {status: 400});
        }

        const validationError = validatePayload(payload);

        if (validationError) {
            return NextResponse.json({error: validationError}, {status: 400});
        }

        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error("DISCORD_WEBHOOK_URL is not configured.");
            return NextResponse.json({error: "Contact service is not configured."}, {status: 500});
        }

        const discordResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: "AMZ Website Contact",
                allowed_mentions: {
                    parse: [],
                },
                embeds: [
                    {
                        title: "New contact form submission",
                        color: 5814783,
                        fields: [
                            {
                                name: "Name",
                                value: truncateForDiscord(payload.name, 256),
                                inline: true,
                            },
                            {
                                name: "Email",
                                value: truncateForDiscord(payload.email, 256),
                                inline: true,
                            },
                        ],
                        description: truncateForDiscord(payload.message, 4000),
                        timestamp: new Date().toISOString(),
                    },
                ],
            }),
        });

        if (!discordResponse.ok) {
            const details = await discordResponse.text();
            console.error("Discord webhook request failed:", discordResponse.status, details);
            return NextResponse.json(
                {error: "We could not deliver your message right now. Please try again later."},
                {status: 502},
            );
        }

        return NextResponse.json({ok: true});
    } catch (error) {
        console.error("Unexpected error in /api/contact:", error);
        return NextResponse.json({error: "Unexpected server error."}, {status: 500});
    }
}
