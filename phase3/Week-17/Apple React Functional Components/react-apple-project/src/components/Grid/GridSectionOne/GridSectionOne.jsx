import React from "react";

const GridSectionOne = () => {
  return (
    <>
      {/* Fourth Section */}
      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            {/* Left Side - iPhone 11 */}
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">iPhone 11</div>
                <div className="description-wraper">
                  Just the right amount of everything.
                </div>
                <div className="price-wrapper">
                  From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="#">Learn more</a>
                    </li>
                    <li>
                      <a href="#">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side - CDC COVID-19 Alert */}
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper white">
                  Get the latest CDC response to COVID-19.
                </div>
                <div className="links-wrapper white">
                  <ul>
                    <li>
                      <a href="#">Watch the PSA</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            {/* Left Side - Apple TV+ */}
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src="images/icons/apple-tv-logo.png" alt="Apple TV" />
                  </div>
                </div>
                <div className="tvshow-logo-wraper">
                  <img src="images/home/banker.png" alt="The Banker" />
                </div>
                <div className="watch-more-wrapper">
                  <a href="#">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>

            {/* Right Side - Apple Watch Series 5 */}
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img
                      src="images/icons/watch-series5-logo.png"
                      alt="Apple Watch Series 5"
                    />
                  </div>
                </div>
                <div className="description-wraper">
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="#">Learn more</a>
                    </li>
                    <li>
                      <a href="#">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GridSectionOne;
