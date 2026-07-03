import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ViewProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getProduct = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const result = await axios(
        `http://localhost:4001/products/${productId}`
      );
      setProduct(result.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  if (isLoading) return <h1>Loading ....</h1>;
  if (isError) return <h1>Request failed</h1>;

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <img
          src={product.image}
          alt={product.name}
          width="350"
          height="350"
        />
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>{product.description}</p>
      </div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default ViewProductPage;
