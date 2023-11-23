// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MenuBar from "./MenuBar";
import Home from "./Home";
import FAFSA from "./FAFSA";
import CostOfLiving from "./CostOfLiving";
import CreditCards from "./CreditCards";
import BudgetCalculator from "./BudgetCalculator";
import Resources from "./Resources";
import Scholarships from "./scholarships";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Scholarships" element={<Scholarships />} />
          <Route path="/FAFSA" element={<FAFSA />} />
          {/* <Route path="/CostOfLiving" element={<CostOfLiving />} /> */}
          <Route path="/CreditCards" element={<CreditCards />} />
          {/* <Route path="/BudgetCalculator" element={<BudgetCalculator />} />
          <Route path="/Resources" element={<Resources />} /> */}
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


//what have I done
//set default path to home page
//TODO: research and make each page pretty