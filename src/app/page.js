import HomeContent from "./components/HomeContent";

export const metadata = {
  title: "Discover AI Tools That Actually Help",

  description:
    "Discover and compare useful AI tools through honest reviews, detailed comparisons, and practical guides on AIReviewHub.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Discover AI Tools That Actually Help",
    description:
      "Discover and compare useful AI tools through honest reviews, detailed comparisons, and practical guides on AIReviewHub.",
    url: "/",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <HomeContent />
};