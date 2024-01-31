import React from "react";
import { useDispatch } from "react-redux";
import { BsFillTrash3Fill } from "react-icons/bs";
import {
  addToCart,
  reduceToCart,
  removeToCart,
} from "../features/Cart/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between p-3">
      <div>
        <img
          src={item.image}
          className="w-[5rem] h-[5rem] object-fill border-2 rounded-full"
        />
      </div>
      <div>
        <p>x{item.quantity}</p>
      </div>
      <div>
        <p>${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="border-2 px-2 text-xl border-black"
          onClick={() => dispatch(addToCart(item))}
        >
          +
        </button>
        <button
          className="border-2 px-2 text-xl border-black"
          onClick={() => dispatch(reduceToCart(item))}
        >
          -
        </button>
        <BsFillTrash3Fill
          className="text-red-500 cursor-pointer"
          size={30}
          onClick={() => dispatch(removeToCart({ id: item.id }))}
        />
      </div>
    </div>
  );
};

export default CartItem;
