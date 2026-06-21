import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import PaymentController from "../controllers/PaymentController.js";
import authorize from "../middleware/roleMiddleware.js";

const router = Router();

router.post(
  "/submit",
  authMiddleware,
  authorize("ADMIN"),
  PaymentController.create,
);

export default router;
