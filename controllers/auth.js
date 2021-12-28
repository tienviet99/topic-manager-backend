import { UserModel } from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v1 } from "uuid";

const uuidv1 = v1;
export const login =  async (req, res) => {
  try {
    const body = req.body;
    const user = await UserModel.findOne({ userId: body.userId});
    if (user) {
      const validPassword = await bcrypt.compare(body.password, user.password)
      if (validPassword) {
        const secret = uuidv1();
        const token = jwt.sign({_id: user._id, role: user.role}, `${secret}`)
        return res.status(200).json({token, secret});
      } else {
        res.status(400).json({error: "Invalid Password, Please try again"})
      }
    } else {
      res.status(401).json({error: "Error Password . Please try again"})
    }
  } catch (error) {
    res.status(500).json(`${error}`)
  }
}