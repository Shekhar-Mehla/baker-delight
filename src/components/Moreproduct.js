import React from "react";
import bread_snack from "../assets/bread_snack.jpg";
import snack2 from "../assets/snack2.jpg";
import Artisian from "../assets/artisian.jpg";
import Heakth from "../assets/Health.jpg";
export const Moreproduct = () => {
  return (
    <div className="products_wrapper">
      <div class="   text-center">
        <div class="row g-0 row-cols-3">
          <div class="col product_card   ">
            <img src={bread_snack} />
            <div className="img_title fw-bolder">Loaves</div>
          </div>
          <div class="col product_card ">
            <img src={snack2} />
            <div className="img_title fw-bolder">Snacks</div>
          </div>
          <div class="col product_card ">
            <img src={Artisian} />
            <div className="img_title fw-bolder"> Artisain</div>
          </div>
        </div>
      </div>
      <hr />
      <div class="  text-center">
        <div class="row g-0 row-cols-3">
          <div class="col product_card ">
            <img src={bread_snack} />
            <div className="img_title  fw-bolder">Value Pack</div>
          </div>
          <div class="col product_card  ">
            <img src={Heakth} />
            <div className="img_title fw-bolder">Health</div>
          </div>
          <div class="col product_card ">
            <img src={bread_snack} />
            <div className="img_title fw-bolder">Lunch Box</div>
          </div>
        </div>
      </div>
    </div>
  );
};
