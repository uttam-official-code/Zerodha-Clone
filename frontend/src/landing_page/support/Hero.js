import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4 style={{ fontWeight: "390" }}>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row p-3 m-3 ">
        <div className="col-6 p-5 offset-1">
          <h4 className="fs-3" style={{ fontWeight: "370" }}>
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="">Track account opening</a>
          <a href="" style={{ marginLeft: "20px" }}>
            Track segment activation
          </a>
          <a href="" style={{ marginLeft: "20px" }}>
            Intraday margins
          </a>
          <a href="" style={{ marginLeft: "20px" }}>
            Kite user manual
          </a>
        </div>

        <div className="col-5 p-1 mt-5 mb-5 ">
          <div style={{ marginLeft: "100px" }}>
            <h3 className="fs-3 " style={{ fontWeight: "380" }}>
              Featured
            </h3>
            <ol>
              <li>
                <a href="">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li style={{ lineHeight: "2.8em" }}>
                <a href="">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
