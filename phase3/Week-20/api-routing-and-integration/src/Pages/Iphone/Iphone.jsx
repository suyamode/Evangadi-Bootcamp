import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchIphones } from "../../api/iphones"; // Import your service module
import styles from "./iphone.module.css";

function Iphone() {
  const [iPhones, setIphones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getIphonesData = async () => {
      try {
        const data = await fetchIphones();
        setIphones(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    getIphonesData();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading iPhones...</div>;
  }

  return (
    <div className={styles.internalPageWrapper}>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-8">
            <h1
              className={`fw-bold display-4 text-dark ${styles.iphoneHeading}`}
            >
              iPhones
            </h1>
            <p className="lead text-muted">The best for the brightest.</p>
          </div>
        </div>

        {iPhones?.map((iphone, index) => {
          let flip = index % 2 !== 0;

          return (
            <div
              key={iphone.product_id || index}
              className={`row align-items-center justify-content-center g-4 ${styles.productRow}`}
            >
              <div
                className={`col-12 col-md-6 text-center ${
                  flip ? "order-md-2" : "order-md-1"
                }`}
              >
                <div className={styles.productImageContainer}>
                  <img
                    src={iphone.product_img}
                    alt={iphone.product_name}
                    className="img-fluid"
                  />
                </div>
              </div>

              <div
                className={`col-12 col-md-6 text-center text-md-start px-md-5 ${
                  flip ? "order-md-1" : "order-md-2"
                }`}
              >
                <h2 className="fw-bold mb-3 text-dark">
                  {iphone.product_name}
                </h2>
                <p className={`mb-3 ${styles.productDescription}`}>
                  {iphone.product_brief_description}
                </p>
                <div className="fw-semibold text-dark mb-1">
                  Starting at {iphone.starting_price}
                </div>
                <div className="small text-muted mb-4">
                  {iphone.price_range}
                </div>

                <div>
                  <Link
                    to={`/iphone/${iphone.product_url}`}
                    className={`btn btn-primary shadow-sm ${styles.learnMoreBtn}`}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Iphone;
