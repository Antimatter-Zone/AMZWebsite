import {Column, Heading, Meta, Row, Text} from "@once-ui-system/core";

import {baseURL, meta} from "@/resources/once-ui.config";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export function generateMetadata() {
    return Meta.generate({
        title: meta.contact.title,
        description: meta.contact.description,
        baseURL,
        path: meta.contact.path,
        canonical: meta.contact.canonical,
        image: meta.contact.image,
        robots: meta.contact.robots,
        alternates: meta.contact.alternates,
    });
}

const contactDetails = [
    {label: "Email", value: "contact@antimatterzone.com"},
    {label: "Phone", value: ""},
    {label: "Address", value: "100 N Howard St, Suite R, Spokane, WA 98201"},
];

export default function ContactPage() {
    return (
        <Column fillWidth center padding="l" gap="xl" s={{padding: "m", gap: "l"}}>
            <Column maxWidth="l" align="center" gap="s">
                <Heading variant="display-strong-l" align="center">
                    Contact Us
                </Heading>
                <Text variant="heading-default-m" align="center" onBackground="neutral-weak">
                    We would love to hear from you! We accept all feedback, reports, and suggestions.
                </Text>
            </Column>

            <Column maxWidth="xl" gap="l" fillWidth s={{gap: "m"}}>
                <Column gap="s" padding="l" className={styles.panel}>
                    <Heading variant="heading-strong-m">Contact details</Heading>
                    <Column gap="s">
                        {contactDetails.map((detail) => (
                            <Row key={detail.label} horizontal="between" gap="m" wrap>
                                <Text variant="label-strong-s">{detail.label}</Text>
                                <Text onBackground="neutral-weak">{detail.value}</Text>
                            </Row>
                        ))}
                    </Column>
                </Column>

                <Column gap="s" padding="l" className={styles.panel}>
                    <Heading variant="heading-strong-m">Send a note</Heading>
                    <Text onBackground="neutral-weak">
                        Reach out to Antimatter Zone LLC for support, partnerships, or general questions. Share your
                        details below and we will route your message to the right team member.
                    </Text>
                    <ContactForm/>
                </Column>
            </Column>
        </Column>
    );
}
