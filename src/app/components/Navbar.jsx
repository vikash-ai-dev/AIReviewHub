import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6">
      {/* Brand */}
      <Link
        href="/"
        className="text-sm font-semibold uppercase tracking-widest text-violet-500"
      >
        AIReviewHub
      </Link>

      {/* Navigation */}
      <ul className="flex gap-6 text-sm text-zinc-400">
        <li>
          <Link href="/tools">AI Tools</Link>
        </li>

        <li>
          <Link href="/categories">Categories</Link>
        </li>

        <li>
          <Link href="/guides">Guides</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}