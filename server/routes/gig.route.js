import express from "express";
import { createGig, deleteGig } from "../controllers/gig.controller.js";
import {} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);

export default router;
