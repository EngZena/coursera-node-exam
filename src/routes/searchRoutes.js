import express from "express";

import * as searchController from "../controllers/searchController";
import * as authController from "../controllers/authController";

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

// Task 10: Get all books – Using async callback function – 2 Points
router
  .route("/books")
  .get(searchController.getAllBooksUsingAsyncCallbackFunction);

// Task 11: Search by ISBN – Using Promises – 2 Points
router.route("/books/ISBN/:id").get(searchController.getBookByISBN);

// Task 12: Search by Author – 2 Points
router.route("/books/Author/:id").get(searchController.getBookByAuthor);

//Task 13: Search by Title - 2 Points
router.route("/books/Title/:id").get(searchController.getBookByTitle);
export default router;
