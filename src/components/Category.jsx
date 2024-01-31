import React from "react";

const Category = ({ category, onCategroy }) => {
  return (
    <div className="flex justify-center items-center space-x-2 lg:space-x-10 my-10 ">
      <button
        className={`border-2 py-2 px-5 rounded-lg ${
          category === "All" ? "bg-black text-white" : ""
        }`}
        onClick={() => onCategroy("All")}
      >
        All
      </button>
      <button
        className={`border-2 py-2 px-5 rounded-lg ${
          category === "men's clothing" ? "bg-black text-white" : ""
        }`}
        onClick={() => onCategroy("men's clothing")}
      >
        Men
      </button>
      <button
        className={`border-2 py-2 px-5 rounded-lg ${
          category === "women's clothing" ? "bg-black text-white" : ""
        }`}
        onClick={() => onCategroy("women's clothing")}
      >
        Women
      </button>
      <button
        className={`border-2 py-2 px-5 rounded-lg ${
          category === "Jewelery" ? "bg-black text-white" : ""
        }`}
        onClick={() => onCategroy("Jewelery")}
      >
        Jewelery
      </button>
    </div>
  );
};

export default Category;
