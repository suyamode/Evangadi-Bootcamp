import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleAppleProduct() {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/iphone/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching single product:", err));
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-5" style={{ marginTop: "100px" }}>
        <h2>Loading product details...</h2>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ marginTop: "100px" }}>
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <h1 className="fw-bold display-4">{product.product_name}</h1>
          <p className="lead text-secondary">
            {product.product_brief_description}
          </p>
        </div>
        <div className="col-md-8 my-4">
          <img
            src={product.product_img}
            alt={product.product_name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <p className="fs-5">{product.product_description}</p>
          <h3 className="text-primary fw-bold mt-4">
            Starting at {product.starting_price}
          </h3>
          <p className="text-muted">{product.price_range}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleAppleProduct;
