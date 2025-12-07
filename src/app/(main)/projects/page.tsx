import { Meta, Column, Heading, Text, SmartLink, Row } from "@once-ui-system/core";

import { baseURL, meta } from "@/resources/once-ui.config";
import { projects } from "@/resources/projects";
import styles from "./projects.module.css";

export function generateMetadata() {
  return Meta.generate({
    title: meta.projects.title,
    description: meta.projects.description,
    baseURL,
    path: meta.projects.path,
    canonical: meta.projects.canonical,
    image: meta.projects.image,
    robots: meta.projects.robots,
    alternates: meta.projects.alternates,
  });
}

export default function ProjectsPage() {
  return (
    <Column fillWidth center padding="l" gap="xl">
      <Column maxWidth="l" align="center" gap="s">
        <Heading variant="display-strong-l" align="center">
          Featured projects
        </Heading>
        <Text variant="heading-default-m" align="center" onBackground="neutral-weak">
          Explore how we apply Once UI to deliver cohesive, high-performance AMZ experiences.
        </Text>
      </Column>

      <Column className={styles.grid} gap="l" maxWidth="xl" fillWidth>
        {projects.map((project) => (
          <Column
            key={project.slug}
            className={styles.card}
            background="neutral-strong"
            border="brand-weak"
            padding="l"
            gap="s"
            data-border="rounded"
          >
            <Heading variant="heading-strong-m">{project.title}</Heading>
            <Text onBackground="neutral-weak">{project.description}</Text>
            <Row justify="space-between" align="center" gap="s" wrap>
              <Text variant="label-default-s" onBackground="neutral-weak">
                {project.highlights[0]}
              </Text>
              <SmartLink href={`/projects/${project.slug}`} className={styles.learnMore}>
                <Text variant="label-strong-s">Learn more →</Text>
              </SmartLink>
            </Row>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
