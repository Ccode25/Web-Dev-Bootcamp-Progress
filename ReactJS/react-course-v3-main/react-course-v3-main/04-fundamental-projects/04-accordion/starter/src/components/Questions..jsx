import React from "react";
import data from "../data";
import SingleQuestion from "./SingleQuestion";

const Questions = () => {
  return (
    <section className="container">
      <h1>Question</h1>
      {data.map((question) => (
        <SingleQuestion key={question.id} {...question} />
      ))}
    </section>
  );
};

export default Questions;
