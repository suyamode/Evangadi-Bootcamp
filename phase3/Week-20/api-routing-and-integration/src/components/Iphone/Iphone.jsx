import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [iPhones, setIphones] = useState([]);

  useEffect(() => {
    const fetchIphones = async () => {
      try {
        const res = await fetch("http://localhost:3000/iphones");
        const data = await res.json();
        console.log(data);
        setIphones(data);
      } catch (error) {
        console.error("Error fetching iPhones: ", error);
      }
    };

    fetchIphones();
  }, []);

  return (
    <div>
      <section className="container py-5" style={{ marginTop: "80px" }}>
        <div className="text-center mb-5">
          <h1 className="fw-bold">iPhones</h1>
          <p className="lead text-muted">The best for the brightest.</p>
        </div>

        {/* Use iPhones (with capital P) matching your state variable */}
        {iPhones?.map((iphone) => {
          return (
            <div
              key={iphone.product_id}
              className="row align-items-center mb-5 py-4 border-bottom"
            >
              {/* Product Image */}
              <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
                <img
                  src={iphone.product_img}
                  alt={iphone.product_name}
                  className="img-fluid rounded"
                  style={{ maxHeight: "300px" }}
                />
              </div>

              {/* Product Info */}
              <div className="col-12 col-md-6">
                <h2 className="fw-bold">{iphone.product_name}</h2>
                <p className="text-secondary">
                  {iphone.product_brief_description}
                </p>
                <div className="fw-semibold text-dark">
                  Starting at {iphone.starting_price}
                </div>
                <div className="small text-muted mb-3">
                  {iphone.price_range}
                </div>

                {/* Learn More link for Question 3 */}
                <Link
                  to={`/iphone/${iphone.product_url}`}
                  className="btn btn-primary"
                >
                  Learn more
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Iphone;
