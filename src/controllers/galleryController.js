import {
  getAllGalleryImages,
  getGalleryImageById,
  createGalleryImage,
  updateGalleryImage,
  deleteGalleryImage,
} from "../services/galleryService.js";

export const getGallery = async (req, res, next) => {
  try { res.status(200).json(await getAllGalleryImages()); }
  catch (error) { next(error); }
};

export const getGalleryImage = async (req, res, next) => {
  try {
    const image = await getGalleryImageById(req.params.id);
    if (!image) return res.status(404).json({ success: false, message: "Gallery image not found" });
    res.status(200).json(image);
  } catch (error) { next(error); }
};

export const createNewGalleryImage = async (req, res, next) => {
  try { res.status(201).json(await createGalleryImage(req.body)); }
  catch (error) { next(error); }
};

export const updateExistingGalleryImage = async (req, res, next) => {
  try {
    const image = await updateGalleryImage(req.params.id, req.body);
    if (!image) return res.status(404).json({ success: false, message: "Gallery image not found" });
    res.status(200).json(image);
  } catch (error) { next(error); }
};

export const deleteExistingGalleryImage = async (req, res, next) => {
  try {
    const image = await deleteGalleryImage(req.params.id);
    if (!image) return res.status(404).json({ success: false, message: "Gallery image not found" });
    res.status(200).json(image);
  } catch (error) { next(error); }
};
