import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PRODUCTS = [
  { id: 1, name: "Camera" },
  { id: 2, name: "TV" },
  { id: 3, name: "Mobile" },
];

function ProductsPage() {
  // useNavigate hook to do programatic navigation
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Products Page </h1>
      <ul>
        {PRODUCTS.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={goHome}>Go Home </button>
    </>
  );
}

export default ProductsPage;
