"use client";

import { useState } from "react";
import tools from "../data/tools";
import ToolCard from "../components/ToolCard";
export default function Tools() {
    const [search, setSearch] = useState("");

    return (
        <main className="min-h-screen bg-[#0B0B0F] px-6 py-12 text-white">
            <section className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">AIReviewHub</p>

                <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">AI Tools</h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                    Discover AI tools that can help you work, learn, create, and grow.
                </p>

                <div className="mt-8 flex w-full max-w-2xl gap-3 flex-col sm:flex-row">

                    <input className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-violet-500"

                        type="text"

                        placeholder="Search for an AI tool"
                        value={search}
                        
                        onChange={(e)=> setSearch(e.target.value)}>

                    </input>

                    
                    <button className="rounded-xl bg-violet-600 px-7 py-4 font-semibold transition hover:bg-violet-500">Search</button>
                </div>
                <section className="mt-16">
                    <h2 className="text-2xl font-bold">Explore by Category</h2>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <button className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-violet-500 hover:text-white">Writing</button>
                        <button className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-violet-500 hover:text-white">Image Generation</button>
                        <button className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-violet-500 hover:text-white">Video</button>
                        <button className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-violet-500 hover:text-white">Coding</button>
                        <button className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-violet-500 hover:text-white">Audio</button>
                        <button className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-violet-500 hover:text-white">Productivity</button>
                    </div>
                </section>
                <section className="mt-16">
                    <h2 className="text-2xl font-bold">
                        Featured AI Tools
                    </h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {tools.map((tool) => (
                            <ToolCard key={tool.name} tool={tool} />
                        ))}

                    </div>


                </section>

            </section>
        </main>
    );
}