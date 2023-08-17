import React from "react";
import { useNavigate } from "react-router-dom";

function ProductsPage() {
  // useNavigate hook to do programatic navigation
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Products Page </h1>
      <button onClick={goHome}>Go Home </button>
    </>
  );
}

export default ProductsPage;
