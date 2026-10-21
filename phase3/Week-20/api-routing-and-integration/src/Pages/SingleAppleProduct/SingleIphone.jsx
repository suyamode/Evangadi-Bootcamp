import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchIphoneById } from "../../api/iphones";

function SingleIphone() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const data = await fetchIphoneById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load product details", err);
        setLoading(false);
      }
    };

    getProductData();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5" style={{ marginTop: "100px" }}>
        <h2>Loading product details...</h2>
      </div>
    );
  }

  if (product) {
    return (
      <div className="container py-5" style={{ marginTop: "100px" }}>
        <div className="row justify-content-center text-center">
          {/* 1 & 2. Name and Brief Description */}
          <div className="col-12">
            <h1 className="fw-bold display-4">{product.product_name}</h1>
            <p className="lead text-secondary">
              {product.product_brief_description}
            </p>
          </div>

          {/* 3. Image */}
          <div className="col-md-8 my-4">
            <img
              src={product.product_img}
              alt={product.product_name}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* 4, 5, & 6. Full Description, Prices, and Button */}
          <div className="col-md-8">
            <p className="fs-5">{product.product_description}</p>
            <div className="fw-semibold text-dark mt-4">
              Starting at {product.starting_price}
            </div>
            <div className="text-muted mb-4">{product.price_range}</div>
            <div>
              <a
                href={product.product_link || "#"}
                className="btn btn-primary rounded-pill px-4 py-2"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleIphone;
