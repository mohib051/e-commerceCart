import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const [feedback, setFeedback] = useState({ message: "", type: "" });

  const showFeedback = (message, type = "info") => {
    setFeedback({ message, type });
    setTimeout(() => setFeedback({ message: "", type: "" }), 3000);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);

      if (existing) {
        if (existing.quantity >= 10) {
          showFeedback("Maximum 10 items allowed!", "warning");
          return prev;
        }
        showFeedback(`${product.name} quantity increased`, "success");
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }

      showFeedback(`${product.name} added to cart`, "success");
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) {
      showFeedback("Minimum quantity is 1. Use remove instead.", "warning");
      return;
    }
    if (qty > 10) {
      showFeedback("Maximum quantity is 10!", "warning");
      return;
    }
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: qty } : p))
    );
  };
  const removeFromCart = (id) => {
    const item = cart.find((p) => p.id === id);
    if (!item) return;

    showFeedback(`${item.name} removed from cart`, "info");
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    showFeedback("Cart cleared", "info");
  };

  const getTotalItems = () => cart.reduce((sum, p) => sum + p.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
        feedback,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
