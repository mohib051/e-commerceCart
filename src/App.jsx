import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { useState } from "react";
import CartDrawer from "./components/cart/CartDrawer";
import Toast from './components/ui/Toast';
import { useCart } from "./hooks/useCart";
export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 const { feedback } = useCart();

  return (
    <>
      <Header onCartClick={() => setIsDrawerOpen(true)} />
      <Home />
      <CartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
         <Toast message={feedback.message} type={feedback.type} />
    </>
  );
}