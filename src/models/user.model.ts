import mongoose from "mongoose";
import { v4 } from "uuid";

export const USER_TYPES = {
  CUSTOMER: "customer",
  CENTER: "center",
};

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => v4().replace(/\-/g, ""),
    },
    firstName: String,
    lastName: String,
    type: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);

export default mongoose.model("User", userSchema);
