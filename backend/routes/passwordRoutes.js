/** @format */

import express from "express";
const router = express.Router();
import {
  getPasswords,
  getPasswordById,
  deletePassword,
  createPassword,
  updatePassword,
} from "../controllers/passwordsControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getPasswords).post(protect, createPassword);
router
  .route("/:id")
  .get(getPasswordById)
  .delete(deletePassword)
  .put(updatePassword);

export default router;
