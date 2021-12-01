import { TopicModel } from "../models/TopicModel.js";

export const getTopic = async (req, res) => {
  try {
    const topics = await TopicModel.find();
    console.log("topics :", topics);
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const searchTopic = async (req, res) => {
  try {
    const params = req.body.keyword;
    const topic = await TopicModel.find({
      $or: [
        { topicId: { $regex: params } },
        { name: { $regex: params } },
        { major: { $regex: params } },
        { teacherName: { $regex: params } },
      ],
    });
    res.status(200).json(topic);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const searchTopicStatus = async (req, res) => {
  try {
    const topic = await TopicModel.find({ status: req.params.status });
    res.status(200).json(topic);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const createTopic = async (req, res) => {
  try {
    const newTopic = req.body;

    const topic = new TopicModel(newTopic);
    await topic.save();
    res.status(200).json(topic);
  } catch (error) {
    res.status(500).json({ err: error });
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
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const deleteTopic = async (req, res) => {
  try {
    const topic = await TopicModel.findById(req.params.id);
    topic.remove();

    res.status(200).json(topic);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
