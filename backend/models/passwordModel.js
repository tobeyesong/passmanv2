/** @format */
import mongoose from "mongoose";

const passwordSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    url: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    sitePassword: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
      default: "Password",
    },
  },
  {
    timestamps: true,
  }
);

const Password = mongoose.model("Password", passwordSchema);

export default Password;
