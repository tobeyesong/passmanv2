/** @format */

import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
    default: "Note",
  },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
