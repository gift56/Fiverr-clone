import express from "express";
import {} from "../controllers/user.controller.js";

const router = express.Router();

router.delete("/delete/:id", deleteUser);

export default router;
