import "./App.css";
import { TOPNAV } from "./components/TOPNAV ";
import { Middlenav } from "./components/Middlenav";
import { Bottomnav } from "./components/Bottomnav";
import { Hero } from "./components/Hero";
import { Topproducts } from "./components/Topproducts";
import vienna from "./assets/vienna.jpg";
import cob from "./assets/cob.png";
function App() {
  return (
    <>
      {/* hero section */}

      <TOPNAV></TOPNAV>
      <Middlenav></Middlenav>
      <Bottomnav></Bottomnav>
      <Hero></Hero>
      <Topproducts></Topproducts>
      {/* <div className="product_list">
        <div className="card-group">
          <div className="card">
            <img src={vienna} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Vienna</h5>
              <div className="card-text text-center">
                <p>$5.00</p>
                <p>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={vienna} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Vienna</h5>
              <div className="card-text text-center">
                <p>$5.00</p>
                <p>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={vienna} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Vienna</h5>
              <div className="card-text text-center">
                <p>$5.00</p>
                <p>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={cob} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Vienna</h5>
              <div className="card-text text-center">
                <p>$5.00</p>
                <p>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
