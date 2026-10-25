import Description from "./Description";
import Price from "./Price";
import Title from "./Title";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Title title={product.title} />
      <Description description={product.description} />
      <Price oldPrice={product.oldPrice} newPrice={product.newPrice} />
    </article>
  );
}
