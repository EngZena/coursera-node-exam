import express from "express";

import * as reviewController from "../controllers/reviewController";
import * as authController from "../controllers/authController";

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(reviewController.getAllReviews)
  // Task 8
  .post(reviewController.setBookUserIds, reviewController.createReview);

router
  .route("/:id")
  .get(reviewController.getReview)
  // Task 8
  .patch(reviewController.updateReview)
  // Task 9
  .delete(reviewController.deleteReview);

export default router;
