import Image from "next/image";
import { notFound } from "next/navigation";
import { Column, Heading, Text, Line, Meta, Row } from "@once-ui-system/core";

import { baseURL, meta } from "@/resources/once-ui.config";
import { Project, projects } from "@/resources/projects";

function findProject(slug: string): Project {
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return project;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProject(slug);

  return Meta.generate({
    title: `${project.title} | Projects | AMZ Experience Platform`,
    description: project.longDescription,
    baseURL,
    path: `/projects/${project.slug}`,
    canonical: `${baseURL}/projects/${project.slug}`,
    image: meta.home.image,
    robots: meta.home.robots,
    alternates: [{ href: `${baseURL}/projects/${project.slug}`, hrefLang: "en" }],
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProject(slug);

  return (
    <Column fillWidth center padding="l" gap="xl">
      <Column maxWidth="l" gap="s" align="center">
        <Heading variant="display-strong-l" align="center">
          {project.title}
        </Heading>
        <Text variant="heading-default-m" align="center" onBackground="neutral-weak">
          {project.longDescription}
        </Text>
      </Column>

      <Column maxWidth="xl" gap="l" fillWidth>
        {project.media ? (
          <Column
            gap="xs"
            background="neutral-strong"
            border="brand-weak"
            data-border="rounded"
            style={{ overflow: "hidden" }}
          >
            <Image
              src={project.media.src}
              alt={project.media.alt}
              width={project.media.width}
              height={project.media.height}
              style={{ width: "100%", height: "auto" }}
              priority
            />

            {project.media.caption ? (
              <Column padding="m" gap="xs">
                <Text variant="label-default-s" onBackground="neutral-weak">
                  Project snapshot
                </Text>
                <Text>{project.media.caption}</Text>
              </Column>
            ) : null}
          </Column>
        ) : null}

        <Column gap="s" background="neutral-strong" padding="l" border="brand-weak" data-border="rounded">
          <Heading variant="heading-strong-m">What makes this unique</Heading>
          <Column gap="s">
            {project.highlights.map((detail) => (
              <Column key={detail} gap="xs">
                <Text variant="label-strong-s">{detail}</Text>
                <Line background="neutral-alpha-strong" />
              </Column>
            ))}
          </Column>
        </Column>

        <Column gap="m" background="neutral-strong" padding="l" border="brand-weak" data-border="rounded">
          <Heading variant="heading-strong-m">Project overview</Heading>
          <Text onBackground="neutral-weak">{project.description}</Text>
          <Row gap="s" wrap>
            <Text variant="label-strong-s">Slug</Text>
            <Text onBackground="neutral-weak">/projects/{project.slug}</Text>
          </Row>
          <Text onBackground="neutral-weak">
            Ready to dive deeper? Connect this page to product requirement docs, demos, or live sandboxes so teams can explore
            the work in context.
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
