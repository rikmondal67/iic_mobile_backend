import Activity from "../models/activity.js";

export const getAllActivities = () =>
  Activity.find({ isActive: true }).sort({ date: -1, updatedAt: -1 });

export const getActivityById = (id) =>
  Activity.findOne({ _id: id, isActive: true });

export const createActivity = (data) => Activity.create(data);

export const updateActivity = (id, data) =>
  Activity.findByIdAndUpdate(id, data, { new: true, runValidators: true });

export const deleteActivity = (id) =>
  Activity.findByIdAndUpdate(id, { isActive: false }, { new: true });
