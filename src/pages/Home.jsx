import ProductList from "../components/product/ProductList";

export default function Home() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ProductList />
    </div>
  );
}
