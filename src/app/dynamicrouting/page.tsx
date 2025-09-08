import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">🏠 Home Page</h1>
        <p className="text-gray-600">Click on a Blog link to see Dynamic Routing with ID and Slug.</p>
      </div>
    </main>
  );
}
