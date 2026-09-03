import express from "express";
import { getGallery, getGalleryImage, createNewGalleryImage, updateExistingGalleryImage, deleteExistingGalleryImage } from "../controllers/galleryController.js";

const router = express.Router();
router.get("/", getGallery);
router.get("/:id", getGalleryImage);
router.post("/", createNewGalleryImage);
router.put("/:id", updateExistingGalleryImage);
router.delete("/:id", deleteExistingGalleryImage);
export default router;
