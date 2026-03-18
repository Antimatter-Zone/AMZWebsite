"use client";

import {AvatarGroup, Button, Column, Heading, Input, Text, Textarea} from "@once-ui-system/core";
import {type FormEvent, useState} from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactApiResponse = {
    error?: string;
    ok?: boolean;
};

export default function ContactForm() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [message, setMessage] = useState("");

    const isSubmitting = status === "submitting";

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = {
            name: formData.get("name")?.toString() ?? "",
            email: formData.get("email")?.toString() ?? "",
            message: formData.get("message")?.toString() ?? "",
        };

        setStatus("submitting");
        setMessage("Sending your message...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const body = (await response.json().catch(() => ({}))) as ContactApiResponse;

            if (!response.ok) {
                setStatus("error");
                setMessage(body.error ?? "We could not send your message. Please try again.");
                return;
            }

            setStatus("success");
            setMessage("Thanks for contacting us. We received your message.");
            form.reset();
        } catch (error) {
            setStatus("error");
            setMessage(error instanceof Error ? error.message : "We could not send your message. Please try again.");
        }
    }

    return (
        <Column gap="16" fillWidth paddingX="l" paddingY="xl">
            <AvatarGroup
                reverse
                avatars={[
                    {src: "/images/avatars/01.png"},
                    {src: "/images/avatars/02.png"},
                    {src: "/images/avatars/03.png"},
                ]}
            />
            <Column gap="s" fillWidth marginBottom="32" marginTop="8">
                <Heading variant="display-strong-s">Send us a message</Heading>
                <Text variant="body-default-xl" onBackground="neutral-medium" wrap="balance">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </Text>
            </Column>
            <form onSubmit={handleSubmit} style={{width: "100%"}}>
                <Column gap="-1" marginBottom="16">
                    <Input radius="top" id="name" name="name" label="Name" type="text" required/>
                    <Input radius="none" id="email" name="email" label="Email" type="email" required/>
                    <Textarea
                        style={{minHeight: "6rem"}}
                        radius="bottom"
                        id="message"
                        name="message"
                        label="Message"
                        lines="auto"
                        required
                    />
                </Column>
                <Button type="submit" arrowIcon disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send message"}
                </Button>
                {message && (
                    <Text variant="label-default-s" aria-live="polite" marginTop="8">
                        {message}
                    </Text>
                )}
            </form>
        </Column>
    );
}
