import express, { Router } from "express";
import { signup } from "../controllers/signupController";

const router: Router = express.Router();
router.post("/signup", signup);
export default router;
