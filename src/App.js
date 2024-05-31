import "./App.css";
import { TOPNAV } from "./components/TOPNAV ";
import { Middlenav } from "./components/Middlenav";
import { Bottomnav } from "./components/Bottomnav";
import { Hero } from "./components/Hero";
import { Topproducts } from "./components/Topproducts";
import vienna from "./assets/vienna.jpg";
import cob from "./assets/cob.png";
import { Moreproduct } from "./components/Moreproduct";
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

      <div className="row row-cols-1 row-cols-md-2 g-0">
        <div className="col">
          <div className="card ">
            <img src={cob} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-dark">
            <img src={vienna} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <img src={cob} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <img src={vienna} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
