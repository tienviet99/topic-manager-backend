import { UserModel } from "../models/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const users = await UserModel.find().populate("completeTopic");
    console.log("user :", users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ err: error });
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
    res.status(500).json({ err: error });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = new UserModel(newUser);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ err: error });
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
    res.status(500).json({ err: error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    user.remove();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
