import "./App.css";
import { TOPNAV } from "./components/TOPNAV ";
import { Middlenav } from "./components/Middlenav";
import { Bottomnav } from "./components/Bottomnav";
import { Hero } from "./components/Hero";
import { Topproducts } from "./components/Topproducts";
import vienna from "./assets/vienna.jpg";
import cob from "./assets/cob.png";
import { Moreproduct } from "./components/Moreproduct";
import bread_snack from "./assets/bread_snack.jpg";
import snack2 from "./assets/snack2.jpg";
function App() {
  return (
    <>
      {/* hero section */}

      {/* <TOPNAV></TOPNAV>
      <Middlenav></Middlenav>
      <Bottomnav></Bottomnav>
      <Hero></Hero>
      <Topproducts></Topproducts>
      <Moreproduct></Moreproduct> */}
      {/* 
      <div className="row row-cols-1  border row-cols-md-2 g-0">
        <div className="col">
          <div className="card  ">
            <img src={cob} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-dark">
            <img src={vienna} className="card-img  " alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <img src={cob} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <img src={vienna} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <img src={vienna} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <img src={vienna} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div> */}

      <div class="container  text-center">
        <div class="row g-0 row-cols-3">
          <div class="col product_card   ">
            <img src={bread_snack} />
            <div className="img_title"> bread</div>
          </div>
          <div class="col product_card ">
            <img src={snack2} />
            <div className="img_title"> bread</div>
          </div>
          <div class="col product_card ">
            <img src={bread_snack} />
            <div className="img_title"> bread</div>
          </div>
        </div>
      </div>
      <div class="container  text-center">
        <div class="row g-0 row-cols-3">
          <div class="col product_card ">
            <img src={bread_snack} />
            <div className="img_title"> bread</div>
          </div>
          <div class="col product_card ">
            <img src={snack2} />
            <div className="img_title"> bread</div>
          </div>
          <div class="col product_card ">
            <img src={bread_snack} />
            <div className="img_title"> bread</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
