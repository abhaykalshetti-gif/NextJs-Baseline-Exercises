"use client";
import { useEffect, useState } from "react";

interface Student {
  _id?: string;
  name: string;
  rollNo: string;
  class: string;
  age: string;
}

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [form, setForm] = useState<Student>({
    name: "",
    rollNo: "",
    class: "",
    age: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/students")
      .then((res) => res.json())
      .then(setStudents);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const res = await fetch("/api/students", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _id: editingId }),
      });
      const updated = await res.json();
      setStudents(students.map((s) => (s._id === updated._id ? updated : s)));
      setEditingId(null);
    } else {
      const res = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const newStudent = await res.json();
      setStudents([...students, newStudent]);
    }
    setForm({ name: "", rollNo: "", class: "", age: "" });
  };

  const handleEdit = (student: Student) => {
    setForm(student);
    setEditingId(student._id || null);
  };

  const handleDelete = async (id?: string) => {
    await fetch("/api/students", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: id }),
    });
    setStudents(students.filter((s) => s._id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🎓 Student Management</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-gray-100 p-4 rounded-lg"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 border rounded"
          required
        />
        <input
          name="rollNo"
          value={form.rollNo}
          onChange={handleChange}
          placeholder="Roll No"
          className="p-2 border rounded"
          required
        />
        <input
          name="class"
          value={form.class}
          onChange={handleChange}
          placeholder="Class"
          className="p-2 border rounded"
          required
        />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {editingId ? "Update Student" : "Add Student"}
        </button>
      </form>

      <table className="w-full mt-6 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Roll No</th>
            <th className="p-2 border">Class</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id} className="text-center">
              <td className="p-2 border">{s.name}</td>
              <td className="p-2 border">{s.rollNo}</td>
              <td className="p-2 border">{s.class}</td>
              <td className="p-2 border">{s.age}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleEdit(s)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(s._id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
