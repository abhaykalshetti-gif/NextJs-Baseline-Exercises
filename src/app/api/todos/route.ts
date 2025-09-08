import { NextResponse } from "next/server";

let todos = [
  { id: 1, title: "Learn Next.js", completed: false },
  { id: 2, title: "Build Todo App", completed: false },
];

// GET - Fetch todos
export async function GET() {
  return NextResponse.json(todos);
}

// POST - Add a new todo
export async function POST(req: Request) {
  const body = await req.json();
  const newTodo = {
    id: Date.now(),
    title: body.title,
    completed: false,
  };
  todos.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}

// PUT - Update todo (toggle completed)
export async function PUT(req: Request) {
  const body = await req.json();
  todos = todos.map((todo) =>
    todo.id === body.id ? { ...todo, completed: !todo.completed } : todo
  );
  return NextResponse.json({ message: "Todo updated" });
}

// DELETE - Remove a todo
export async function DELETE(req: Request) {
  const body = await req.json();
  todos = todos.filter((todo) => todo.id !== body.id);
  return NextResponse.json({ message: "Todo deleted" });
}
