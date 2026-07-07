import { Link } from "react-router-dom";
import EditProductForm from "../components/EditProductForm";

function EditProductPage() {
  return (
    <main>
      <h1>Edit Product Page</h1>
      <EditProductForm />
      <Link to="/">
        <button type="button">Back to Home</button>
      </Link>
    </main>
  );
}

export default EditProductPage;
