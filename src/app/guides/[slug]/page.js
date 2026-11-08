
import Navbar from "@/app/components/Navbar";
import guides from "@/app/data/guides";

const GuideDetails = async ({ params }) => {
    const { slug } = await params;

    const guide = guides.find((item) => {
        return item.slug === slug;
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

                        <section className="flex flex-col gap-4 mt-10">

                            <h2 id="introduction" className="text-2xl font-bold">Introduction</h2>

                            <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                ChatGPT is a powerful AI assistant that can help you
                                with writing, coding, research, and much more.
                                In this guide, we'll explore practical ways to get
                                better results from ChatGPT.
                            </p>

                        </section>

                        <section className="flex flex-col gap-4 mt-10">

                            <h2 id="understanding-chatgpt" className="text-2xl font-bold">Understanding ChatGPT</h2>

                            <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                ChatGPT is an AI assistant developed by OpenAI.
                                It understands natural language and generates responses
                                based on the instructions and context you provide.
                                You can use it for writing, learning, brainstorming,
                                coding, and solving everyday problems.
                            </p>

                        </section>

                        <section className="flex flex-col gap-4 mt-10">
                            <h2 id="writing-better-prompts" className="text-2xl font-bold">
                                Writing Better Prompts
                            </h2>
                            <p className="text-zinc-400 leading-relaxed max-w-2xl">

                                The quality of ChatGPT's response often depends on
                                how clearly you describe your request. Instead of
                                asking vague questions, provide context, explain
                                your goal, and specify the format you want.
                            </p>

                        </section>

                        <section className="flex flex-col gap-4 mt-10">

                            <h2 id="practical-examples" className="text-2xl font-bold">Practical Examples</h2>

                            <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                Let's look at some practical examples of how you can
                                use ChatGPT in your daily life.
                            </p>

                            <div className="flex flex-col gap-4 mt-4">
                                <h3 className="text-xl font-semibold">
                                    1. Learning a New Concept
                                </h3>
                                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                    You can use ChatGPT to understand difficult topics
                                    in simple language. For example, if you are learning
                                    JavaScript, ask ChatGPT to explain concepts with
                                    beginner-friendly examples.

                                </p>
                            </div>

                            <div className="flex flex-col gap-3 mt-5">

                                <h3 className="text-xl font-semibold">
                                    2. Writing and Improving Content
                                </h3>

                                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                    ChatGPT can help you write emails, improve paragraphs,
                                    create blog ideas, and correct grammar. You can provide
                                    your original text and ask ChatGPT to make it clearer
                                    while keeping your intended meaning.
                                </p>

                            </div>
                            <div className="flex flex-col gap-3 mt-5">

                                <h3 className="text-xl font-semibold">
                                    3. Coding and Debugging
                                </h3>

                                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                    ChatGPT can help you understand programming concepts,
                                    find errors in your code, and suggest possible solutions.
                                    You can share your code and ask it to explain the problem
                                    step by step.
                                </p>

                            </div>

                        </section>

                        <section className="flex flex-col gap-4 mt-10">

                            <h2 id="tips-and-best-practices" className="text-2xl font-bold">
                                Tips and Best Practices
                            </h2>
                            <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                To get better results from ChatGPT, follow a few
                                simple practices when writing your prompts.
                            </p>

                            <div className="flex flex-col gap-3 mt-5">
                                <h3 className="text-xl font-semibold">
                                    1. Be Clear and Specific
                                </h3>
                                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                    Always explain what you want ChatGPT to do.
                                    Avoid vague instructions and provide enough details
                                    so ChatGPT can understand your goal and give you
                                    a more useful response.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 mt-5">

                                <h3 className="text-xl font-semibold">
                                    2. Provide Context
                                </h3>

                                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                    Give ChatGPT enough background information about
                                    your situation. Explain your experience level, what
                                    you are trying to achieve, and any specific requirements.
                                    This helps ChatGPT provide more relevant answers.
                                </p>

                            </div>

                            <div className="flex flex-col gap-3 mt-5">

                                <h3 className="text-xl font-semibold">
                                    3. Break Complex Tasks into Smaller Steps
                                </h3>

                                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                    If you have a complicated task, divide it into smaller
                                    steps instead of asking ChatGPT to do everything at once.
                                    This makes the process easier to understand and helps
                                    you review each result before moving forward.
                                </p>

                            </div>

                            <div className="flex flex-col gap-3 mt-5">

                                <h3 className="text-xl font-semibold">
                                    4. Review and Verify Responses
                                </h3>

                                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                    ChatGPT can sometimes provide incorrect or outdated
                                    information. Always review important answers and
                                    verify facts using reliable sources, especially when
                                    making important decisions.
                                </p>

                            </div>

                        </section>

                        <section className="flex flex-col gap-4 mt-10">

                            <h2 id="conclusion" className="text-2xl font-bold">
                                Conclusion
                            </h2>
                            <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                ChatGPT can be a useful assistant for learning,
                                writing, coding, and everyday tasks. By writing clear
                                prompts, providing enough context, and reviewing its
                                responses, you can get better results and use AI more
                                effectively. Remember that ChatGPT is a tool to support
                                your thinking, not replace it.
                            </p>

                        </section>
                        <div className="mt-8">
                            <a href="#top" className="text-violet-400 hover:text-violet-300 transition-colors">↑ Back to Top</a>
                        </div>
                        <section className="flex flex-col gap-5 mt-12">

                            <h2 className="text-2xl font-bold">
                                Related Guides
                            </h2>

                            <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                Explore more practical guides and tutorials to
                                learn about AI tools and improve your skills.
                            </p>

                        </section>

                    </div>

                    {/* ========= The End of Left Side =========== */}


                    {/* =========== Right Side ========== */}

                    <aside className="lg:col-span-1">

                        <div className="sticky top-24 bg-[#15151C] border border-zinc-800 rounded-xl p-5">

                            <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>

                            <ul className="flex flex-col text-sm text-zinc-400 gap-3">

                                <li>
                                    <a href="#introduction" className="hover:text-violet-400 transition-colors">
                                        Introduction
                                    </a>
                                </li>

                                <li>
                                    <a href="#understanding-chatgpt" className="hover:text-violet-400 transition-colors">
                                        Understanding the Tool
                                    </a>
                                </li>

                                <li>
                                    <a href="#writing-better-prompts" className="hover:text-violet-40 transition-colors">
                                        Writing Better Prompts
                                    </a>
                                </li>

                                <li>
                                    <a href="#practical-examples" className="hover:text-violet-400 transition-colors">
                                        Practical Examples
                                    </a>
                                </li>

                                <li>
                                    <a href="#tips-and-best-practices" className="hover:text-violet-400 transition-colors">
                                        Tips and Best Practices
                                    </a>
                                </li>

                                <li>
                                    <a href="#conclusion" className="hover:text-violet-400 transition-colors">
                                        Conclusion
                                    </a>
                                </li>
                            </ul>

                        </div>

                    </aside>
                    {/* =========The End of Right side ===========*/}

                </div>
            </div>


        </main>
    );
}

export default GuideDetails;