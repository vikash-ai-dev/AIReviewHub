
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";

const Guide = () => {
    return (
        <main className="min-h-screen bg-[#0B0B0F] pb-10 text-white">

            <Navbar />

            <section className="mx-auto max-w-6xl">

                <div className="flex flex-col gap-4 items-center">

                    <h6 className="text-violet-400">
                        <span className="bg-zinc-800 rounded-2xl p-1.5 text-sm tracking-tight ">LEARN & EXPLORE</span>
                    </h6>

                    <h1 className="text-3xl font-semibold ">Learn to Use AI Better.</h1>

                    <h1 className="text-3xl text-violet-400 font-semibold ">Make Smarter Choices</h1>

                    <p className="max-w-xl text-base text-center text-zinc-400 ">Practical tutorials, helpful guides, and honest AI tool comparisons to help you get more from AI.</p>

                    <div className="relative w-full max-w-xl">

                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />

                        <input
                            className="w-full border border-zinc-800 bg-zinc-900 rounded-xl px-5 pl-12 py-4 text-white outline-none placeholder:text-zinc-400 placeholder:text-sm focus:border-violet-500"
                            type="text"
                            placeholder="Search guides, tutorials, comparisons..."
                        />

                    </div>

                </div>

                <div>

                </div>

            </section>

        </main>
    );
}

export default Guide;