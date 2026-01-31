import { Router } from "express";
import { getCurrentUserController, getAllUserController } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/current", getCurrentUserController);
userRoutes.get("/all", getAllUserController);

export default userRoutes;
