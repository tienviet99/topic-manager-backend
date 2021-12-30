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
      .populate("teacherId")
      .populate("topicId");
    res.status(200).json(process);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const getProcessById = async (req, res) => {
  try {
    const process = await ProcessModel.findOne({
      _id: req.params.id,
    })
      .populate("teacherId")
      .populate("topicId");
    res.status(200).json(process);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const getProcess = async (req, res) => {
  try {
    const processAll = await ProcessModel.find()
      .populate("teacherId")
      .populate("topicId");
    // const process = [];
    // const processBeta = processAll.map(async(item) => {
    //   if (item.studentId) {
    //     const processAlpha = await ProcessModel
    //       .findOne({studentId: item.studentId})
    //       .populate("studentId")
    //       .populate("teacherId")
    //       .populate("topicId");
    //     return processAlpha
    //   } else{
    //     const processAlpha = await ProcessModel
    //       .findOne({studentId: item.studentId})
    //       .populate("teacherId")
    //       .populate("topicId");
    //     return processAlpha
    //   }
    // })
    // const b = processAll.filter(async function(item){
    //   if (item.studentId) {
    //     const processAlpha = await ProcessModel
    //       .findOne({studentId: item.studentId})
    //       .populate("studentId")
    //       .populate("teacherId")
    //       .populate("topicId");
    //       return processAlpha;
    //   }
    // })
    // console.log("b: ",b);
    res.status(200).json(processAll);
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
