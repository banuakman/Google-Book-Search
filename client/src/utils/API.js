import axios from "axios";

const api = {
  searchBook: (query) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
};

export default api;
