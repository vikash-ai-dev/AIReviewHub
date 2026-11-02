"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import ToolCard from "./components/ToolCard";
import tools from "./data/tools";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTools, setFilteredTools] = useState(tools);
  const [selectedCategory,setSelectedCategory] =
  useState("");


  const handleSearch = () => {
    if (searchQuery.trim()===""){
      setFilteredTools(tools);
      return;
    }
  
    const results = tools.filter((tool) =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || tool.description.toLowerCase().includes(searchQuery.toLowerCase()) || tool.bestFor.toLowerCase().includes(searchQuery.toLowerCase())
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
              onKeyDown={(e)=>{
                if (e.key === "Enter"){
                  handleSearch();
                }
              }}
            />

            <button
              onClick={handleSearch}
              className="rounded-xl bg-violet-600 px-7 py-4 font-semibold transition hover:bg-violet-500">
              Search
            </button>

          </div>
          <h2 className="mb-6 mt-5 w-full max-w-6xl text-2xl font-bold">
            Search Results
          </h2>

          <div className="mt-10 grid w-full max-w-2xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) =>(
              <ToolCard key={tool.slug} tool={tool}/>
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