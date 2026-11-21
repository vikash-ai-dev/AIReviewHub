import ToolsContent from "../components/ToolsContent";
import { Suspense } from "react";

export const metadata = {
    title: "AI Tools",
    description:
        "Discover and compare AI tools through honest reviews, features, pricing, and ratings on AIReviewHub.",

    alternates: {
        canonical: "/tools",
    },
    
    openGraph: {
        title: "Discover AI Tools",
        description:
            "Discover and compare AI tools through honest reviews, features, pricing, and ratings on AIReviewHub.",
        url: "/tools",
    },
};

export default function Tools() {
    return (
        <Suspense fallback={<p className="p-6 text-white">Loading tools...</p>}>
            <ToolsContent />
        </Suspense>
    );
}