import * as Factory from "./handlerFactory";
import Book from "../models/bookModel";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";

export const createBook = Factory.createOne(Book);
export const updateBook = Factory.updateOne(Book);
export const getBook = Factory.getOne(Book);
export const getAllBooks = Factory.getAll(Book);
export const deleteBook = Factory.deleteOne(Book);

export const getBookByISBN  = catchAsync(async (req, res, next) => {
    let book = await Book.findOne({ ISBN: req.params.id });
    if (!book) {
      return next(new AppError("No book found with that ISBN", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        data: book,
      },
    });
  });

export const getBookByAuthor  = catchAsync(async (req, res, next) => {
    let book = await Book.findOne({ author: req.params.id });
    if (!book) {
      return next(new AppError("No book found with that Author", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        data: book,
      },
    });
  });

  export const getBookByTitle  = catchAsync(async (req, res, next) => {
    let book = await Book.findOne({ title: req.params.id });
    if (!book) {
      return next(new AppError("No book found with that Title", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        data: book,
      },
    });
  });

  export const getBookReviewByTitle  = catchAsync(async (req, res, next) => {
    let book = await Book.findOne({ title: req.params.id }, 'review');
    if (!book) {
      return next(new AppError("No book found with that Title", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        data: `This book ${req.params.id} review is ${book.review}`,
      },
    });
  });
