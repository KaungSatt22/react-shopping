import React from "react";
import AddToCart from "./AddToCart";

const Item = ({ onDetail, item }) => {
  return (
    <div className="border-2 p-5 bg-slate-50">
      <div className="rounded-lg mb-5 border-b-2">
        <img
          src={item.image}
          className="object-contain h-[10rem] lg:h-[15rem] w-1/2 mx-auto rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-md lg:text-lg text-center h-20 overflow-scroll-y">
          {item.title}
        </h2>
        <div className="flex items-center justify-between mt-5 ">
          <div className="flex items-center space-x-3">
            <button
              className="px-1 py-2 text-sm lg:text-md md:p-2 bg-blue-500 rounded-lg text-white"
              onClick={() => onDetail(item.id)}
            >
              More Detail
            </button>
            <AddToCart {...item} />
          </div>
          <div className=" flex items-center md:space-x-2 ">
            <div className="text-sm lg:text-md font-bold">Price :</div>
            <p className="text-sm lg:text-md font-thin">${item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
