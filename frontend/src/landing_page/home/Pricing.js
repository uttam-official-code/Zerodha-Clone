import React from "react";

function Pricing() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/" className="mx-5" style={{ textDecoration: "none" }}>
            See Pricing
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col border p-4">
              <h1 className="mb-4">&#8377;0</h1>
              Free equity delivery and <br></br>
              direct mutual funds
            </div>
            <div className="col border p-4 ">
              <h1 className="mb-4">&#8377;20</h1>
              Intraday and F&O
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
