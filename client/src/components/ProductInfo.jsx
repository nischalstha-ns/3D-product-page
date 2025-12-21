import './ProductInfo.css';

export default function ProductInfo({ product }) {
  return (
    <div className="info">
      <h1>{product.name}</h1>
      <p className="description">{product.description}</p>
      <div className="price">${product.price}</div>
      <button className="btn">Add to Cart</button>
    </div>
  );
}
