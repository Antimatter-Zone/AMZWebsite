"use client";

import {Button, Line, Text} from "@once-ui-system/core";
import {type FormEvent, useState} from "react";

import styles from "./contact.module.css";

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
        <form className={styles.form} aria-label="Contact form" onSubmit={handleSubmit}>
            <label className={styles.field} htmlFor="name">
                <Text as="span" variant="label-default-s">
                    Name
                </Text>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    className={styles.input}
                    aria-required="true"
                    aria-label="Name"
                    autoComplete="name"
                    placeholder="Your name"
                />
            </label>

            <label className={styles.field} htmlFor="email">
                <Text as="span" variant="label-default-s">
                    Email
                </Text>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={320}
                    className={styles.input}
                    aria-required="true"
                    aria-label="Email"
                    autoComplete="email"
                    placeholder="you@example.com"
                />
            </label>

            <label className={styles.field} htmlFor="message">
                <Text as="span" variant="label-default-s">
                    Message
                </Text>
                <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={2000}
                    className={styles.textarea}
                    rows={4}
                    aria-required="true"
                    aria-label="Message"
                    placeholder="How can we help?"
                />
                <Text as="span" variant="label-default-xs" onBackground="neutral-weak">
                    We respond to most inquiries within two business days.
                </Text>
            </label>

            <Line/>
            <Button type="submit" weight="strong" aria-label="Submit contact form" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
            </Button>

            <Text as="p" variant="label-default-s" aria-live="polite" className={styles.status}>
                {message}
            </Text>
        </form>
    );
}
