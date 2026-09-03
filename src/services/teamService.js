import Team from "../models/team.js";

export const getAllTeamMembers = async ({ page = 1, limit = 100 } = {}) => {
  const currentPage = Math.max(Number(page) || 1, 1);
  const usersPerPage = Math.min(Math.max(Number(limit) || 100, 1), 100);
  const filter = { isActive: true };

  const [users, totalUsers] = await Promise.all([
    Team.find(filter)
      .sort({ createdAt: 1 })
      .skip((currentPage - 1) * usersPerPage)
      .limit(usersPerPage),
    Team.countDocuments(filter),
  ]);

  return {
    users,
    pagination: {
      currentPage,
      totalPages: Math.max(Math.ceil(totalUsers / usersPerPage), 1),
      totalUsers,
      usersPerPage,
    },
  };
};

export const getTeamMemberById = (id) =>
  Team.findOne({ _id: id, isActive: true });

export const createTeamMember = (data) => Team.create(data);

export const updateTeamMember = (id, data) =>
  Team.findByIdAndUpdate(id, data, { new: true, runValidators: true });

export const deleteTeamMember = (id) =>
  Team.findByIdAndUpdate(id, { isActive: false }, { new: true });
