import { useCart } from "../../hooks/useCart";

export default function Header({ onCartClick }) {
  const { getTotalItems } = useCart();

  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🛒 My Shop</h1>
      <button onClick={onCartClick} className="relative">
        <span className="text-lg">Cart</span>
        <span className="ml-2 bg-red-600 rounded-full px-2 text-sm">
          {getTotalItems()}
        </span>
      </button>
    </header>
  );
}
