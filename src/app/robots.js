import { userAgent } from "next/server";


export default function robots() {

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://ai-review-hub-mu.vercel.app/sitemap.xml",
    }
}