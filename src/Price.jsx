export default function Price({ oldPrice, newPrice }) {
  return (
    <div className="product-card__prices">
      <p className="product-card__old-price">
        <span>Old price</span>
        <del>Rs. {oldPrice.toLocaleString("en-PK")}</del>
      </p>
      <p className="product-card__new-price">
        <span>New price</span>
        <strong>Rs. {newPrice.toLocaleString("en-PK")}</strong>
      </p>
    </div>
  );
}
