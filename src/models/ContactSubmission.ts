import mongoose, { Schema, type InferSchemaType } from "mongoose";

const ContactSubmissionSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 200 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    phone: { type: String, trim: true, maxlength: 50 },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    service: { type: String, trim: true, maxlength: 100 },
    source: { type: String, trim: true, maxlength: 200 },
    emailSent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export type ContactSubmission = InferSchemaType<typeof ContactSubmissionSchema>;

export default mongoose.models.ContactSubmission ||
  mongoose.model("ContactSubmission", ContactSubmissionSchema);
