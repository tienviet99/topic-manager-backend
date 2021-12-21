import { ReportModel } from "../models/ReportModel.js";

export const getReport = async (req, res) => {
  try {
    const report = await ReportModel.find().populate("taskId");
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const getReportByTaskId = async (req, res) => {
  try {
    const report = await ReportModel.find({
      taskId: req.params.taskId,
    }).populate("taskId");
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const createReport = async (req, res) => {
  try {
    const newReport = req.body;
    const report = new ReportModel(newReport);
    await report.save();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const updateReport = async (req, res) => {
  try {
    const updateReport = req.body;
    const report = await ReportModel.findOneAndUpdate(
      { _id: req.params.id },
      updateReport,
      {
        new: true,
      }
    );
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const deleteReport = async (req, res) => {
  try {
    const report = await ReportModel.findById(req.params.id);
    report.remove();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
