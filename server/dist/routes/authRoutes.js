import express from "express";
import controller from "../controllers/authController.js";
const router = express.Router();
router.post("/create", controller.createUser);
router.post("/login", controller.loginUser);
export default router;
//# sourceMappingURL=authRoutes.js.map