import express from "express";
import { getTeam, getTeamMember, createTeam, updateTeam, deleteTeam } from "../controllers/teamController.js";

const router = express.Router();
router.get("/", getTeam);
router.get("/:id", getTeamMember);
router.post("/", createTeam);
router.put("/:id", updateTeam);
router.delete("/:id", deleteTeam);
export default router;
