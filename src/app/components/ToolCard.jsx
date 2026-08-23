import Link from "next/link";
export default function ToolCard({ tool }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-[#15151C] p-6">
      <h2 className="text-2xl font-bold text-white">{tool.name}</h2>
      <p className="mt-3 text-zinc-400 leading-6">{tool.description}</p>
      <div className="mt-5 space-y-5 text-sm text-zinc-400">
        <p>Category: {tool.category}</p>
        <p>Pricing: {tool.pricing}</p>
        <p>Rating: {tool.rating}/5</p>
        <p>Best For: {tool.bestFor}</p>
      </div>
      
      <Link
        href={`/tools/${tool.slug}`}
        className="mt-6 block w-full rounded-xl bg-violet-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-violet-500"
      >
        View Details
      </Link>


    </article>
  );
}