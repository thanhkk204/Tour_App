import express from "express";
import {
  createTour,
  getSingle,
  getAll,
  updateTour,
  deleteTour,
  getAllBySearch,
  getAllForPanagation,
  getAllByFeatured,
  getCountTours,
} from "../controllers/TourController.js";
import { verifyAdmin , verifyUser } from "../untils/verifyToken.js";
const router = express.Router();

router.get("/", getAll);
router.get("/:id",getSingle);
router.post("/", verifyAdmin, createTour);
router.delete("/:id",verifyAdmin, deleteTour);
router.put("/:id", verifyAdmin , updateTour);

router.get("/search/getAllbySearch", getAllBySearch);
router.get("/search/getAllForPanagation", getAllForPanagation);
router.get("/search/getAllByFeatured", getAllByFeatured);
router.get("/search/getCountTours", getCountTours)

export default router;
