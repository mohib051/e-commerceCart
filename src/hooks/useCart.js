import { useContext } from "react";
import  cartContext  from "../contexts/cartContext.jsx";

export const useCart = () => {
  const ctx = useContext(cartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a <CartProvider>");
  }
  return ctx;
};
