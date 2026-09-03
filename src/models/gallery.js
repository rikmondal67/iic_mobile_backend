import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    images: { type: String, required: true },
    publicId: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);
