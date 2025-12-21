import { useState, useEffect } from 'react';
import ProductViewer from './components/ProductViewer';
import ProductInfo from './components/ProductInfo';
import './App.css';

export default function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/products/1')
      .then(res => res.json())
      .then(setProduct);
  }, []);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="app">
      <ProductViewer />
      <ProductInfo product={product} />
    </div>
  );
}
