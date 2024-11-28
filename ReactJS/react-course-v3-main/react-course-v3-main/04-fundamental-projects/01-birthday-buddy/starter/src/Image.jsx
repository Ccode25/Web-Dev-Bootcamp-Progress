import React from "react";

const Image = ({ persons }) => {
  return (
    <article className="person">
      <img src={persons.image} alt="profile" className="img" />
      <div>
        <h4>{persons.name}</h4>
        <p>{persons.age} years</p>
      </div>
    </article>
  );
};

export default Image;
