"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <ul className="flex space-x-6">
        <li><Link href="/dynamicrouting">Home</Link></li>
        <li><Link href="/dynamicrouting/blog/1/nextjs-routing">Blog 1</Link></li>
        <li><Link href="/dynamicrouting/blog/2/tailwind-styling">Blog 2</Link></li>
        <li><Link href="/dynamicrouting/blog/3/zod-validation">Blog 3</Link></li>
      </ul>
    </nav>
  );
}
