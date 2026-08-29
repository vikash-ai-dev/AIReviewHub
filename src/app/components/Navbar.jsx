"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className=" relative flex items-center justify-between px-6 py-6">
      {/* Brand */}
      <Link
        href="/"
        className="text-sm font-semibold uppercase tracking-widest text-violet-500"
      >
        AIReviewHub
      </Link>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white sm:hidden"
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      {/* Navigation */}
      <ul
        className={`${isMenuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-4 bg-[#0B0B0F] px-6 py-6 sm:static sm:flex sm:flex-row sm:gap-6 sm:bg-transparent sm:p-0 text-sm text-zinc-400`}
      >
        <li>
          <Link href="/tools" className={`transition hover:text-violet-400 ${
            pathname === "/tools" ? "text-violet-400 font-semibold" : ""
          }`}>AI Tools</Link>
        </li>

        <li>
          <Link href="/categories" className="transition hover:text-violet-400">Categories</Link>
        </li>

        <li>
          <Link href="/guides" className="transition hover:text-violet-400">Guides</Link>
        </li>

        <li>
          <Link href="/about" className="transition hover:text-violet-400">About</Link>
        </li>
      </ul>
    </nav>
  );
}