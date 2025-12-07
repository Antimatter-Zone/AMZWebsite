"use client";

import {
  Badge,
  Button,
  Column,
  Heading,
  LetterFx,
  Line,
  Logo,
  Text,
} from "@once-ui-system/core";

export default function Home() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }} s={{ padding: "m" }}>
      <Column maxWidth="m" horizontal="center" gap="l" align="center" s={{ gap: "m" }}>
        <Badge
          textVariant="code-default-s"
          border="brand-alpha-strong"
          onBackground="brand-weak"
          vertical="center"
          gap="16"
        >
          <Logo icon="/trademarks/amz-logo.svg" size="s" aria-label="AMZ" />
          <Line vert background="brand-alpha-strong" />
          <Text marginX="4">
            <LetterFx trigger="instant">Antimatter Zone LLC</LetterFx>
          </Text>
        </Badge>
        <Heading variant="display-strong-xl" marginTop="24" align="center">
            Gravity Optional. Imagination Mandatory.
        </Heading>
        <Text
          variant="heading-default-l"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="16"
          align="center"
        >
            Creating innovative games, tools, and digital worlds
            that empower players, communities, and creators.
        </Text>
      </Column>
    </Column>
  );
}
