
export default async function UsersPage() {

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // always fetch fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users!");
  }

  const users = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">👥 Users List</h1>
      <ul className="space-y-3">
        {users.map((user: any) => (
          <li
            key={user.id}
            className="p-4 border rounded-lg bg-white shadow hover:shadow-md transition"
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
