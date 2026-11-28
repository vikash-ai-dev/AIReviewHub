import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL("https://ai-review-hub-mu.vercel.app"),

  verification: {
    google: "3Rw1PivnvNNgDFuAesUp5dUI8qXWADvT_IKVBmECkWU",
  },

  title: {
    default: "AIReviewHub - Discover AI Tools That Actually Help",
    template: "%s | AIReviewHub",
  },
  description:
    "Discover, explore, and compare AI tools through honest reviews, practical guides, and detailed comparisons.",
  openGraph: {
    title: "AIReviewHub - Discover AI Tools That Actually Help",
    description:
      "Discover, explore, and compare AI tools through honest reviews, practical guides, and detailed comparisons.",
    siteName: "AIReviewHub",
    type: "website",
    images: ["/og-image.png"],
  },
};




export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
