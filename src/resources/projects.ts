export type ProjectMedia = {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
};

export type Project = {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    highlights: string[];
    media?: ProjectMedia;
};

export const projects: Project[] = [
    {
        slug: "dirty-dan",
        title: "Dirty Dan",
        description: "Single player exploration game",
        longDescription:
            "Dirty Dan is a procedurally generated 2D exploration game where gathering, scavenging, and " +
            "surviving fuel your rise in a crooked little frontier town. Collect materials to sell, upgrade, " +
            "and expand a settlement run by a delightfully corrupt mayor who always wants “just one more favor.”",
        highlights: [
            "Face off against enemies strange and surprising, bargain with eccentric NPCs, and uncover secrets buried under the dust.",
            "Every run remixes the world, the challenges, and the opportunities.",
            "Dirty Dan is a perpetual expedition through chaos, charm, and questionable civic management.",
        ],
        media: {
            src: "/images/projects/DD.png",
            alt: "Dashboard showcasing Dirty Dan",
            width: 1200,
            height: 630,
            caption: "Explore the depths, gather materials, and build your town!",
        },
    },
    {
        slug: "raindrop-central",
        title: "RaindropCentral",
        description: "Unify Your Minecraft Ecosystem",
        longDescription:
            "Analytics, storytelling, and rewards in one cohesive control center. Empower your community with " +
            "data-driven insights and engaging player experiences.",
        highlights: [
            "Enterprise grade tools including for reviewing graphical and raw data.",
            "Multi-server quests, rewards, and exclusive titles.",
            "Inventory management, shops, and so much more",
        ],
        media: {
            src: "/images/projects/RDC.png",
            alt: "Raindrop Central",
            width: 1200,
            height: 630,
        },
    },
    {
        slug: "dark-matter-servers",
        title: "Darkmatter Servers",
        description: "High-performance game server hosting for Minecraft, Rust, and more with instant " +
            "deployment and enterprise-grade reliability.",
        longDescription:
            "Darkmatter Servers is a multi-game hosting platform built for performance, scalability, " +
            "and ease of use. Designed for communities of all sizes, it offers instant server provisioning, " +
            "low-latency global infrastructure, and powerful management tools. Whether you're running a modded " +
            "Minecraft network, a competitive Rust server, or experimenting with custom game setups, " +
            "Dark Matter Servers delivers stable performance, full control, and dependable uptime for " +
            "both developers and players.",
        highlights: [
            "Multi-game hosting with optimized support for Minecraft, Rust, and future titles",
            "Instant setup with high-performance hardware and low-latency global networks",
            "Full control panel with automated backups, mod support, and scalable resources",
        ],
        media: {
            src: "/images/projects/DMS.png",
            alt: "Dark Matter Servers game hosting platform for Minecraft and Rust",
            width: 1200,
            height: 630,
        },
    }
];
