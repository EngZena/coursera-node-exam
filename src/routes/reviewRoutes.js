import express from "express";

import * as reviewController from "../controllers/reviewController";
import * as authController from "../controllers/authController";

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(reviewController.getAllReviews)
  // Task 8: Add/Modify a book review. - 2 Points
  .post(reviewController.setBookUserIds, reviewController.createReview);

router
  .route("/:id")
  .get(reviewController.getReview)
  // Task 8: Add/Modify a book review. - 2 Points
  .patch(reviewController.updateReview)
  // Task 9: Delete book review added by that particular user - 2 Points
  .delete(reviewController.deleteReview);

export default router;
