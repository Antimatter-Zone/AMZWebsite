export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "aurora-insights",
    title: "Aurora Insights",
    description: "AI-driven shopper intelligence that reveals trends, affinities, and next-best actions.",
    longDescription:
      "Aurora Insights distills billions of behavioral signals into clear guidance so teams can act quickly and thoughtfully.",
    highlights: [
      "Predictive intent scoring for campaigns and merchandising",
      "Dynamic cohorts that refresh with real-time signals",
      "Executive-ready storytelling with Once UI data visuals",
    ],
  },
  {
    slug: "nebula-commerce",
    title: "Nebula Commerce",
    description: "Composable storefronts with Once UI blocks, tuned for speed, accessibility, and brand fidelity.",
    longDescription:
      "Nebula Commerce pairs opinionated defaults with deep flexibility so teams can launch consistent experiences in days, not months.",
    highlights: [
      "Starter flows for browse, cart, and checkout",
      "Adaptive layouts that stay on-brand across devices",
      "Performance guardrails baked into each release",
    ],
  },
  {
    slug: "pulse-observability",
    title: "Pulse Observability",
    description: "Unified telemetry spanning services, journeys, and Once UI interactions.",
    longDescription:
      "Pulse Observability centralizes insights from frontend to edge services, making it easy to pinpoint regressions and wins alike.",
    highlights: [
      "Golden signals packaged as reusable dashboards",
      "Alerting tuned to customer impact, not noise",
      "Deep links from anomalies to related sessions",
    ],
  },
];
