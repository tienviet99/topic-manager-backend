import { UserModel } from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  try {
    const users = await UserModel.find().populate("completeTopic");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById({ _id: req.params.id }).populate(
      "completeTopic"
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const getUserByUserId = async (req, res) => {
  try {
    const user = await UserModel.findOne({ userId: req.params.keyword }).populate(
      "completeTopic"
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const searchUser = async (req, res) => {
  try {
    const params = req.body.keyword;
    const user = await UserModel.find({
      $or: [
        { userId: { $regex: params } },
        { phone: { $regex: params } },
        { name: { $regex: params } },
        { date: { $regex: params } },
        { major: { $regex: params } },
      ],
    }).populate("completeTopic");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = new UserModel(newUser);
    const salt = await bcrypt.genSalt(9)
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateUser = req.body;
    const user = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      updateUser,
      {
        new: true,
      }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    user.remove();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};
