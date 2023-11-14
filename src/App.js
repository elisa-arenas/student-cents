import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from "./MenuBar";
import "./App.css";
import { Card } from "semantic-ui-react";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
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
