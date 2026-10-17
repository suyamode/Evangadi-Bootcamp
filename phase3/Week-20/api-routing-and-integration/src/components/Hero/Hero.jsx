import React from "react";

const Hero = () => {
  return (
    <>
      {/* First Section - iPad Pro */}
      <section className="first-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>
          <div className="title-wraper bold black">iPad Pro</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#">Learn more</a>
              </li>
              <li>
                <a href="#">Order</a>
              </li>
            </ul>
          </div>

          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - MacBook Air */}
      <section className="second-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>
          <div className="title-wraper bold black">MacBook Air</div>
          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>
          <div className="price-wrapper grey">From $999.</div>

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
      </section>

      {/* Third Section - iPhone 11 Pro */}
      <section className="third-hightlight-wrapper">
        <div className="container">
          <div className="title-wraper bold">iPhone 11 Pro</div>
          <div className="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>
          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
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
      </section>
    </>
  );
};

export default Hero;
