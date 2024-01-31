import React from "react";
import AddToCart from "../components/AddToCart";
const DetailItem = ({ data }) => {
  return (
    <div className="container mx-auto mt-10 ">
      <div className="p-5">
        <img
          src={data.image}
          alt=""
          className="w-[10rem] md:w-[20rem] mx-auto object-contain"
        />
      </div>
      <div className="p-5 lg:w-[60rem] mx-auto">
        <h2 className="text-center font-bold text-xl lg:text-3xl ">
          {data.title}
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-3 lg:space-y-0 my-10 lg:space-x-20">
          <p className="font-light text-sm">
            Category : <span className="border-2  lg:p-2">{data.category}</span>
          </p>
          <p className=" text-sm lg:text-xl">price: ${data.price}</p>
        </div>
        <p className=" text-md lg:text-xl ">{data.description}</p>
        <div className="flex items-center justify-center">
          <AddToCart {...data} />
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
