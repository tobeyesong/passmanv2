/** @format */

import dotenv from "dotenv";
import users from "./data/users.js";
import passwords from "./data/passwords.js";
import User from "./models/userModel.js";
import Password from "./models/passwordModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Password.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const samplePasswords = passwords.map((passwords) => {
      return { ...passwords, user: adminUser };
    });

    await Password.insertMany(samplePasswords);
    console.log("data imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit();
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Password.deleteMany();

    console.log("data DESTROYED");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit();
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
