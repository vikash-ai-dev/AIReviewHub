import { notFound } from "next/navigation";
import Link from "next/link";
import tools from "../../data/tools";
export default async function ToolDetails({ params }) {
  const { slug } = await params;

  const tool = tools.find((tool) => tool.slug === slug);
  if (!tool) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B0B0F] px-6 py-10 text-white">
       <Link href="/tools" className="text-sm font-bold  inline-block mb-3 text-zinc-400 transition hover:text-violet-400">
            ← Back to AI Tools
        </Link>
      <div className="mx-auto max-w-4xl ">

        <Link href="/" className="text-sm font-semibold uppercase tracking-widest text-violet-500 self-start">
          AIReviewHub
        </Link>

        <h1 className="mt-6 text-5xl font-bold tracking-tight">
          {tool.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          {tool.description}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-500">Category</p>
            <p className="mt-2 font-semibold">{tool.category}</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-500">Pricing</p>
            <p className="mt-2 font-semibold">{tool.pricing}</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-500">Rating</p>
            <p className="mt-2 font-semibold">{tool.rating}/5</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-500">Best For</p>
            <p className="mt-2 font-semibold">{tool.bestFor}</p>
          </div>
            
        </div>

        {tool.features && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold">Features</h2>
            <ul className="mt-4 space-y-2 text-zinc-400">
              {tool.features.map((features) => (
                <li key={features} className="flex items-start gap-2">
                  <span className="text-violet-500">•</span>
                  {features}
                </li>
              ))}
            </ul>
          </div>
        )}
        {tool.pros && tool.cons && (
          <div className="mt-10  grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <h3 className="font-semibold text-emerald-400">Pros</h3>
              <ul className="mt-3 space-y-2 text-zinc-400">
                {tool.pros.map((pro)=>(
                  <li key={pro} className="flex items-start gap-2">
                    <span className="text-emerald-400">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <h3 className="font-semibold text-red-400">Cons</h3>
              <ul className="mt-3 space-y-2 text-zinc-400">
                {tool.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2">
                    <span className="text-red-400">−</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {tool.review && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold">AIReviewHub Review</h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {tool.review}
            </p>
          </div>
        )}

          <a href={tool.website}
            target="_blank"
            rel = "noopener noreferrer"
            className="mt-10 inline-block rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500">
              Visit Tool
          </a>
      </div>
    </main>
  );
}
              

