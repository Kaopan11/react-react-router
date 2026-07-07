import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios.get("http://localhost:4001/products");
      setProducts(results.data.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <header className="app-wrapper">
        <h1 className="app-title">Products</h1>
        <button type="button">Create Product</button>
      </header>

      {isLoading && <p className="status-message">Loading ....</p>}
      {isError && <p className="status-message">Request failed</p>}

      {!isLoading && !isError && (
        <section className="product-list" aria-label="Product list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}

export default HomePage;
