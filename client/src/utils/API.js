import axios from "axios";

const api = {
  searchBook: async (query) => {
    return await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
  },
};

export default api;
