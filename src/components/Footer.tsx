import { Flex, Row, SmartLink, Text } from "@once-ui-system/core";

import styles from "./Footer.module.css";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Flex as="footer" className={styles.footer} fillWidth>
      <Flex className={styles.inner} align="center" justify="space-between" fillWidth>
        <Row className={styles.links} gap="m" wrap>
          {footerLinks.map((link) => (
            <SmartLink key={link.href} href={link.href} className={styles.link} unstyled>
              <Text variant="label-default-s">{link.label}</Text>
            </SmartLink>
          ))}
        </Row>

        <Text variant="label-default-s" onBackground="neutral-weak" align="center">
          © {currentYear} AntiMatter Zone LLC – All rights reserved.
        </Text>
      </Flex>
    </Flex>
  );
}
