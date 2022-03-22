/** @format */

import express from "express";
const router = express.Router();
import {
  getNotes,
  getNoteById,
  deleteNote,
  createNote,
  updateNote,
} from "../controllers/notesController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getNotes).post(protect, createNote);
router.route("/:id").get(getNoteById).delete(deleteNote).put(updateNote);

export default router;
