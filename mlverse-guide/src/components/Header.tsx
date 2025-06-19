'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        <div className="text-xl font-semibold">CVMindscape</div>
        <nav className="flex gap-6 text-sm sm:text-base font-medium items-center">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/theory" className="hover:underline">Theory</Link>
          <Link href="/practical" className="hover:underline">Practical</Link>
        </nav>
      </div>
    </header>
  );
}
