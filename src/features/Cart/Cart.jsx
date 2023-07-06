import React from "react";
import { cartItem, removeToCart, addToCart, reduceToCart } from "./CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrash3Fill } from "react-icons/bs";
const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector(cartItem);
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3"
            >
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
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-center font-bold text-4xl mt-20">No Cart Item</h2>
        </div>
      )}
      <div>
        {cart.length > 0 && (
          <div className="border-t-2 border-black mt-5 p-3 flex justify-end items-center space-x-3">
            <h2 className="text-xl">Total : </h2>
            <p className="text-xl">
              {cart
                .map((item) => item.total)
                .reduce((a, b) => a + b)
                .toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
