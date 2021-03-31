import React from "react";
import { useForm } from "react-hook-form";
import api from "../../utils/API.js";

export default function SearchBook({ setBooklist }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (book) => {
    const {
      data: { items },
    } = await api.searchBook(book.query);
    const results = items.map((item) => {
      return {
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        description: item.volumeInfo.description,
        img: item.volumeInfo.imageLinks,
        link: item.volumeInfo.infoLink,
      };
    });
    console.log("results", results);
    setBooklist(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input name="query" type="text" ref={register} />
        <input type="submit" />
      </form>
    </div>
  );
}
