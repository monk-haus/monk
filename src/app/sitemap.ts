import { MetadataRoute } from "next";

const projectSlugs = [
    "vault",
    "naath-models",
    "gaplens",
    "sort-lat",
    "ife-inspires",
    "ctrl-build",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://monk.haus";

    const projectEntries: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
        url: `${baseUrl}/work/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/work`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...projectEntries,
        {
            url: `${baseUrl}/ethos`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.9,
        },
    ];
}