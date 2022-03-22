/** @format */

import asyncHandler from "express-async-handler";
import Password from "../models/passwordModel.js";

// Fetch all passwords
// GET /api/passwords
// private
const getPasswords = asyncHandler(async (req, res) => {
  const passwords = await Password.find({ user: req.user._id });
  res.json(passwords);
});

// Fetch single password
// GET /api/password/:id
// private

const getPasswordById = asyncHandler(async (req, res) => {
  const password = await Password.findById(req.params.id);
  if (password) {
    res.json(password);
  } else {
    res.status(404);
    throw new Error("Password not found");
  }
});

// @desc     Create a passwords
// @route    POST api/passwords
// @access   Public

const createPassword = asyncHandler(async (req, res) => {
  const newPassword = new Password({
    url: req.body.url,
    username: req.body.username,
    sitePassword: req.body.sitePassword,
    notes: req.body.notes,
    user: req.user._id,
  });

  const createdPassword = await newPassword.save();
  res.status(201).json(createdPassword);
});

// @route   PUT /api/password/:id
// @access  Private/Admin
const updatePassword = asyncHandler(async (req, res) => {
  const {
    values: { url, username, sitePassword, notes },
  } = req.body;

  const password = await Password.findById(req.params.id);
  if (password) {
    password.username = username;
    password.url = url;
    password.sitePassword = sitePassword;
    password.notes = notes;
    const updatedPassword = await password.save();
    res.json(updatedPassword);
  } else {
    res.status(404);
    throw new Error("Password not found");
  }
});
// @desc    Delete a password
// @route   DELETE /api/password/:id
// @access
const deletePassword = asyncHandler(async (req, res) => {
  const password = await Password.findById(req.params.id);
  if (password) {
    await password.remove();
    res.json({ message: "Password removed" });
  } else {
    res.status(404);
    throw new Error("Password not found");
  }
});

export {
  getPasswords,
  getPasswordById,
  deletePassword,
  createPassword,
  updatePassword,
};
