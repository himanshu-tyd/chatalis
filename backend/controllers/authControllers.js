import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { phone, name, } = req.body;

  try {
    const exist = await User.findOne({ phone });

    if (exist) {
      return res
        .status(409)
        .json({ success: false, message: "number is already register!" });
    }

    console.log(phone);

    const newUser = new User({
      phone,
      name,
    });

    const save = await newUser.save();

    if (save) {
      return res
        .status(200)
        .json({ success: true, message: "phone is stored", data: save });
    }

    res
      .status(204)
      .json({ success: false, message: "can not register please try again" });
  } catch (e) {
    console.log(`error while registration=>${e}`);
    return res.status(500).json({
      success: false,
      message: "failed to create account",
    });
  }
};
