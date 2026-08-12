
import Navbar from "./components/Navbar";
export default function Home() {
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
            />

            <button className="rounded-xl bg-violet-600 px-7 py-4 font-semibold transition hover:bg-violet-500">
              Search
            </button>

          </div>

        </div>

      </section>
    </main>
  );
}