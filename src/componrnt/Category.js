import React, { useState } from "react";

function Category({ categories, fillterMenu }) {
  const [mainCategory, setMainCategory] = useState("all");
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          className={
            category === mainCategory ? "filter-btn highlight" : "filter-btn"
          }
          key={index}
          onClick={() => {
            setMainCategory(category);
            fillterMenu(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Category;
