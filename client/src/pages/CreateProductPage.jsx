import { Link } from "react-router-dom";
import CreateProductForm from "../components/CreateProductForm";

function CreateProductPage() {
  return (
    <main>
      <h1>Create Product Page</h1>
      <CreateProductForm />
      <Link to="/">
        <button type="button">Back to Home</button>
      </Link>
    </main>
  );
}

export default CreateProductPage;
