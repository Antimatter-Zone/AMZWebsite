"use client";

import {Column, Flex, Row, SmartLink, Text} from "@once-ui-system/core";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Legal", href: "/legal" },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Column
            as="footer"
            fillWidth
            center
            paddingX="l"
            paddingY="l"
            background="surface"
            border="neutral-alpha-weak"
            borderBottom="transparent"
            borderLeft="transparent"
            borderRight="transparent"
        >
            <Flex
                maxWidth="xl"
                fillWidth
                gap="m"
                horizontal="center"
                direction="row"
                m={{ direction: "column", horizontal: "between"}}
            >
                <Row gap="m" wrap horizontal="center" s={{ horizontal: "center" }} m={{ horizontal: "start" }}>
                    {footerLinks.map((link) => (
                        <SmartLink
                            key={link.href}
                            href={link.href}
                            aria-label={`${link.label} page link`}
                        >
                            <Text variant="label-default-s">{link.label}</Text>
                        </SmartLink>
                    ))}
                </Row>

                <Text variant="label-default-s" onBackground="neutral-weak" align="center">
                    © 2021-{currentYear} Antimatter Zone LLC – All rights reserved.
                </Text>
            </Flex>
        </Column>
    );
}
