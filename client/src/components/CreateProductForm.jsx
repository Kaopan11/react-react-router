import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateProductForm() {

  const navigate = useNavigate(); // hook สำหรับเปลี่ยนหน้า
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // กัน form reload หน้า
    await axios.post("http://localhost:4001/products", {
      name: formData.name,
      image: formData.image,
      price: Number(formData.price), // แปลงเป็น number
      description: formData.description,
    });
    navigate("/"); // redirect กลับ Home
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      {/* input ทุกตัวใส่ value + onChange */}
      <input name="name" value={formData.name} onChange={handleChange} />
      {/* ... field อื่นๆ เหมือนกัน ... */}
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateProductForm;
