/** @format */

import asyncHandler from "express-async-handler";
import Note from "../models/noteModel.js";

// Fetch all notes
// GET /api/notes
// private
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

// Fetch single note
// GET /api/note/:id
// private

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

// @desc     Create a notes
// @route    POST api/notes
// @access   Public

const createNote = asyncHandler(async (req, res) => {
  const newNote = new Note({
    category: req.body.category,
    title: req.body.title,
    caption: req.body.caption,
    image: req.body.image,
    user: req.user._id,
  });

  const createdNote = await newNote.save();
  res.status(201).json(createdNote);
});

// @route   PUT /api/note/:id
// @access  Private/Admin
const updateNote = asyncHandler(async (req, res) => {
  const {
    values: { category, title, caption, image },
  } = req.body;

  const note = await Note.findById(req.params.id);
  if (note) {
    note.title = title;
    note.caption = caption;
    note.image = image;
    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});
// @desc    Delete a note
// @route   DELETE /api/note/:id
// @access
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note) {
    await note.remove();
    res.json({ message: "Note removed" });
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

export { getNotes, getNoteById, deleteNote, createNote, updateNote };
