import express from "express";
import { getUsers, tambahUser } from "../controllers/Users.js";

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', tambahUser);

export default router;