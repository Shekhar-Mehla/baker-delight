import "./App.css";
import { TOPNAV } from "./components/TOPNAV ";
import { Middlenav } from "./components/Middlenav";
import { Bottomnav } from "./components/Bottomnav";
import { Hero } from "./components/Hero";
import { Topproducts } from "./components/Topproducts";

import { Moreproduct } from "./components/Moreproduct";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      {/* hero section */}

      <TOPNAV></TOPNAV>
      <Middlenav></Middlenav>
      <Bottomnav></Bottomnav>
      <Hero></Hero>
      <Topproducts></Topproducts>
      <Moreproduct></Moreproduct>
      <Footer></Footer>

      {/* <div class="container  text-center">
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
      <div class="container  text-center">
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
      </div> */}
    </>
  );
}

export default App;
