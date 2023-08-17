import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <p>
        Go to <Link to="/products">the products list!</Link>
      </p>
    </>
  );
}

export default ProductDetail;
