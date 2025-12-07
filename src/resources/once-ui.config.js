// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://amz.example.com";

// Import and set font for each variant
import { Inter, Space_Grotesk } from "next/font/google";
import { Fira_Code } from "next/font/google";

const heading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Inter({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Fira_Code({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light | system
  neutral: "slate", // sand | gray | slate
  brand: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const dataStyle = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    x: 40,
    y: 0,
    width: 120,
    height: 120,
    tilt: -12,
    colorStart: "brand-background-strong",
    colorEnd: "accent-background-weak",
    opacity: 30,
  },
  dots: {
    display: false,
    size: "2",
    color: "brand-on-background-weak",
    opacity: 40,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    thickness: 1,
    angle: 45,
    size: "8",
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    width: "2",
    height: "2",
  },
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "AMZ Experience Platform",
    description:
      "Design-forward AMZ experience starter built with Once UI for Next.js.",
    image: "/images/og/home.jpg",
    canonical: "https://amz.example.com",
    robots: "index,follow",
    alternates: [{ href: "https://amz.example.com", hrefLang: "en" }],
  },
  about: {
    path: "/about",
    title: "About | AMZ Experience Platform",
    description:
      "Learn about the mission and vision guiding the AMZ Experience Platform.",
    image: "/images/og/about.jpg",
    canonical: "https://amz.example.com/about",
    robots: "index,follow",
    alternates: [{ href: "https://amz.example.com/about", hrefLang: "en" }],
  },
  contact: {
    path: "/contact",
    title: "Contact | AMZ Experience Platform",
    description: "Get in touch with the AMZ Experience Platform team.",
    image: "/images/og/contact.jpg",
    canonical: "https://amz.example.com/contact",
    robots: "index,follow",
    alternates: [{ href: "https://amz.example.com/contact", hrefLang: "en" }],
  },
  legal: {
    path: "/legal",
    title: "Legal | AMZ Experience Platform",
    description:
      "Read the AMZ Experience Platform terms of service and privacy policy.",
    image: "/images/og/legal.jpg",
    canonical: "https://amz.example.com/legal",
    robots: "index,follow",
    alternates: [{ href: "https://amz.example.com/legal", hrefLang: "en" }],
  },
  projects: {
    path: "/projects",
    title: "Projects | AMZ Experience Platform",
    description: "Explore AMZ initiatives built with Once UI components and design principles.",
    image: "/images/og/home.jpg",
    canonical: "https://amz.example.com/projects",
    robots: "index,follow",
    alternates: [{ href: "https://amz.example.com/projects", hrefLang: "en" }],
  },
};

// default schema data
const schema = {
  logo: "/trademarks/amz-logo.svg",
  type: "Organization",
  name: "AMZ",
  description: meta.home.description,
  email: "hello@amz.example.com",
};

// social links
const social = {
  twitter: "https://x.com/amazon",
  linkedin: "https://www.linkedin.com/company/amazon",
  discord: "https://discord.gg/", // placeholder
};

export { baseURL, fonts, style, meta, schema, social, effects, dataStyle };
