import React from "react";
import { addToCart } from "../features/Cart/CartSlice";
import { useDispatch } from "react-redux";

const AddToCart = ({ id, image, price }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="px-1 py-2 text-sm lg:text-md md:p-2 bg-blue-500 rounded-lg text-white"
      onClick={() =>
        dispatch(
          addToCart({
            id,
            image,
            price,
            quantity: 1,
            total: price,
          })
        )
      }
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
