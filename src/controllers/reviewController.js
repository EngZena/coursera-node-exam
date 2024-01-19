import Review from "../models/reviewModel";
import * as Factory from "./handlerFactory";

export const setBookUserIds = (req, res, next) => {
  if (!req.body.book) req.body.book = req.params.bookId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

export const getAllReviews = Factory.getAll(Review);
export const getReview = Factory.getOne(Review);
export const createReview = Factory.createOne(Review);
export const updateReview = Factory.updateOne(Review);
export const deleteReview = Factory.deleteOne(Review);
