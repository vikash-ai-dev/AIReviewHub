import tools from "../../data/tools";

export default async function ToolDetails({ params }) {
  const { slug } = await params;

  const tool = tools.find((tool) => tool.slug === slug);

  return (
    <main className="min-h-screen bg-[#0B0B0F] px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">
          AIReviewHub
        </p>

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

      </div>
    </main>
  );
}