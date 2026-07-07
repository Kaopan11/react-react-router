import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateProductForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:4001/products", {
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
      <h1>Create Product Form</h1>
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
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
