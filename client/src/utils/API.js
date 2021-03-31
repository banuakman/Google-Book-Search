import axios from "axios";

const api = {
  searchBook: async (query) => {
    return await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
  },

  // Saves a book
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};

export default api;
