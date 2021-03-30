import React from "react";
import { useForm } from "react-hook-form";
import api from "../../utils/API.js";

export default function SearchBook() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const results = await api.searchBook(data.query);
    console.log(results);
  };

  // console.log(watch("example")); // watch input value by passing the name of it

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
