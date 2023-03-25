import express from "express";
import { createGig } from "../controllers/gig.controller.js";
import {} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createGig);

export default router;
