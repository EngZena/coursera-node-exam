import express from "express";

import * as bookController from "../controllers/bookController";

const router = express.Router();
// Task 1: Get the book list available in the shop.- 2 Points
router.route("/").get(bookController.getAllBooks);

// Task 2: Get the books based on ISBN.- 2 Points
router.route("/ISBN/:id").get(bookController.getBookByISBN);

// Task 3: Get all books by Author. -2 Points
router.route("/author/:id").get(bookController.getBookByAuthor);

// Task 4: Get all books based on Title - 2 Points
router.route("/title/:id").get(bookController.getBookByTitle);

// Task 5: Get book Review. - 2 Points
router.route("/review/title/:id").get(bookController.getBookReviewByTitle);

router.route("/:id").get(bookController.getBook);

router.route("/").post(bookController.createBook);
router
  .route("/:id")
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

export default router;
