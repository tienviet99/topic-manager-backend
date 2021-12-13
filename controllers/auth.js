import { UserModel } from "../models/UserModel.js";
const bcrypt = await import ("bcrypt");
const jwt = await import ("jsonwebtoken");

export const login =  async (req, res) => {
  try {
    const body = req.body;
    const user = await UserModel.findOne({ userId: body.userId});
    if (user) {
      const validPassword = await bcrypt.compare(body.password, user.password)
      if (validPassword) {
        res.status(200).json({ message: "Valid Password"})
      } else {
        res.status(400).json({error: "Invalid Password, Please try again"})
      }
    } else {
      res.status(401).json({error: "Error Password . Please try again"})
    }
  } catch (error) {
    res.status(500).json({ err: error })
  }
}