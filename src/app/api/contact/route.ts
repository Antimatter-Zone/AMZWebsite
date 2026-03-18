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
const DEFAULT_DISCORD_CONTACT_ROLE_ID = "795498464686374952";

function readString(value: unknown): string {
    return typeof value === "string" ? value.trim() : "";
}

function truncateForDiscord(value: string, maxLength: number): string {
    if (value.length <= maxLength) {
        return value;
    }

    return `${value.slice(0, maxLength - 3)}...`;
}

function normalizeMessage(value: string): string {
    return value.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

function readClientIp(request: Request): string {
    const forwarded = request.headers.get("x-forwarded-for");

    if (forwarded) {
        return readString(forwarded.split(",")[0]);
    }

    return readString(request.headers.get("x-real-ip")) || "Unavailable";
}

function readEnv(name: string): string {
    return readString((process.env as Record<string, string | undefined>)[name]);
}

function buildDiscordPayload(payload: ContactPayload, request: Request, roleId: string) {
    const submittedAt = new Date();
    const submittedTimestamp = Math.floor(submittedAt.getTime() / 1000);
    const source = readString(request.headers.get("origin")) || readString(request.headers.get("referer")) || "Unavailable";
    const userAgent = readString(request.headers.get("user-agent")) || "Unavailable";
    const ipAddress = readClientIp(request);
    const message = normalizeMessage(payload.message);

    return {
        username: "AMZ Contact Bot",
        content: `<@&${roleId}> New contact form submission`,
        allowed_mentions: {
            parse: [],
            roles: [roleId],
        },
        embeds: [
            {
                title: "Website Contact Submission",
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
                    {
                        name: "Submitted",
                        value: `<t:${submittedTimestamp}:F>`,
                        inline: true,
                    },
                    {
                        name: "IP Address",
                        value: truncateForDiscord(ipAddress, 256),
                        inline: true,
                    },
                    {
                        name: "Source",
                        value: truncateForDiscord(source, 1024),
                        inline: false,
                    },
                    {
                        name: "User Agent",
                        value: truncateForDiscord(userAgent, 1024),
                        inline: false,
                    },
                    {
                        name: "Message",
                        value: truncateForDiscord(message, 1024),
                        inline: false,
                    },
                ],
                timestamp: submittedAt.toISOString(),
                footer: {
                    text: "AMZ Website Contact Endpoint",
                },
            },
        ],
    };
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

        const webhookUrl = readEnv("DISCORD_WEBHOOK_URL");

        if (!webhookUrl) {
            console.error("DISCORD_WEBHOOK_URL is not configured.");
            return NextResponse.json(
                {error: "Contact service is not configured. Missing DISCORD_WEBHOOK_URL at runtime."},
                {status: 500},
            );
        }

        const roleId = readEnv("DISCORD_CONTACT_ROLE_ID") || DEFAULT_DISCORD_CONTACT_ROLE_ID;

        if (!/^\d+$/.test(roleId)) {
            console.error("DISCORD_CONTACT_ROLE_ID is invalid.");
            return NextResponse.json({error: "Contact role configuration is invalid."}, {status: 500});
        }

        const discordResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(buildDiscordPayload(payload, request, roleId)),
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
