
import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  class: { type: String, required: true },
  age: { type: String, required: true },
});

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
