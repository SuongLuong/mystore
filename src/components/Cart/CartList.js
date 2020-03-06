import React from "react";
import CartItem from "./CartItem";

export default function CartList(props) {
  const { cart } = props.value;
  console.log(props.value);
  console.log(cart);
  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={props.value} />;
      })}
    </div>
  );
}
