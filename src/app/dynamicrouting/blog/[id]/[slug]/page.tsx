import Navbar from "../../../components/Navbar";

interface BlogProps {
  params: { id: string; slug: string };
}

export default function BlogPage({ params }: BlogProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">📝 Blog Post</h1>
        <p className="text-gray-600">Blog ID: {params.id}</p>
        <p className="text-gray-600">Blog Slug: {params.slug}</p>
      </div>
    </main>
  );
}
