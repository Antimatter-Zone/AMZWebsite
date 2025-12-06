import { Meta } from "@once-ui-system/core";
import { Column, Heading, Line, Row, Text } from "@once-ui-system/core";

import { baseURL, meta } from "@/resources/once-ui.config";

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
    <Column fillWidth center padding="l" gap="xl">
      <Column maxWidth="l" align="center" gap="s">
        <Heading variant="display-strong-l" align="center">
          Contact the AMZ Experience Team
        </Heading>
        <Text variant="heading-default-m" align="center" onBackground="neutral-weak">
          We would love to hear about your use case and how this starter can accelerate your work.
        </Text>
      </Column>

      <Column maxWidth="xl" gap="l" fillWidth>
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
          <Column gap="xs">
            <Text variant="label-default-s">Name</Text>
            <Line background="neutral-alpha-strong" />
          </Column>
          <Column gap="xs">
            <Text variant="label-default-s">Email</Text>
            <Line background="neutral-alpha-strong" />
          </Column>
          <Column gap="xs">
            <Text variant="label-default-s">Message</Text>
            <Line background="neutral-alpha-strong" height="64" />
          </Column>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Placeholder submit action
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
