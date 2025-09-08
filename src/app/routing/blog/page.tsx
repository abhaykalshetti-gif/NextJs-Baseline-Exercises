import Link from "next/link";

const blogs = [
  { id: 1, title: "Learning Next.js Routing" },
  { id: 2, title: "Dynamic Routes Made Easy" },
];

export default function Blog() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">📝 Blog Page</h1>
    </div>
  );
}
