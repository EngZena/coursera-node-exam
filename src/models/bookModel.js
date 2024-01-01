import mongoose from "mongoose";
import validator from "validator";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  ISBN: {
    type: String,
    validate: [validator.isISBN, "Please provide a valid ISBN"],
  },
  review: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;