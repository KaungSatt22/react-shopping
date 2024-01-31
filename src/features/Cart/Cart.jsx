import React from "react";
import { cartItem } from "./CartSlice";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../../components/CartItem";
import CartdBadge from "../../components/CartdBadge";
const Cart = () => {
  const cart = useSelector(cartItem);
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-center font-bold text-4xl mt-20">No Cart Item</h2>
        </div>
      )}
      {cart.length > 0 && <CartdBadge cart={cart} />}
    </div>
  );
};

export default Cart;
