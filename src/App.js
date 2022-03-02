import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cancel } from "./stripe/Cancel";
import { Checkout } from "./stripe/Checkout";
import { Success } from "./stripe/Success";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
