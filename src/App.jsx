import "./App.css";
import LikedButton from "./LikedButton";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description:
      "Comfortable headphones with clear sound and long battery life.",
    oldPrice: 8500,
    newPrice: 6999,
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "A lightweight smartwatch for tracking daily activity.",
    oldPrice: 12000,
    newPrice: 9999,
  },
  {
    id: 3,
    title: "Travel Backpack",
    description: "A spacious backpack for work, school, or weekend trips.",
    oldPrice: 6500,
    newPrice: 5200,
  },
  {
    id: 4,
    title: "Running Shoes",
    description: "Lightweight shoes designed for comfortable everyday runs.",
    oldPrice: 9500,
    newPrice: 7999,
  },
];

function App() {
  return (
    <>
      <>
        <LikedButton />
      </>

      <main className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </>
  );
}

export default App;
