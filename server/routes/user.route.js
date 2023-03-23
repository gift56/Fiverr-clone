import express from "express";
import { deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.delete("/:id", deleteUser);

export default router;
