import React from "react";

const index = () => {
  return (
    <div>
      <section id="food">
        <h2>Types Abon</h2>
        <div class="food-container container">
          <div class="food-type fruite">
            <div class="img-container">
              <img
                src="http://api.omiyago.com/webroot/img/p/1/5/4/5/1545.jpg"
                alt="error"
              />
              <div class="img-content">
                <h3>Tuna</h3>
                <a href="#food-menu" class="btn btn-primary" target="blank">
                  Order now
                </a>
              </div>
            </div>
          </div>
          <div class="food-type vegetable">
            <div class="img-container">
              <img
                src="https://asset.kompas.com/crops/BZn6887HCTVj6Ks-GcqV4Qdf6q8=/0x0:698x465/750x500/data/photo/2021/02/25/60373577eac89.jpg"
                alt="error"
              />
              <div class="img-content">
                <h3>Cakalang</h3>
                <a href="#food-menu" class="btn btn-primary" target="blank">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
