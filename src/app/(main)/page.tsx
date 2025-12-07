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
            <LetterFx trigger="instant">AMZ Experience Platform</LetterFx>
          </Text>
        </Badge>
        <Heading variant="display-strong-xl" marginTop="24" align="center">
          Design forward. Dark by default. Powered by Once UI.
        </Heading>
        <Text
          variant="heading-default-l"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="16"
          align="center"
        >
          Launch a modern AMZ-branded surface with prewired Once UI theming,
          responsive typography, and rich motion primitives.
        </Text>
        <Button
          id="docs"
          href="https://docs.once-ui.com/once-ui/quick-start"
          data-border="rounded"
          weight="strong"
          prefixIcon="rocket"
          arrowIcon
        >
          Explore Once UI
        </Button>
      </Column>
    </Column>
  );
}
