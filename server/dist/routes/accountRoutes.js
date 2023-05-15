import express from "express";
import controller from "../controllers/accountController.js";
const router = express.Router();
router.get("/", controller.getAccount);
router.post("/create", controller.createAccount);
router.get("/:id", controller.getAccountById);
router.delete("/remove/:id", controller.deleteAccount);
router.patch("/update/:id", controller.updateAccount);
export default router;
//# sourceMappingURL=accountRoutes.js.map