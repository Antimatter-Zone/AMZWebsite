import { notFound } from "next/navigation";
import { Column, Heading, Text, Line, Meta } from "@once-ui-system/core";

import { baseURL, meta } from "@/resources/once-ui.config";
import { projects } from "@/resources/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((entry) => entry.slug === params.slug);

  if (!project) {
    return {};
  }

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

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((entry) => entry.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Column fillWidth center padding="l" gap="xl">
      <Column maxWidth="l" gap="s" align="center">
        <Heading variant="display-strong-l" align="center">
          {project?.title}
        </Heading>
        <Text variant="heading-default-m" align="center" onBackground="neutral-weak">
          {project?.longDescription}
        </Text>
      </Column>

      <Column maxWidth="xl" gap="l" fillWidth>
        <Column gap="s" background="neutral-strong" padding="l" border="brand-weak" data-border="rounded">
          <Heading variant="heading-strong-m">What makes this unique</Heading>
          <Column gap="s">
            {project?.highlights.map((detail) => (
              <Column key={detail} gap="xs">
                <Text variant="label-strong-s">{detail}</Text>
                <Line background="neutral-alpha-strong" />
              </Column>
            ))}
          </Column>
        </Column>

        <Column gap="s" background="neutral-strong" padding="l" border="brand-weak" data-border="rounded">
          <Heading variant="heading-strong-m">Learn more</Heading>
          <Text onBackground="neutral-weak">
            Ready to dive deeper? Connect this page to product requirement docs, demos, or live sandboxes so teams can explore
            the work in context.
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
