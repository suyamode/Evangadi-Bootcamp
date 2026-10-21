import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMacById } from "../../api/macs";

function SingleMac() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const data = await fetchMacById(id);
        setProduct(Array.isArray(data) ? data[0] : data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    getProductData();
  }, [id]);

  if (loading) {
    return <div className="text-center py-5">Loading product details...</div>;
  }

  if (!product) {
    return (
      <div className="container text-center py-5 my-5">
        <h2 className="text-dark">404 - Product Not Found</h2>
        <p className="text-muted">
          The Mac you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12 col-md-8">
          <div className="small text-muted text-uppercase tracking-wide mb-2">
            Macintosh
          </div>
          <h1 className="fw-bold display-3 text-dark mb-3">
            {product.product_name}
          </h1>
          <p className="lead text-muted">{product.product_brief_description}</p>
        </div>
      </div>

      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-12 col-md-8 text-center">
          <div className="p-4 bg-light rounded-4 shadow-sm">
            <img
              src={product.product_img}
              alt={product.product_name}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          <p className="fs-5 text-secondary mb-4 lh-lg">
            {product.product_description}
          </p>
          <div className="fw-bold fs-4 text-dark mb-1">
            Starting at {product.starting_price}
          </div>
          <div className="text-muted mb-4">{product.price_range}</div>
          <button className="btn btn-primary rounded-pill px-4 py-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleMac;
