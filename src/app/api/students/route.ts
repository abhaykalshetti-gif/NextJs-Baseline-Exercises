import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb"
import Student from "@/models/Student";

export async function GET() {
  await connectDB();
  const students = await Student.find();
  return NextResponse.json(students);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const newStudent = await Student.create(body);
  return NextResponse.json(newStudent);
}

export async function PUT(req: Request) {
  await connectDB();
  const body = await req.json();
  const updatedStudent = await Student.findByIdAndUpdate(body._id, body, {
    new: true,
  });
  return NextResponse.json(updatedStudent);
}

export async function DELETE(req: Request) {
  await connectDB();
  const body = await req.json();
  await Student.findByIdAndDelete(body._id);
  return NextResponse.json({ message: "Student deleted" });
}
