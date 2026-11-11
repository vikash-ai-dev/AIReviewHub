"use client"

import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import GuideCard from "../components/GuideCard";
import { useState } from "react";
import guides from "../data/guides";

const Guide = () => {

    const [search,setSearch] = useState("");
    const [selectedCategory,setSelectedCategory] = useState("All Guides")
   

    const handleButton = (category)=> {
        setSelectedCategory(category)
    }

    const filteredGuides = guides.filter((item)=> {
        const matchesCategory = ()=> {
            if(selectedCategory === "All Guides"){
                return true;
            }
            else{
                return item.category === selectedCategory;
            }
        }
        
        const matchesSearch = 
            search.trim() === "" ||
            item.category.toLowerCase().includes(search.trim().toLowerCase()) ||
            item.title.toLowerCase().includes(search.trim().toLowerCase()) ||
            item.description.toLowerCase().includes(search.trim().toLowerCase()) 


        return matchesCategory() && matchesSearch;
        
    })

  

    return (
        <main className="min-h-screen bg-[#0B0B0F] pb-10 text-white">

            <Navbar />

            <div className="mx-auto max-w-6xl">

                <section className="flex flex-col gap-4 items-center">

                    <h6 className="text-violet-400">
                        <span className="bg-zinc-800 rounded-2xl py-1.5 px-2 text-sm tracking-tight ">LEARN & EXPLORE</span>
                    </h6>

                    <h1 className="text-3xl font-semibold ">Learn to Use AI Better.</h1>

                    <h1 className="text-3xl text-violet-400 font-semibold ">Make Smarter Choices</h1>

                    <p className="max-w-xl text-base text-center text-zinc-400 ">Practical tutorials, helpful guides, and honest AI tool comparisons to help you get more from AI.</p>

                    <div className="relative w-full max-w-xl">

                        <Search className="absolute left-7 md:left-4 top-1/2 -translate-y-1/2 text-zinc-400" />

                        <input
                            onChange={(e)=>setSearch(e.target.value)}
                            className="w-full border border-zinc-800 bg-zinc-900 rounded-xl px-5 pl-12 py-4 mx-5 md:mx-0 text-white outline-none placeholder:text-zinc-400 placeholder:text-sm focus:border-violet-500"
                            type="text"
                            placeholder="Search guides, tutorials, comparisons..."
                        />

                    </div>

                </section>

                <section className="mt-12 pl-5 flex flex-col gap-5">

                    <h2 className="text-2xl font-semibold text-white">Explore All Guides</h2>

                    <p className="text-zinc-400 max-w-xl text-base">Find practical tutorials, useful AI workflows, and detailed comparisons to help you get the most out of AI.</p>

                    <div className="flex flex-wrap gap-4">

                        <button onClick={()=> handleButton("All Guides")} className={`border border-zinc-800 rounded-xl py-2 px-3 ${selectedCategory === "All Guides" ? "bg-violet-500 text-white" : "bg-zinc-900 hover:bg-violet-500"}  font-semibold transition-colors duration-200`}>All Guides</button>

                        <button onClick={()=>handleButton("Tutorial")} className={`border border-zinc-800 rounded-xl py-2 px-3 ${selectedCategory === "Tutorial" ? "bg-violet-500 text-white" : "bg-zinc-900 hover:bg-violet-500 "} font-semibold transition-colors duration-200`}>Tutorials</button>

                        <button onClick={()=>handleButton("Practical Guide")} className={`border border-zinc-800 rounded-xl py-2 px-3 ${selectedCategory === "Practical Guide" ? "bg-violet-500 text-white" :"hover:bg-violet-500 bg-zinc-900"}  font-semibold transition-colors duration-200`}>Practical Guides</button>

                        <button onClick={()=>handleButton("Comparison")} className={`border border-zinc-800 rounded-xl py-2 px-3 ${selectedCategory === "Comparison" ? "bg-violet-500 text-white" :"hover:bg-violet-500 bg-zinc-900"} font-semibold transition-colors duration-200`}>Comparisons</button>

                    </div>

                    <GuideCard guides={filteredGuides}/>

                </section>

            </div>

        </main>
    );
}

export default Guide;