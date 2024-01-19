import axios from "axios";

// Task 10: Get all books – Using async callback function – 2 Points
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
