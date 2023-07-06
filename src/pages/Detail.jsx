import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleDataQuery } from "../api/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/CartSlice";
import DetailLoading from "../components/DetailLoading";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetSingleDataQuery(id);
  return (
    <div>
      {isLoading ? (
        <div className="container mx-auto mt-10">
          <DetailLoading />
        </div>
      ) : (
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
                Category :{" "}
                <span className="border-2  lg:p-2">{data.category}</span>
              </p>
              <p className=" text-sm lg:text-xl">price: ${data.price}</p>
            </div>
            <p className=" text-md lg:text-xl ">{data.description}</p>
            <button
              className="mt-10 p-3 bg-blue-500 text-white rounded-lg block mx-auto lg:ml-auto"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    image: data.image,
                    price: data.price,
                    quantity: 1,
                    total: data.price,
                  })
                )
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
