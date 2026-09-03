import {
  getAllActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity,
} from "../services/activityService.js";

export const getActivities = async (req, res, next) => {
  try { res.status(200).json(await getAllActivities()); }
  catch (error) { next(error); }
};

export const getActivity = async (req, res, next) => {
  try {
    const activity = await getActivityById(req.params.id);
    if (!activity) return res.status(404).json({ success: false, message: "Activity not found" });
    res.status(200).json(activity);
  } catch (error) { next(error); }
};

export const createNewActivity = async (req, res, next) => {
  try { res.status(201).json(await createActivity(req.body)); }
  catch (error) { next(error); }
};

export const updateExistingActivity = async (req, res, next) => {
  try {
    const activity = await updateActivity(req.params.id, req.body);
    if (!activity) return res.status(404).json({ success: false, message: "Activity not found" });
    res.status(200).json(activity);
  } catch (error) { next(error); }
};

export const deleteExistingActivity = async (req, res, next) => {
  try {
    const activity = await deleteActivity(req.params.id);
    if (!activity) return res.status(404).json({ success: false, message: "Activity not found" });
    res.status(200).json(activity);
  } catch (error) { next(error); }
};
