import mongoose from "mongoose";
import productModel from "./productModel.js";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    maxlength: [20, "First name cannot be more than 20 characters"],
  },
  lastName: {
    type: String,
    maxlength: [20, "Last name cannot be more than 20 characters"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
  },
  cart: {
    type: [productModel.Schema],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);
export default User;
