import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    photo: { type: String, default: "" },
    designation: { type: String, default: "", trim: true },
    type: { type: String, default: "", trim: true },
    isActive: { type: Boolean, default: true },
    extra: {
      linkedin: { type: String, default: "" },
      github: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Team", teamSchema);
