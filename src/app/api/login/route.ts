import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const validUser = {
    email: "test@example.com",
    password: "123456",
  };

  if (email === validUser.email && password === validUser.password) {
    return NextResponse.json(
      { success: true, message: "Login successful", user: { email } },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { success: false, message: "Invalid email or password" },
    { status: 401 }
  );
}
