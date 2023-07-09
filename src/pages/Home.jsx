import React from "react";
import { useGetAllDataQuery } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/CartSlice";
import Loading from "../components/Loading";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("All");
  const { data, isLoading } = useGetAllDataQuery();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`/product/${id}`);
  };
  const categoryHandler = (type) => {
    setCategory(type);
  };

  let showData =
    category === "All"
      ? data
      : data?.length > 0 &&
        data.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
  return (
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center space-x-2 lg:space-x-10 my-10 ">
            <button
              className={`border-2 py-2 px-5 rounded-lg ${
                category === "All" ? "bg-black text-white" : ""
              }`}
              onClick={() => categoryHandler("All")}
            >
              All
            </button>
            <button
              className={`border-2 py-2 px-5 rounded-lg ${
                category === "men's clothing" ? "bg-black text-white" : ""
              }`}
              onClick={() => categoryHandler("men's clothing")}
            >
              Men
            </button>
            <button
              className={`border-2 py-2 px-5 rounded-lg ${
                category === "women's clothing" ? "bg-black text-white" : ""
              }`}
              onClick={() => categoryHandler("women's clothing")}
            >
              Women
            </button>
            <button
              className={`border-2 py-2 px-5 rounded-lg ${
                category === "Jewelery" ? "bg-black text-white" : ""
              }`}
              onClick={() => categoryHandler("Jewelery")}
            >
              Jewelery
            </button>
          </div>
          <div className="p-5 grid grid-cols-fluid gap-[2rem] lg:gap-[5rem] ">
            {showData.map((item) => (
              <div key={item.id} className="border-2 p-5 bg-slate-50">
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
                        onClick={() => clickHandler(item.id)}
                      >
                        More Detail
                      </button>
                      <button
                        className="px-1 py-2 text-sm lg:text-md md:p-2 bg-blue-500 rounded-lg text-white"
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id: item.id,
                              image: item.image,
                              price: item.price,
                              quantity: 1,
                              total: item.price,
                            })
                          )
                        }
                      >
                        Add To Cart
                      </button>
                    </div>
                    <div className=" flex items-center md:space-x-2 ">
                      <div className="text-sm lg:text-md font-bold">
                        Price :
                      </div>
                      <p className="text-sm lg:text-md font-thin">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
