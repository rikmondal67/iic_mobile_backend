import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.Types.Mixed, default: null },
    isActive: { type: Boolean, default: true },
    name: { type: String, required: true, trim: true },
    details: { type: String, default: "" },
    photo: { type: String, default: "" },
    date: { type: String, default: "" },
    time: { type: String, default: "" },
    end_date: { type: String, default: "" },
    category: { type: String, default: "", trim: true },
    contactEmail: { type: String, default: "", trim: true },
    contactPhone: { type: String, default: "", trim: true },
    location: { type: String, default: "", trim: true },
    maxParticipants: { type: Number, default: null },
    registrationDeadline: { type: String, default: "" },
    registrationRequired: { type: Boolean, default: false },
    email: { type: String, default: "", trim: true },
    fee: { type: String, default: "", trim: true },
    link: { type: String, default: "", trim: true },
    registration: {
      fee: { type: String, default: "" },
      link: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Activity", activitySchema);
