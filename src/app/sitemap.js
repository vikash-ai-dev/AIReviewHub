import tools from "./data/tools";
import guides from "./data/guides";


export default function sitemap() {

    const baseUrl = "https://ai-review-hub-mu.vercel.app";

    const staticPages = [
        "",
        "/about",
        "/categories",
        "/tools",
        "/guides",
    ].map((path) => ({
        url: `${baseUrl}${path}`,
    }))

    const toolPages = tools.map((tool) => ({
        url: `${baseUrl}/tools/${tool.slug}`,
    }))

    const guidePages = guides.map((guide) => ({
        url: `${baseUrl}/guides/${guide.slug}`,
    }))

    return [
        ...staticPages,
        ...toolPages,
        ...guidePages,
    ];
}

