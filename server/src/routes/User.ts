import express from "express";
import controller from "../controllers/User.js";

const router = express.Router();

router.get("/get/:userId", controller.readUser);
router.get("/get/", controller.readAll);
router.patch("/update/:userId", controller.updateUser);
router.delete("/delete/:userId", controller.deleteUser);

export default router;
