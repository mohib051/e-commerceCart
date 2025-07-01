import { useCart } from "../../hooks/useCart";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    if (item.quantity > 1) updateQuantity(item.id, item.quantity - 1);
  };

  const handleIncrease = () => {
    if (item.quantity < 10) updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="flex items-center justify-between gap-4 border rounded p-4">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">
            ₹{item.price.toLocaleString()} x {item.quantity}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrease}
          className="bg-gray-200 px-2 py-1 rounded text-lg font-bold"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={handleIncrease}
          className="bg-gray-200 px-2 py-1 rounded text-lg font-bold"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-2 text-red-600 text-sm hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
