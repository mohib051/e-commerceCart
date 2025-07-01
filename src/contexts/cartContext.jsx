import { createContext,useState } from "react";

/* ────────────────────────────────────────────
   1️⃣  Context setup
──────────────────────────────────────────────*/
const CartContext = createContext();

/* ────────────────────────────────────────────
   2️⃣  Provider
──────────────────────────────────────────────*/
export function CartProvider({ children }) {
  /* 🛒 Main cart state  */
  const [cart, setCart] = useState([]);
  /* 🔔 Toast‑style feedback message  */
  const [feedback, setFeedback] = useState({ message: "", type: "" });

  /* ── helper: show toast for 3s ───────────────────────────── */
  const showFeedback = (message, type = "info") => {
    setFeedback({ message, type });
    setTimeout(() => setFeedback({ message: "", type: "" }), 3000);
  };

  /* ── 1. Add / increase product ───────────────────────────── */
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);

      if (existing) {
        /* already in cart → try to +1  */
        if (existing.quantity >= 10) {
          showFeedback("Maximum 10 items allowed!", "warning");
          return prev;
        }
        showFeedback(`${product.name} quantity increased`, "success");
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }

      /* new item → push with quantity 1  */
      showFeedback(`${product.name} added to cart`, "success");
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  /* ── 2. Manually set quantity (1‒10) ─────────────────────── */
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

  /* ── 3. Remove entire product row ─────────────────────────── */
  const removeFromCart = (id) => {
    const item = cart.find((p) => p.id === id);
    if (!item) return;

    showFeedback(`${item.name} removed from cart`, "info");
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  /* ── 4. Clear whole cart ─────────────────────────────────── */
  const clearCart = () => {
    setCart([]);
    showFeedback("Cart cleared", "info");
  };

  /* ── 5. Derived getters ──────────────────────────────────── */
  const getTotalItems = () =>
    cart.reduce((sum, p) => sum + p.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  /* ── Provider value bag ──────────────────────────────────── */
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

export default CartContext ;

