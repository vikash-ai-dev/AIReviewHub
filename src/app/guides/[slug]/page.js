
import Navbar from "@/app/components/Navbar";
import guides from "@/app/data/guides";
import GuideCard from "@/app/components/GuideCard";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {
    const { slug } = await params;

    const guide = guides.find((item) => item.slug === slug);

    if (!guide) {
        return {
            title: "Guide Not Found",
            description: "The requested guide could not be found.",
        };
    }

    return {
        title: guide.title,
        description: guide.description,
    };
}


const GuideDetails = async ({ params }) => {
    const { slug } = await params;

    const guide = guides.find((item) => {
        return item.slug === slug;

    })
    if (!guide) {
        notFound()
    }


    const relatedGuides = guides.filter((item) => {
        return item.slug !== slug && item.category === guide.category;
    })

    return (
        <main id="top" className="min-h-screen bg-[#0B0B0F] pb-10 text-white">

            <Navbar />

            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* ============== Left Side ============== */}

                    <div className="lg:col-span-2">

                        <section className=" overflow-hidden flex flex-col gap-5">

                            <div className="max-w-3xl flex gap-4 ">

                                <span className="w-fit rounded-full bg-violet-950 text-violet-300 text-xs font-medium px-3 py-1">{guide.category}</span>
                                <span>{guide.readingTime}</span>

                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{guide.title}</h1>

                            <p className="text-lg max-w-2xl text-zinc-400 leading-relaxed">{guide.description}</p>

                            <img src={guide.image} alt={guide.title}
                                className="block w-full max-w-2xl h-110 object-cover rounded-xl" />

                        </section>

                        {guide.content.map((section) => (
                            <section key={section.id} className="flex flex-col gap-4 mt-10">

                                <h2 id={section.id} className="text-2xl font-bold">
                                    {section.heading}
                                </h2>

                                {section.paragraphs.map((paragraph, index) => (
                                    <p key={index} className="text-zinc-400 leading-relaxed max-w-2xl">
                                        {paragraph}
                                    </p>
                                ))}

                                {section.subsections?.map((subsection, index) => (
                                    <div key={index} className="flex flex-col gap-3 mt-4">

                                        <h3 className="text-xl font-semibold">
                                            {subsection.heading}
                                        </h3>

                                        {subsection.paragraphs.map((paragraph, paragraphIndex) => (
                                            <p key={paragraphIndex} className="text-zinc-400 leading-relaxed max-w-2xl">
                                                {paragraph}
                                            </p>
                                        ))}

                                    </div>
                                ))}

                            </section>


                        ))}


                        <div className="grid grid-cols-1 mt-4">

                            <GuideCard guides={relatedGuides.slice(0, 2)} />

                        </div>

                    </div>

                    {/* ========= The End of Left Side =========== */}


                    {/* =========== Right Side ========== */}

                    <aside className="lg:col-span-1">

                        <div className="sticky top-24 bg-[#15151C] border border-zinc-800 rounded-xl p-5">

                            <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>

                            <ul className="flex flex-col text-sm text-zinc-400 gap-3">
                                {guide.content.map((section) => (

                                    <li key={section.id}>
                                        <a href={`#${section.id}`} className="hover:text-violet-400 transition-colors">
                                            {section.heading}
                                        </a>
                                    </li>
                                ))}

                            </ul>

                        </div>

                    </aside>
                    {/* =========The End of Right side===========*/}

                </div>
            </div>


        </main>
    );
}

export default GuideDetails;