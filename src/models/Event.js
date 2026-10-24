import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String },
    capacity: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const Event = mongoose.model('Event', eventSchema);
