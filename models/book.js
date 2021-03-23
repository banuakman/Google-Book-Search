const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  description: { type: String },
  image: { type: String },
  link: { type: String },
  bookId: { type: String, required: true, unique: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
