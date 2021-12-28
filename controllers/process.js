import { ProcessModel } from "../models/ProcessModel.js";

export const getProcessStudent = async (req, res) => {
  try {
    const process = await ProcessModel.find({
      studentId: req.params.studentId,
    })
      .populate("studentId")
      .populate("teacherId")
      .populate("topicId");
    res.status(200).json(process);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const getProcessTeacher = async (req, res) => {
  try {
    const process = await ProcessModel.find({
      teacherId: req.params.teacherId,
    })
      .populate("studentId")
      .populate("teacherId")
      .populate("topicId");
    res.status(200).json(process);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const getProcess = async (req, res) => {
  try {
    const process = await ProcessModel.find()
      .populate("studentId")
      .populate("teacherId")
      .populate("topicId");

    res.status(200).json(process);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const createProcess = async (req, res) => {
  try {
    const newProcess = req.body;
    const process = new ProcessModel(newProcess);
    await process.save();
    res.status(200).json(process);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const updateProcess = async (req, res) => {
  try {
    const updateProcess = req.body;
    const process = await ProcessModel.findOneAndUpdate(
      { _id: req.params.id },
      updateProcess,
      {
        new: true,
      }
    );
    res.status(200).json(process);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const deleteProcess = async (req, res) => {
  try {
    const topic = await ProcessModel.findById(req.params.id);
    topic.remove();
    res.status(200).json(process);
  } catch (error) { 
    res.status(500).json(`${error}`);
  }
};
