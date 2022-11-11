import "./style/App.scss";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import JoinUs from "./pages/JoinUs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/join-us" element={<JoinUs />} />
      </Routes>
    </div>
  );
}

export default App;
