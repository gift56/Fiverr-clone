import express from "express";
import {  } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/user", (req, res)=>{
    res.send("Fuck you")
});

export default router;
