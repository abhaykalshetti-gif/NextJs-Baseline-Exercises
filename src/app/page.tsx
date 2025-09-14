"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
         Next.js Baseline Exercises
      </h1>

      <div className="grid gap-6 max-w-xl">
        <Link
          href="/routing"
          className="block p-4 rounded-xl bg-white shadow-md hover:shadow-lg border hover:border-blue-500 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            React Routing Implementation
          </h2>
          <p className="text-sm text-gray-500">Learn how to use Next.js routing.</p>
        </Link>

        <Link
          href="/dynamicrouting"
          className="block p-4 rounded-xl bg-white shadow-md hover:shadow-lg border hover:border-blue-500 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Dynamic Routing Implementation
          </h2>
          <p className="text-sm text-gray-500">Work with dynamic route parameters.</p>
        </Link>

        <Link
          href="/zodvalidations"
          className="block p-4 rounded-xl bg-white shadow-md hover:shadow-lg border hover:border-green-500 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Zod Validation
          </h2>
          <p className="text-sm text-gray-500">Validate forms with Zod schemas.</p>
        </Link>

        <Link
          href="/clientcomponents"
          className="block p-4 rounded-xl bg-white shadow-md hover:shadow-lg border hover:border-purple-500 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Client Components
          </h2>
          <p className="text-sm text-gray-500">Fetch and render with client components.</p>
        </Link>

        <Link
          href="/servercomponents/login"
          className="block p-4 rounded-xl bg-white shadow-md hover:shadow-lg border hover:border-red-500 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Server Components + Login
          </h2>
          <p className="text-sm text-gray-500">Render data on the server securely.</p>
        </Link>

        <Link
          href="/apiroutes"
          className="block p-4 rounded-xl bg-white shadow-md hover:shadow-lg border hover:border-yellow-500 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            API Routes Implementation
          </h2>
          <p className="text-sm text-gray-500">Create and test Next.js API routes.</p>
        </Link>

        <Link
          href="/performance-optimaization"
          className="block p-4 rounded-xl bg-white shadow-md hover:shadow-lg border hover:border-purple-500 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">
             Performance optimization Implementation
          </h2>
          <p className="text-sm text-gray-500">
           demonstration of performance optimization concept (Code-splitting & Dynamic Imports, Lazy Loading, Suspense)</p>
        </Link>

        <Link
          href="/mongodb"
          className="block p-4 rounded-xl bg-white shadow-md hover:shadow-lg border hover:border-black-500 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">
             MongoDB Integration in Nextjs
          </h2>
          <p className="text-sm text-gray-500">
           Connecting to MongoDB database and performing  Data Insertion, Delition and Updation from database</p>
        </Link>

<Link
          href="/errorhandling-loadingstates"
          className="block p-4 rounded-xl bg-white shadow-md hover:shadow-lg border hover:border-black-500 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">
             Error handling and Loading states in Nextjs
          </h2>
          <p className="text-sm text-gray-500">
          Create error.tsx and loading.tsx inside any route folder to handle route-level errors and loading states.</p>
        </Link>

         <Link
          href="/appoinment-scheduler"
          className="block p-4 rounded-xl bg-white shadow-md hover:shadow-lg border hover:border-black-500 transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">
             NextJs Project Demo
          </h2>
        </Link>
      </div>
    </div>
  );
}
