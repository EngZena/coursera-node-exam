import express from "express";

import * as searchController from "../controllers/searchController";
import * as authController from "../controllers/authController";

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/books")
  .get(searchController.getAllBooksUsingAsyncCallbackFunction);

export default router;
