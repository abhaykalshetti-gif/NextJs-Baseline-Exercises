import Link from "next/link";

export default function Docs() {
  return (
    
    <div className="">
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">🌐 Next.js Routing Demo</h1>
          <ul className="flex space-x-6">
            <li>
              <Link href="/routing" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/routing/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/routing/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/routing/docs" className="hover:underline">
                Docs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className="text-2xl font-bold">📚 Docs Home</h1>
      <p className="mt-2 text-gray-600">Welcome to the documentation root.</p>
    </div>
  );
}
