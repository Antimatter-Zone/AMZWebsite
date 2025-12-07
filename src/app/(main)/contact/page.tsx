import { Meta } from "@once-ui-system/core";
import { Button, Column, Heading, Line, Row, Text } from "@once-ui-system/core";

import { baseURL, meta } from "@/resources/once-ui.config";
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
  { label: "Email", value: "hello@amz.example.com" },
  { label: "Phone", value: "+1 (555) 010-2000" },
  { label: "Address", value: "410 Terry Ave N, Seattle, WA 98109" },
];

export default function ContactPage() {
  return (
    <Column fillWidth center padding="l" gap="xl" s={{ padding: "m", gap: "l" }}>
      <Column maxWidth="l" align="center" gap="s">
        <Heading variant="display-strong-l" align="center">
          Contact the AMZ Experience Team
        </Heading>
        <Text variant="heading-default-m" align="center" onBackground="neutral-weak">
          We would love to hear about your use case and how this starter can accelerate your work.
        </Text>
      </Column>

      <Column maxWidth="xl" gap="l" fillWidth s={{ gap: "m" }}>
        <Column gap="s" background="neutral-strong" padding="l" border="brand-weak">
          <Heading variant="heading-strong-m">Contact details</Heading>
          <Column gap="s">
            {contactDetails.map((detail) => (
              <Row key={detail.label} justify="space-between" gap="m" wrap>
                <Text variant="label-strong-s">{detail.label}</Text>
                <Text onBackground="neutral-weak">{detail.value}</Text>
              </Row>
            ))}
          </Column>
        </Column>

        <Column gap="s" background="neutral-strong" padding="l" border="brand-weak">
          <Heading variant="heading-strong-m">Send a note</Heading>
          <Text onBackground="neutral-weak">
            This placeholder form block can become a simple contact form. Swap these rows for
            Once UI form fields to capture a name, email address, and message when you are ready to
            wire it up.
          </Text>
          <Column
            as="form"
            className={styles.form}
            gap="m"
            aria-label="Contact form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className={styles.field} htmlFor="name">
              <Text as="span" variant="label-default-s">
                Name
              </Text>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={styles.input}
                aria-required="true"
                aria-label="Name"
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
                className={styles.input}
                aria-required="true"
                aria-label="Email"
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

            <Line background="neutral-alpha-strong" />
            <Button type="submit" weight="strong" aria-label="Submit contact form">
              Send message
            </Button>
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
