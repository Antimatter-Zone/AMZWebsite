import {Column, Heading, Meta, Text} from "@once-ui-system/core";

import {baseURL, meta} from "@/resources/once-ui.config";

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
        <Column fillWidth center padding="l" gap="xl" s={{padding: "m", gap: "l"}}>
            <Column maxWidth="l" align="center" gap="s">
                <Heading variant="display-strong-l" align="center">
                    About Us
                </Heading>
                <Text variant="heading-default-m" align="center" onBackground="neutral-weak">
                    Antimatter Zone LLC brings decades of combined experience to crafting games, tools, and digital
                    worlds that spark imagination.
                </Text>
            </Column>

            <Column maxWidth="xl" gap="l" fillWidth s={{gap: "m"}}>
                <Column gap="xs" background="neutral-strong" padding="l" border="brand-weak">
                    <Heading variant="heading-strong-m">Our Mission</Heading>
                    <Text onBackground="neutral-weak">
                        Antimatter Zone LLC builds bold, player-first games and the tools that make them thrive.
                        We combine creative design, robust engineering, and community-focused systems to create playful,
                        persistent worlds where players and creators can build, trade, and tell stories together.
                        We ship reliable server tech, richly moddable systems, and experiences that reward curiosity,
                        cooperation, and cleverness — all while keeping performance, fairness, and
                        long-term sustainability front of mind.
                    </Text>
                </Column>

                <Column gap="xs" background="neutral-strong" padding="l" border="brand-weak">
                    <Heading variant="heading-strong-m">Our Vision</Heading>
                    <Text onBackground="neutral-weak">
                        To be the studio that blurs the line between playing and building: a home for vibrant,
                        user-driven worlds and modular tools that let anyone create, host, and expand living game
                        ecosystems.
                        We imagine a future where communities shape content as much as developers do, where persistence
                        and
                        creativity scale from a single server to a universe of connected experiences.
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
                </Column>
            </Column>
        </Column>
    );
}
