import "./App.css";
import { TOPNAV } from "./components/TOPNAV ";
import { Middlenav } from "./components/Middlenav";
import { Bottomnav } from "./components/Bottomnav";
function App() {
  return (
    <>
      {/* hero section */}

      <TOPNAV></TOPNAV>
      <Middlenav></Middlenav>
      <Bottomnav></Bottomnav>
    </>
  );
}

export default App;
