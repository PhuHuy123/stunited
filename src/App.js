import "./style/App.scss";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import JoinUs from "./pages/JoinUs";
import Talk from "./pages/Talk";
import StSoftware from "./pages/StSoftwate";
import { Routes, Route } from "react-router-dom";
import Digital from "./pages/Digital";
import Incubation from "./pages/Incubation"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/lets-talk" element={<Talk />} />
        <Route path="/st-software" element={<StSoftware />} />
        <Route path="/st-digital" element={<Digital />} />
        <Route path="/st-incubation" element={<Incubation />} />
      </Routes>
    </div>
  );
}

export default App;
