import GuidesContent from "../components/GuidesContent";


export const metadata = {
    title: "AI Guides and Tutorials",
    description:
        "Explore practical AI tutorials, helpful guides, and honest AI tool comparisons on AIReviewHub.",

    alternates: {
        canonical: "/guides",
    },

    openGraph: {
        title: guide.title,
        description: guide.description,
        url: `/guides/${guide.slug}`,
    },
};


export default function Guide() {
    return (
        <GuidesContent />
    );
}

