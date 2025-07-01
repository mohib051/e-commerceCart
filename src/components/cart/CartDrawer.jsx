
import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";


export default function CartDrawer({ isOpen, onClose }) {
  const {
    cart,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black opacity-40" onClick={onClose}></div>

      <div className="relative w-full max-w-md h-full bg-white shadow-lg p-6 overflow-y-auto">
        <button onClick={onClose} className="absolute top-2 right-4 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-6 border-t pt-4">
              <p className="text-lg">
                Total Items: <span className="font-semibold">{getTotalItems()}</span>
              </p>
              <p className="text-lg">
                Total Price: <span className="font-semibold">₹{getTotalPrice().toLocaleString()}</span>
              </p>
              <button
                onClick={clearCart}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}