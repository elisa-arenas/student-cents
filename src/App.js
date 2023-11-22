// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./MenuBar";
import Home from "./Home";
import { Card } from "semantic-ui-react";
import FAFSA from "./FAFSA";
import CostOfLiving from "./CostOfLiving";
import CreditCards from "./CreditCards";
import BudgetCalculator from "./BudgetCalculator";
import Resources from "./Resources";
import Scholarships from "./scholarships";

// const tempImage = "https://th.bing.com/th/id/OIP.wmLy5qlrl49ZmNBK9C71cgHaHa?pid=ImgDet&rs=1";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Scholarships" element={<Scholarships />} />
          <Route path="/FAFSA" element={<FAFSA />} />
          <Route path="/CostOfLiving" element={<CostOfLiving />} />
          <Route path="/CreditCards" element={<CreditCards />} />
          <Route path="/BudgetCalculator" element={<BudgetCalculator />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;