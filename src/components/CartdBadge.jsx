import React from "react";

const CartdBadge = ({ cart }) => {
  const totalAmount = cart
    .map((item) => item.total)
    .reduce((a, b) => a + b)
    .toFixed(2);
  return (
    <div className="border-t-2 border-black mt-5 p-3 flex justify-end items-center space-x-3">
      <h2 className="text-xl">Total : </h2>
      <p className="text-xl">{totalAmount}</p>
    </div>
  );
};

export default CartdBadge;
