import React from "react";
import AddToCart from "./AddToCart";
import Item from "./Item";

const ShowItem = ({ data, onDetail }) => {
  return (
    <div className="p-5 grid grid-cols-fluid gap-[2rem] lg:gap-[5rem] ">
      {data.map((item) => (
        <Item key={item.id} item={item} onDetail={onDetail} />
      ))}
    </div>
  );
};

export default ShowItem;
