import tools from "./data/tools";
import guides from "./data/guides";


export default function sitemap() {

    const baseUrl = "http://localhost:3000";

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

