import express from "express";

import * as searchController from "../controllers/searchController";
import * as authController from "../controllers/authController";

const router = express.Router({ mergeParams: true });

// Task 10
router
  .route("/books")
  .get(searchController.getAllBooksUsingAsyncCallbackFunction);

// Task 11
router.route("/books/ISBN/:id").get(searchController.getBookByISBN);

// Task 12
router.route("/books/Author/:id").get(searchController.getBookByAuthor);

//Task 13
router.route("/books/Title/:id").get(searchController.getBookByTitle);
export default router;
