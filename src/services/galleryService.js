import Gallery from "../models/gallery.js";

export const getAllGalleryImages = () =>
  Gallery.find({ isActive: true }).sort({ createdAt: -1 });

export const getGalleryImageById = (id) =>
  Gallery.findOne({ _id: id, isActive: true });

export const createGalleryImage = (data) => Gallery.create(data);

export const updateGalleryImage = (id, data) =>
  Gallery.findByIdAndUpdate(id, data, { new: true, runValidators: true });

export const deleteGalleryImage = (id) =>
  Gallery.findByIdAndUpdate(id, { isActive: false }, { new: true });
