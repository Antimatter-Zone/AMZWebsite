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
  const mobileMenuId = "primary-navigation";

  const isActive = (href: string) => {
    if (!pathname) {
      return false;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <Flex as="header" className={styles.header} fillWidth>
      <Flex
        className={styles.inner}
        align="center"
        horizontal="between"
        fillWidth
        gap="s"
        s={{ direction: "column", align: "stretch", gap: "m" }}
        m={{ direction: "row", align: "center" }}
      >
        <SmartLink href="/" className={styles.brand} unstyled onClick={handleNavigate} aria-label="Go to home">
          <Logo icon="/trademarks/amz-logo.svg" size="s" aria-label="AMZ" />
          <Text variant="heading-strong-s" className={styles.brandText}>
            AMZ Experience
          </Text>
        </SmartLink>

        <Row
          as="nav"
          aria-label="Primary navigation"
          className={styles.navLinks}
          gap="s"
          wrap
          s={{ hide: true }}
          m={{ hide: false }}
        >
          {navItems.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className={styles.navLink}
              selected={isActive(item.href)}
              aria-label={`${item.label} navigation link`}
              aria-current={isActive(item.href) ? "page" : undefined}
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
          aria-expanded={isOpen}
          aria-controls={mobileMenuId}
          onClick={() => setIsOpen((open) => !open)}
        />
      </Flex>

      {isOpen ? (
        <Column
          as="nav"
          aria-label="Mobile navigation"
          id={mobileMenuId}
          className={styles.mobileMenu}
          gap="xs"
          s={{ paddingX: "l" }}
        >
          {navItems.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className={classNames(styles.mobileLink)}
              selected={isActive(item.href)}
              aria-label={`${item.label} navigation link`}
              aria-current={isActive(item.href) ? "page" : undefined}
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
