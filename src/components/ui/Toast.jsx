export default function Toast({ message, type }) {
  if (!message) return null;

  const color = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  }[type] || "bg-gray-700";

  return (
    <div className={`fixed top-5 right-5 z-50 px-4 py-2 text-white rounded shadow-lg ${color}`}>
      {message}
    </div>
  );
}
