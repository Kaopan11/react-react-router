import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditProductForm() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const getProduct = async () => {
      try {
        const results = await axios.get(
          `http://localhost:4001/products/${productId}`,
        );
        const product = results.data.data;
        setFormData({
          name: product.name,
          image: product.image,
          price: product.price,
          description: product.description,
        });
      } catch (error) {
        console.error(error);
      }
    };

    getProduct();
  }, [productId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:4001/products/${productId}`, {
        name: formData.name,
        image: formData.image,
        price: Number(formData.price),
        description: formData.description,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Enter description here"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
