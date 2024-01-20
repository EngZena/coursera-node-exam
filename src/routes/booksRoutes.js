import express from "express";

import * as bookController from "../controllers/bookController";

const router = express.Router();
// Task 1
router.route("/").get(bookController.getAllBooks);

// Task 2
router.route("/ISBN/:id").get(bookController.getAllBookByISBN);

// Task 3
router.route("/author/:id").get(bookController.getAllBookByAuthor);

// Task 4
router.route("/title/:id").get(bookController.getAllBookByTitle);

// Task 5
router.route("/review/title/:id").get(bookController.getBookReviewByTitle);

router.route("/:id").get(bookController.getBook);

router.route("/").post(bookController.createBook);
router
  .route("/:id")
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

export default router;
