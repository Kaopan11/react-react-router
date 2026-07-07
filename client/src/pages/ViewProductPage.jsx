import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ViewProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const results = await axios.get(
          `http://localhost:4001/products/${productId}`,
        );
        setProduct(results.data.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getProduct();
  }, [productId]);

  return (
    <main>
      <h1>View Product Page</h1>

      {isLoading && <p className="status-message">Loading ....</p>}
      {isError && <p className="status-message">Request failed</p>}

      {!isLoading && !isError && product && (
        <article className="view-product-container">
          <img
            src={product.image}
            alt={product.name}
            width="350"
            height="350"
          />
          <h2>{product.name}</h2>
          <p className="product-price">Price: {product.price}</p>
          <p>{product.description}</p>
        </article>
      )}

      <Link to="/">
        <button type="button">Back to Home</button>
      </Link>
    </main>
  );
}

export default ViewProductPage;
