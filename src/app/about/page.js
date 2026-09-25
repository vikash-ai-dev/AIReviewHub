import Navbar from "../components/Navbar";

export default function About() {
    return (
        <main>
            <Navbar />
            <section>
                <h1 className="mx-10 mt-10 text-5xl font-bold tracking-tight">
                    About AIReviewHub
                </h1>
                <p className="mx-10 mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    AIReviewHub helps you discover, compare, and understand AI tools through
                    honest reviews and practical guides — so you can find what actually works
                    for you, without wading through hype.
                </p>
            </section>
            <section className="mt-14">
                 <h2 className="mx-10 mt-4 text-2xl font-bold">
                    The Problem
                </h2>
                <p className="mx-10 mt-4 max-w-2xl leading-7 text-zinc-400">
                    There are thousands of AI tools available today, which makes it
                    difficult to know which ones are actually worth your time. AIReviewHub
                    exists to cut through that noise — helping you find the best tools,
                    compare similar options, and learn how to use them effectively.
                </p>
            </section>
            <section className="mx-10 mt-14 mb-5">
                <h2 className="text-2xl font-bold">Our Principles</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-zinc-800 bg-[#15151C] p-5">
                        <p className="font-semibold text-violet-400">Help users first</p>
                        <p className="mt-2 text-sm text-zinc-400">
                             Every decision starts with what's actually useful to you, not what's trending
                        </p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-[#15151C] p-5">
                        <p className="font-semibold text-violet-400">
                            Honest reviews over hype
                        </p>
                        <p className="mt-2 text-sm text-zinc-400">
                            We highlight real strengths and real limitations, not just marketing claims.
                        </p>
                    </div>

                    <div className="rounded-xl border
                    border-zinc-800 bg-[#15151C] p-5">
                        <p className="font-semibold text-violet-400">Quality over quantity</p>
                        <p className="mt-2 text-sm text-zinc-400">
                            We'd rather feature tools well than list everything with no depth.
                        </p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-[#15151c] p-5">
                        <p className="font-semibold text-violet-400">Clean, fast, mobile-friendly</p>
                        <p className="mt-2 text-sm text-zinc-400">
                            A good directory should be simple to use on any device.
                        </p>
                    </div>
                </div>
            </section>
            <section className="mx-10 mt-14 mb-16">
                <h2 className="text-2xl font-bold">Who It's For</h2>
                <div className="mt-5 flex gap-4">
                    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300">
                        Students
                    </span>
                    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300">
                        Content Creators
                    </span>
                    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300">
                        Freelancers
                    </span>
                    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300">
                        Developers
                    </span>
                    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300">
                        Small Business Owners
                    </span>
                </div>           
            </section>
        </main>
    );
}