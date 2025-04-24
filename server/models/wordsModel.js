import mongoose from "mongoose";

const wordsSchema = new mongoose.Schema({
  pack: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // refers to the user collection
      required: true,
    },
    language: {
      enum: ["en", "he"],
    },
    pack: {
      front: { type: String },
      back: { type: String },
    },
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", wordsSchema);
