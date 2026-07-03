import CreateProductForm from "../components/CreateProductForm";
import { Link } from "react-router-dom";


function CreateProductPage() {
  return (
    <div>
      <h1>Create Product Page</h1>
      <CreateProductForm />
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default CreateProductPage;
