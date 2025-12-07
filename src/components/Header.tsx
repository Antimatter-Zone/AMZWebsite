"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Column, Flex, Logo, NavIcon, Row, SmartLink, Text } from "@once-ui-system/core";
import classNames from "classnames";

import styles from "./Header.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
  { label: "Docs", href: "https://docs.once-ui.com/" },
  { label: "Components", href: "https://once-ui.com/components" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <Flex as="header" className={styles.header} fillWidth>
      <Flex className={styles.inner} align="center" justify="space-between" fillWidth>
        <SmartLink href="/" className={styles.brand} unstyled onClick={handleNavigate}>
          <Logo icon="/trademarks/amz-logo.svg" size="s" aria-label="AMZ" />
          <Text variant="heading-strong-s" className={styles.brandText}>
            AMZ Experience
          </Text>
        </SmartLink>

        <Row as="nav" aria-label="Primary" className={styles.navLinks} gap="s">
          {navItems.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className={styles.navLink}
              selected={pathname === item.href}
              onClick={handleNavigate}
            >
              <Text variant="label-default-s">{item.label}</Text>
            </SmartLink>
          ))}
        </Row>

        <NavIcon
          className={styles.menuToggle}
          isActive={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        />
      </Flex>

      {isOpen ? (
        <Column as="nav" aria-label="Mobile" className={styles.mobileMenu} gap="xs">
          {navItems.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className={classNames(styles.mobileLink)}
              selected={pathname === item.href}
              onClick={handleNavigate}
            >
              <Text variant="label-default-m">{item.label}</Text>
            </SmartLink>
          ))}
        </Column>
      ) : null}
    </Flex>
  );
}
