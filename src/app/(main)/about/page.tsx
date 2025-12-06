import { Meta } from "@once-ui-system/core";
import { Column, Heading, Line, Text } from "@once-ui-system/core";

import { baseURL, meta } from "@/resources/once-ui.config";

export function generateMetadata() {
  return Meta.generate({
    title: meta.about.title,
    description: meta.about.description,
    baseURL,
    path: meta.about.path,
    canonical: meta.about.canonical,
    image: meta.about.image,
    robots: meta.about.robots,
    alternates: meta.about.alternates,
  });
}

export default function AboutPage() {
  return (
    <Column fillWidth center padding="l" gap="xl">
      <Column maxWidth="l" align="center" gap="s">
        <Heading variant="display-strong-l" align="center">
          About the AMZ Experience Platform
        </Heading>
        <Text variant="heading-default-m" align="center" onBackground="neutral-weak">
          Purpose-built for modern teams who want a dependable design system foundation.
        </Text>
      </Column>

      <Column maxWidth="xl" gap="l" fillWidth>
        <Column gap="xs" background="neutral-strong" padding="l" border="brand-weak">
          <Heading variant="heading-strong-m">Our Mission</Heading>
          <Text onBackground="neutral-weak">
            We are committed to providing a cohesive AMZ-branded experience starter that teams can
            tailor to their products. The platform pairs thoughtful defaults with Once UI primitives
            so builders can focus on customer outcomes rather than plumbing.
          </Text>
        </Column>

        <Column gap="xs" background="neutral-strong" padding="l" border="brand-weak">
          <Heading variant="heading-strong-m">Our Vision</Heading>
          <Text onBackground="neutral-weak">
            The AMZ Experience Platform evolves into a shared language for product delivery,
            inspiring consistent interfaces across surfaces while leaving room for experimentation.
            We envision teams shipping confidently with accessible, performant components that just
            work.
          </Text>
        </Column>

        <Column gap="s" background="neutral-strong" padding="l" border="brand-weak">
          <Heading variant="heading-strong-m">How We Work</Heading>
          <Text onBackground="neutral-weak">
            Collaboration, documentation, and rapid feedback loops drive the platform forward.
            We lean on metrics, real-world pilots, and community input to ensure every update
            strengthens the developer and designer experience.
          </Text>
          <Line background="neutral-alpha-strong" />
          <Text onBackground="neutral-weak">
            This placeholder content highlights the kinds of storytelling space available here. Swap
            in your own narrative to align with your organization’s values, rituals, and guardrails.
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
