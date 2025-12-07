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
            "Analytics, storytelling, and rewards in one cohesive control center. Empower your community with data-driven insights and engaging player experiences.",
        highlights: [
            "Enterprise grade tools including for reviewing graphical and raw data.",
            "Multi-server quests, rewards, and exclusive titles.",
            "Inventory management, shops, and so much more",
        ],
        media: {
            src: "https://raindropcentral.com/images/rdp-text.png",
            alt: "Raindrop Central",
            width: 1200,
            height: 630,
        },
    },
    {
        slug: "raindrop-quests",
        title: "RaindropQuests (RDQ)",
        description: "Dive into quest lines to earn perks, ranks, and currencies to advance.",
        longDescription:
            "RaindropQuests brings full-blown RPG progression into Minecraft with a system that feels deep, flexible, and endlessly expandable.",
        highlights: [
            "Powerful plugin that lets servers build custom rank trees.",
            "Unlockable perks, customizable quest lines, unique rewards, and global bounty system.",
            "GUI driven plugin for better player experience",
        ],
        media: {
            src: "",
            alt: "Raindrop Quests",
            width: 1200,
            height: 630,
        },
    },
];
