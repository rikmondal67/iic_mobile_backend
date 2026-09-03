import {
  getAllTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "../services/teamService.js";

export const getTeam = async (req, res, next) => {
  try {
    const result = await getAllTeamMembers(req.query);
    res.status(200).json({ success: true, ...result });
  } catch (error) { next(error); }
};

export const getTeamMember = async (req, res, next) => {
  try {
    const user = await getTeamMemberById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: "Team member not found" });
    res.status(200).json(user);
  } catch (error) { next(error); }
};

export const createTeam = async (req, res, next) => {
  try { res.status(201).json(await createTeamMember(req.body)); }
  catch (error) { next(error); }
};

export const updateTeam = async (req, res, next) => {
  try {
    const user = await updateTeamMember(req.params.id, req.body);
    if (!user) return res.status(404).json({ success: false, message: "Team member not found" });
    res.status(200).json(user);
  } catch (error) { next(error); }
};

export const deleteTeam = async (req, res, next) => {
  try {
    const user = await deleteTeamMember(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: "Team member not found" });
    res.status(200).json(user);
  } catch (error) { next(error); }
};
