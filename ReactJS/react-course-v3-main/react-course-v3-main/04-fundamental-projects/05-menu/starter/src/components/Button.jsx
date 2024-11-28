import React from "react";

const Button = ({ category, filterItems }) => {
  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => filterItems(category)}
      >
        {category}
      </button>
    </div>
  );
};

export default Button;
