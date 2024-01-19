import axios from "axios";

import * as Factory from "./handlerFactory";
import Book from "../models/bookModel";

export const getAllBooksUsingAsyncCallbackFunction = async (req, res, next) => {
  const response = await axios.get(
    `${process.env.HOST_URL}/api/library/v1/books`
  );
  const books = response.data;

  res.status(200).json({
    status: "success",
    results: books.length,
    data: {
      data: books,
    },
  });
};

export const getBookByISBN = Factory.getOneByProperty(Book, null, "ISBN");
export const getBookByAuthor = Factory.getOneByProperty(Book, null, "author");
export const getBookByTitle = Factory.getOneByProperty(Book, null, "title");
