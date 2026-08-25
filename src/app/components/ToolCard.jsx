import Link from "next/link";
export default function ToolCard({ tool }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-[#15151C] p-6 transition hover:border-violet-500">
      <h2 className="text-2xl font-bold text-white">{tool.name}</h2>
      <p className="mt-3 text-zinc-400 leading-6">{tool.description}</p>

      <div className="mt-5 space-y-5 text-sm text-zinc-400">
        <div className="flex flex-wrap gap-2">

          <span className="inline-flex items-center rounded-full bg-zinc-800 px-3 py-1 text-sm font-medium text-zinc-300">
            {tool.category}
          </span>

          <span className="inline-flex items-center rounded-full bg-emerald-600/20 px-3 py-1 text-sm font-medium text-emerald-400">

            Pricing: {tool.pricing}

          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-violet-600/20 px-3 py-1 text-sm font-medium text-violet-400">
            ★ {tool.rating}
          </span>

        </div>



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