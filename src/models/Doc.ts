import mongoose from 'mongoose';

const DocSchema = new mongoose.Schema({
  title: String,
  description: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Doc", DocSchema);
