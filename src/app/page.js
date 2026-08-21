"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import tools from "./data/tools";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const [filteredTools, setFilteredTools] = useState(tools);


  const handleSearch = () => {
    const results = tools.filter((tool) =>
      tool.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    setFilteredTools(results);
  };
  return (
    <main>
      {/* Hero */}

      <section className="min-h-screen bg-[#0B0B0F] text-white">
        <Navbar />

        {/* Hero Content */}
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">

          {/* Main Heading */}
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Discover AI Tools That Actually Help
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Find the right AI tool for your needs with reviews, comparisons,
            and practical guides.
          </p>

          {/* Search */}
          <div className="mt-10 flex w-full max-w-2xl gap-3">

            <input
              type="text"
              placeholder="What AI tool are you looking for?"
              className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-violet-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button
              onClick={handleSearch}
              className="rounded-xl bg-violet-600 px-7 py-4 font-semibold transition hover:bg-violet-500">
              Search
            </button>

          </div>

          <div className="mt-10 w-full max-w-2xl text-left">
            {filteredTools.map((tool) => (
              <div key={tool.slug} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <h2 className="text-2xl font-bold">{tool.name}</h2>

                <p className="mt-2 text-zinc-400">
                  {tool.description}
                </p>

                <p className="mt-4 text-sm text-violet-400">
                  {tool.category}
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Pricing: {tool.pricing}
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  Rating: ⭐ {tool.rating}
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  Best for: {tool.bestFor}
                </p>
              </div>
            ))}
            {filteredTools.length === 0 && (
              <p className="text-center text-zinc-400">
                No AI tools found. Try a different search.
              </p>
            )}
          </div>

        </div>

      </section>
    </main>
  );
}