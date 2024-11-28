import React from "react";

const Title = ({ text }) => {
  return (
    <div className="title">
      <h1>{text}</h1>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
