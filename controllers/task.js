import { TaskModel } from "../models/TaskModel.js";

export const validatePercent = (percent, totalPercent) => {
  return parseInt(`${percent}`) > parseInt(`${totalPercent}`);
};

export const getTask = async (req, res) => {
  try {
    const task = await TaskModel.find().populate("processId");
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await TaskModel.findById({ _id: req.params.id }).populate(
      "processId"
    );
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const getTaskByProcessId = async (req, res) => {
  try {
    const task = await TaskModel.find({
      processId: req.params.processId,
    }).populate("processId");
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const createTask = async (req, res) => {
  try {
    const newTask = req.body;
    const task = new TaskModel(newTask);

    if (validatePercent(newTask.completePercent, newTask.totalPercent)) {
      return res.status(400).json({
        error:
          "Path `completePercent` is more than maximum allowed value `totalPercent`.",
      });
    } else await task.save();

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const updateTask = async (req, res) => {
  try {
    const updateTask = req.body;

    if (validatePercent(updateTask.completePercent, updateTask.totalPercent)) {
      return res.status(400).json({
        error:
          "Path `completePercent` is more than maximum allowed value `totalPercent`.",
      });
    } else {
      const task = await TaskModel.findOneAndUpdate(
        { _id: req.params.id },
        updateTask,
        {
          new: true,
        }
      );
      res.status(200).json(task);
    }
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params.id);
    task.remove();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};
