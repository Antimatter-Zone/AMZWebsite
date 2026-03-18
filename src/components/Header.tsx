"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Banner, Column, Icon, Logo, NavIcon, Row, SmartLink, Text } from "@once-ui-system/core";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Legal", href: "/legal" }
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (!pathname) return false;
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    const handleNavigate = () => {
        setIsOpen(false);
    };

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);

    return (
        <Column fillWidth center>
            {/* Maintenance Banner */}
            <Banner onBackground="danger-strong" background="danger-strong">
                <Icon name="alert" size="s" />
                Website Under Maintenance
            </Banner>

            {/* Header */}
            <Row
                paddingX="l"
                paddingY="m"
                fillWidth
                center
                position="sticky"
                top="0"
                zIndex={2}
                background="page"
            >
                <Row
                    as="header"
                    border="neutral-alpha-weak"
                    maxWidth="xl"
                    paddingX="m"
                    paddingY="s"
                    radius="l"
                    fillWidth
                    vertical="center"
                    horizontal="between"
                    background="surface"
                >
                    {/* Desktop: Logo left, Links right */}
                    <Row s={{ hide: true }} fillWidth vertical="center" horizontal="between">
                        <SmartLink href="/" unstyled onClick={handleNavigate} aria-label="Go to home">
                            <Row gap="s" vertical="center">
                                <Logo icon="/trademarks/amz-logo.svg" size="s" />
                                <Text variant="heading-strong-s">Antimatter Zone LLC</Text>
                            </Row>
                        </SmartLink>

                        <Row
                            as="nav"
                            aria-label="Primary navigation"
                            gap="m"
                            vertical="center"
                        >
                            {navItems.map((item) => (
                                <SmartLink
                                    key={item.href}
                                    href={item.href}
                                    selected={isActive(item.href)}
                                    aria-current={isActive(item.href) ? "page" : undefined}
                                    onClick={handleNavigate}
                                >
                                    <Text variant="label-default-s">{item.label}</Text>
                                </SmartLink>
                            ))}
                        </Row>
                    </Row>

                    {/* Mobile: Logo icon left, Burger right */}
                    <Row hide s={{ hide: false }} fillWidth vertical="center" horizontal="between">
                        <SmartLink href="/" unstyled onClick={handleNavigate} aria-label="Go to home">
                            <Logo icon="/trademarks/amz-logo.svg" size="s" />
                        </SmartLink>

                        <NavIcon
                            isActive={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                        />
                    </Row>
                </Row>
            </Row>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <Column
                    as="nav"
                    aria-label="Mobile navigation"
                    id="mobile-navigation"
                    paddingX="l"
                    paddingY="l"
                    paddingTop="m"
                    gap="xs"
                    fillWidth
                    background="surface"
                    border="neutral-alpha-weak"
                    radius="l"
                    maxWidth="xl"
                    style={{
                        marginTop: "-8px",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    {navItems.map((item, index) => (
                        <Row
                            key={item.href}
                            fillWidth
                            paddingY="s"
                            paddingX="m"
                            radius="m"
                            style={{
                                transition: "all 0.2s ease",
                                animationDelay: `${index * 50}ms`
                            }}
                        >
                            <SmartLink
                                href={item.href}
                                selected={isActive(item.href)}
                                aria-current={isActive(item.href) ? "page" : undefined}
                                onClick={handleNavigate}
                            >
                                <Text variant="label-default-l">{item.label}</Text>
                            </SmartLink>
                        </Row>
                    ))}
                </Column>
            )}
        </Column>
    );
}
