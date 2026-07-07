function ProductCard({ product }) {
  return (
    <article className="product">
      <div className="product-preview">
        <img
          src={product.image}
          alt={product.name}
          width="250"
          height="250"
        />
      </div>
      <div className="product-detail">
        <h2>Product name: {product.name}</h2>
        <p className="product-price">Product price: {product.price}</p>
        <p>Product description: {product.description}</p>
        <div className="product-actions">
          <button type="button" className="view-button">
            View
          </button>
          <button type="button" className="edit-button">
            Edit
          </button>
        </div>
      </div>
      <button type="button" className="delete-button" aria-label="Delete product">
        x
      </button>
    </article>
  );
}

export default ProductCard;
