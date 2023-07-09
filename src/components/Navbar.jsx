import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../features/Cart/Cart";
import { cartItem } from "../features/Cart/CartSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const cart = useSelector(cartItem);
  return (
    <div className="bg-slate-50 sticky top-0">
      <nav className="container mx-auto flex flex-col lg:flex-row justify-between items-center h-[15vh] lg:h-[10vh] p-3 relative">
        <h2 className="text-3xl font-bold">Online Shopping</h2>
        <div className="flex items-center space-x-5">
          <NavLink
            to="/"
            className="bg-blue-500 p-3 rounded-lg text-white text-xl"
          >
            Home
          </NavLink>
          <button
            className="bg-blue-500 p-3 rounded-lg text-white text-xl relative"
            onClick={() => setIsShow(!isShow)}
          >
            Cart{" "}
            {cart.length > 0 && (
              <span className=" absolute bg-red-500 px-2 rounded-full text-xl -top-5">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>
      <div>
        {isShow && (
          <div className="bg-slate-800 text-white absolute right-0 w-full lg:w-[30rem]  h-[90vh] overflow-y-scroll p-3 rounded-lg">
            <div className="flex items-center justify-between my-5 p-5">
              <h2 className="text-3xl font-bold">Cart Items</h2>
              <button
                className="cursor-pointer text-3xl"
                size={35}
                onClick={() => setIsShow(!isShow)}
              >
                X
              </button>
            </div>
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
