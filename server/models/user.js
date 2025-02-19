import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      // unique:true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      default: 0,
      // unique:true,
      required: true,
    },
    address: {
      type: String,
    },
    roll: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", UserSchema);

export default User;
