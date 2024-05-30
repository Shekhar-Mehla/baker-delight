import "./App.css";
import { TOPNAV } from "./components/TOPNAV ";
import { Middlenav } from "./components/Middlenav";
import { Bottomnav } from "./components/Bottomnav";
import { Hero } from "./components/Hero";
function App() {
  return (
    <>
      {/* hero section */}

      <TOPNAV></TOPNAV>
      <Middlenav></Middlenav>
      <Bottomnav></Bottomnav>
      <Hero></Hero>
    </>
  );
}

export default App;
