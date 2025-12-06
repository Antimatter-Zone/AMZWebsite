import { Meta } from "@once-ui-system/core";
import { Column, Heading, Line, Text } from "@once-ui-system/core";

import { baseURL, meta } from "@/resources/once-ui.config";

export function generateMetadata() {
  return Meta.generate({
    title: meta.legal.title,
    description: meta.legal.description,
    baseURL,
    path: meta.legal.path,
    canonical: meta.legal.canonical,
    image: meta.legal.image,
    robots: meta.legal.robots,
    alternates: meta.legal.alternates,
  });
}

export default function LegalPage() {
  return (
    <Column fillWidth center padding="l" gap="xl">
      <Column maxWidth="l" align="center" gap="s">
        <Heading variant="display-strong-l" align="center">
          Legal Information
        </Heading>
        <Text variant="heading-default-m" align="center" onBackground="neutral-weak">
          High-level terms and privacy placeholders you can tailor to your product requirements.
        </Text>
      </Column>

      <Column maxWidth="xl" gap="l" fillWidth>
        <Column gap="s" background="neutral-strong" padding="l" border="brand-weak">
          <Heading variant="heading-strong-m">Terms of Service</Heading>
          <Text onBackground="neutral-weak">
            Use this section to outline acceptable use, service availability, and limitations of
            liability. Until formal language is ready, this placeholder text signals where your
            contractual terms will live.
          </Text>
          <Line background="neutral-alpha-strong" />
          <Text onBackground="neutral-weak">
            Provide guidance on account responsibilities, prohibited activities, and service level
            expectations so teams know how to operate within your ecosystem.
          </Text>
        </Column>

        <Column gap="s" background="neutral-strong" padding="l" border="brand-weak">
          <Heading variant="heading-strong-m">Privacy Policy</Heading>
          <Text onBackground="neutral-weak">
            Summarize how customer data is collected, stored, and shared. This placeholder gives you
            space to articulate retention policies, user rights, and regional compliance notes.
          </Text>
          <Line background="neutral-alpha-strong" />
          <Text onBackground="neutral-weak">
            When you finalize the policy, include contact details for privacy inquiries and outline
            any preferences or consent mechanisms users can control.
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
