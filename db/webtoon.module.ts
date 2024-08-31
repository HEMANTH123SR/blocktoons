const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Chapter Schema
const ChapterSchema = new Schema({
  chapterNumber: { type: Number, required: true },
  title: { type: String, required: true },
  publishedDate: { type: String, required: true },
  imageCount: { type: Number, required: true },
  imageUrls: [{ type: String }],
});

// User Schema (embedded in WebToon)
const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String },
  profileImage: { type: String },
});

// WebToon Schema
const WebToonSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  coverImage: { type: String, required: true },
  backgroundImage: { type: String },
  tags: [{ type: String }],
  status: {
    type: String,
    enum: ["Ongoing", "Completed", "Cancelled"],
    required: true,
  },
  description: { type: String, required: true },
  rating: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0 },
  likeCount: { type: Number, default: 0 },
  isNew: { type: Boolean, default: false },
  isTrending: { type: Boolean, default: false },
  lastUpdated: { type: String, required: true },
  chapters: [ChapterSchema],
  createdBy: UserSchema,
});

export const WebToonModule =
  mongoose.models.WebToon || mongoose.model("WebToon", WebToonSchema);
