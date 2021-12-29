import { TopicModel } from "../models/TopicModel.js";
import { ProcessModel } from "../models/ProcessModel.js";

export const getTopic = async (req, res) => {
  try {
    const topics = await TopicModel.find().populate("teacherId");
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const getTopicById = async (req, res) => {
  try {
    const topics = await TopicModel.findById({ _id: req.params.id}).populate("teacherId");
    res.status(200).json(topics)
  } catch (error) {
    res.status(500).json({err: error});
  }
}

export const searchTopic = async (req, res) => {
  try {
    const params = req.body.keyword;
    const topic = await TopicModel.find({
      $or: [
        { topicId: { $regex: params } },
        { name: { $regex: params } },
        { major: { $regex: params } },
      ],
    }).populate("teacherId");
    res.status(200).json(topic);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const searchTopicStatus = async (req, res) => {
  try {
    const topic = await TopicModel.find({ status: req.params.status }).populate("teacherId");
    res.status(200).json(topic);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const createTopic = async (req, res) => {
  try {
    const newTopic = req.body;
    const topic = new TopicModel(newTopic);
    await topic.save();
    const newProcess = {
      studentId: '',
      teacherId: req.body.teacherId,
      topicId: topic._id,
      status: true,
      point: 0,
      percent: 0,
    }
    const process = new ProcessModel(newProcess);
    await process.save();
    res.status(200).json(topic);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const updateTopic = async (req, res) => {
  try {
    const updateTopic = req.body;
    const topic = await TopicModel.findOneAndUpdate(
      { _id: req.params.id },
      updateTopic,
      {
        new: true,
      }
    );
    res.status(200).json(topic);

    const updateProcess = {teacherId: `${req.body.teacherId}`};
    await ProcessModel.findOneAndUpdate(
      {topicId: req.params.id},
      updateProcess,
      {
        new: true,
      }
      )
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export const deleteTopic = async (req, res) => {
  try {
    const topic = await TopicModel.findById(req.params.id);
    topic.remove();
    res.status(200).json(topic);

    const process = await ProcessModel.findOneAndDelete({topicId: req.params.id});
    console.log('process: ',process);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};
