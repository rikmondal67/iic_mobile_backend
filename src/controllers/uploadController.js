import crypto from "crypto";

export const getUploadSignature = async (req, res, next) => {
  try {
    const allowedFolders = ["iic/team", "iic/activity", "iic/gallery"];
    const folder = allowedFolders.includes(req.query.folder)
      ? req.query.folder
      : "iic/gallery";
    const timestamp = Math.round(Date.now() / 1000);
    const toSign = `folder=${folder}&timestamp=${timestamp}`;
    const signature = crypto
      .createHash("sha1")
      .update(`${toSign}${process.env.CLOUDINARY_API_SECRET}`)
      .digest("hex");

    res.status(200).json({
      success: true,
      data: {
        timestamp,
        folder,
        signature,
        apiKey: process.env.CLOUDINARY_API_KEY,
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      },
    });
  } catch (error) { next(error); }
};
