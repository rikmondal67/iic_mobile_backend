import express from "express";
import { getActivities, getActivity, createNewActivity, updateExistingActivity, deleteExistingActivity } from "../controllers/activityController.js";

const router = express.Router();
router.get("/", getActivities);
router.get("/:id", getActivity);
router.post("/", createNewActivity);
router.put("/:id", updateExistingActivity);
router.delete("/:id", deleteExistingActivity);
export default router;
