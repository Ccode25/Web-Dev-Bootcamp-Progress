import React, { useState } from "react";
import data from "../data";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ toggleQuestion, activeId }) => {
  return (
    <section className="container">
      <h1>Question</h1>
      {data.map((question) => (
        <SingleQuestion
          key={question.id}
          {...question}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      ))}
    </section>
  );
};

export default Questions;
