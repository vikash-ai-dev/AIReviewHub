import Navbar from "../components/Navbar";
import { PenLine, Image, Video, Code2, AudioLines, Zap } from "lucide-react";
import Link from "next/link";

const Categories = () => {
    return (
        <main className="min-h-screen bg-[#0B0B0F] text-white  ">
            <Navbar />

            <section className=" max-w-6xl pt-10 mx-5 md:mx-14">

                <h1 className="font-bold text-white text-3xl tracking-tight">Explore AI Tool Categories</h1>

                <p className="mt-2 text-zinc-400 leading-7  text-base">Tools for writing, editing, and improving content.</p>

            </section>


            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-4 mx-5 md:mx-14">

                <div className="w-full rounded-xl border border-zinc-800 bg-[#15151C] p-6 transition hover:border-violet-500">

                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-lg bg-violet-500/10 p-3 text-violet-400">
                            <PenLine size={24} />
                        </div>

                        <h2 className="text-xl font-semibold">
                            Writing
                        </h2>
                    </div>

                    <p className="text-sm leading-6 text-zinc-400">
                        Discover AI tools for writing articles, improving grammar,
                        summarizing text, and creating content.
                    </p>

                    <div className="mt-5">
                        <Link className="cursor-pointer  font-medium text-violet-400 transition-colors duration-200 hover:text-violet-300"
                            href="/tools?category=Writing">
                            Explore tools →
                        </Link>
                    </div>


                </div>
                <div className="w-full rounded-xl border border-zinc-800 bg-[#15151C] p-6 transition hover:border-violet-500">

                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-lg bg-violet-500/10 p-3 text-violet-400">
                            <Image size={24} />
                        </div>

                        <h2 className="text-xl font-semibold">
                            Image Generation
                        </h2>
                    </div>

                    <p className="text-sm leading-6 text-zinc-400">
                        Turn your ideas into images, illustrations, artwork, and designs using AI-powered image generation tools.
                    </p>

                    <div className="mt-5">
                        <Link className=" font-medium text-violet-400 cursor-pointer transition-colors duration-200 hover:text-violet-300"
                            href="/tools?category=Image Generation">
                            Explore tools →
                        </Link>
                    </div>

                </div>
                <div className="w-full rounded-xl border border-zinc-800 bg-[#15151C] p-6 transition hover:border-violet-500">

                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-lg bg-violet-500/10 p-3 text-violet-400">
                            <Video size={24} />
                        </div>

                        <h2 className="text-xl font-semibold">
                            Video
                        </h2>
                    </div>

                    <p className="text-sm leading-6 text-zinc-400">
                        Discover AI tools for generating videos, editing clips, creating animations, and producing engaging visual content.
                    </p>

                    <div className="mt-5 ">
                        <Link className="font-medium text-violet-400 cursor-pointer transition-colors duration-200 hover:text-violet-300"
                            href="/tools?category=Video">
                            Explore tools →
                        </Link>
                    </div>

                </div>
                <div className="w-full rounded-xl border border-zinc-800 bg-[#15151C] p-6 transition hover:border-violet-500">

                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-lg bg-violet-500/10 p-3 text-violet-400">
                            <Code2 size={24} />
                        </div>

                        <h2 className="text-xl font-semibold">
                            Coding
                        </h2>
                    </div>

                    <p className="text-sm leading-6 text-zinc-400">
                        Find AI tools that help you write code, debug errors, understand programming concepts, and improve development workflows.
                    </p>

                    <div className="mt-5 ">
                        <Link className="font-medium text-violet-400 cursor-pointer transition-colors duration-200 hover:text-violet-300"
                            href="/tools?category=Coding">
                            Explore tools →
                        </Link>
                    </div>



                </div>

                <div className="w-full rounded-xl border border-zinc-800 bg-[#15151C] p-6 transition hover:border-violet-500">

                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-lg bg-violet-500/10 p-3 text-violet-400">
                            <AudioLines size={24} />
                        </div>

                        <h2 className="text-xl font-semibold">
                            Audio
                        </h2>
                    </div>

                    <p className="text-sm leading-6 text-zinc-400">
                        Explore AI tools for voice generation, speech-to-text transcription, music creation, and audio editing.
                    </p>

                    <div className="mt-5 ">
                        <Link className="font-medium text-violet-400 cursor-pointer transition-colors duration-200 hover:text-violet-300"
                            href="/tools?category=Audio">
                            Explore tools →
                        </Link>
                    </div>


                </div>
                <div className="w-full rounded-xl border border-zinc-800 bg-[#15151C] p-6 transition hover:border-violet-500">

                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-lg bg-violet-500/10 p-3 text-violet-400">
                            <Zap size={24} />
                        </div>

                        <h2 className="text-xl font-semibold">
                            Productivity
                        </h2>
                    </div>

                    <p className="text-sm leading-6 text-zinc-400">
                        Save time and work smarter with AI tools for research, planning, organization, brainstorming, and everyday tasks.
                    </p>

                    <div className="mt-5">
                        <Link className=" font-medium text-violet-400 cursor-pointer transition-colors duration-200 hover:text-violet-300"
                            href="/tools?category=Productivity">
                            Explore tools →
                        </Link>
                    </div>


                </div>

            </div>

        </main>
    );
}

export default Categories;