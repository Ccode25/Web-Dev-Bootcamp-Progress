import React from "react";
import Button from "../components/Button";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <Button category={category} key={index} filterItems={filterItems}/>
      ))}
    </div>
  );
};

export default Categories;
