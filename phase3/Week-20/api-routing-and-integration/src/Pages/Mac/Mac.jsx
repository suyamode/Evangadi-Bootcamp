import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMacs } from "../../api/macs";
import styles from "./mac.module.css"; // You can reuse or mirror your iphone.module.css

function Mac() {
  const [macs, setMacs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMacsData = async () => {
      try {
        const data = await fetchMacs();
        setMacs(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    getMacsData();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading Macs...</div>;
  }

  return (
    <div className={styles.internalPageWrapper}>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-8">
            <h1 className={`fw-bold display-4 text-dark ${styles.macHeading}`}>
              MacBook & Mac
            </h1>
            <p className="lead text-muted">
              Incredible power. Designed to impress.
            </p>
          </div>
        </div>

        {macs?.map((mac, index) => {
          let flip = index % 2 !== 0;

          return (
            <div
              key={`${mac.product_id}-${index}`}
              className={`row align-items-center justify-content-center g-4 ${styles.productRow}`}
            >
              <div
                className={`col-12 col-md-6 text-center ${
                  flip ? "order-md-2" : "order-md-1"
                }`}
              >
                <div className={styles.productImageContainer}>
                  <img
                    src={mac.product_img}
                    alt={mac.product_name}
                    className="img-fluid"
                  />
                </div>
              </div>

              <div
                className={`col-12 col-md-6 text-center text-md-start px-md-4 ${
                  flip ? "order-md-1" : "order-md-2"
                }`}
              >
                <h2 className="fw-bold mb-3 text-dark">{mac.product_name}</h2>
                <p className={`mb-3 ${styles.productDescription}`}>
                  {mac.product_brief_description}
                </p>
                <div className="fw-semibold text-dark mb-1">
                  Starting at {mac.starting_price}
                </div>
                <div className="small text-muted mb-4">{mac.price_range}</div>

                <div>
                  <Link
                    to={`/mac/${mac.product_url}`}
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

export default Mac;
