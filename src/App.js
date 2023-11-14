import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";
import "./App.css";
import { Card } from "semantic-ui-react";
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
          <Route path="/Scholarships" element={<Scholarships />} />
          <Route path="/FAFSA" element={<FAFSA />} />
          <Route path="/CostOfLiving" element={<CostOfLiving />} />
          <Route path="/CreditCards" element={<CreditCards />} />
          <Route path="/BudgetCalculator" element={<BudgetCalculator />} />
          <Route path="/Resources" element={<Resources />} />
        </Routes>
        <header className="App-header">
          <div className="centered-content">
            <h1>Student Cents</h1>
            <Card style={{ background: "#FFFFFF"}}>
            <div className="ui raised card" style={{ float: "left", background: "#FFFFF"}}>
              <div className="content">
                <div className="header" style={{ color: "#555555" }}>Purpose</div>
                  <div className="meta">
                    <span className="category" style={{ color: "#555555" }}>explain here</span>
                  </div>
                <div className="description">
              </div>
            </div>
            <div className="extra content">
              <div className="right floated author">
                <img
                  className="ui avatar image"
                  src="https://th.bing.com/th/id/OIP.wmLy5qlrl49ZmNBK9C71cgHaHa?pid=ImgDet&rs=1"
                  alt="Author avatar"
                  style={{ width: "200px", height: "auto", alignContent: "flex-start"}}
                />
              </div>
            </div>
            </div>
            <div className="ui raised card" style={{ float: "left", background: "#FFFFF"}}>
              <div className="content">
                <div className="header" style={{ color: "#555555" }}>Why</div>
                  <div className="meta">
                    <span className="category" style={{ color: "#555555" }}>text here</span>
                  </div>
                <div className="description">
              </div>
            </div>
            <div className="extra content">
              <div className="right floated author">
                <img
                  className="ui avatar image"
                  src="https://th.bing.com/th/id/OIP.wmLy5qlrl49ZmNBK9C71cgHaHa?pid=ImgDet&rs=1"
                  alt="Author avatar"
                  style={{ width: "200px", height: "auto", alignContent: "flex-start"}}
                />
              </div>
            </div>
            </div>
            </Card>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
