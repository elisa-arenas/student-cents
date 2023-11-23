import React, { useState } from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const logo = require('../src/images/logoDarkBlue.jpg')
function MenuBar() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { name: "home", label: "Home", to: "/" },
    { name: "scholarships", label: "Scholarships", to: "/Scholarships" },
    { name: "fafsa", label: "FAFSA", to: "/FAFSA" },
    { name: "creditCards", label: "Credit Cards", to: "/CreditCards" },
    // { name: "costOfLiving", label: "Cost of Living", to: "/CostOfLiving" },
    // { name: "creditCards", label: "Credit Cards", to: "/CreditCards" },
    // { name: "budgetCalculator", label: "Budget Calculator", to: "/BudgetCalculator" },
    // { name: "resources", label: "Resources", to: "/Resources" },
  ];

  return (
    <Menu className="menu-background">
    <Container style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Menu.Item className="brand-logo" as={Link} to="/">
          <img src={logo} alt="" style={{ width: '150%', height: '150%' }}  />
        </Menu.Item>
        <div style={{ display: "flex", gap: "1px"}}>
        {tabs.map((tab) => (
          <Menu.Item
            key={tab.name}
            as={Link}
            to={tab.to}
            active={activeTab === tab.name}
            onClick={() => handleTabClick(tab.name)}
            style={{ fontSize: "22px",
                     flex: 0.5, 
                     textAlign: "center",
                     padding: "20px",
                     backgroundColor: activeTab === tab.name ? "#0880a8" : "#075873",
                     fontFamily: "sans-serif",
                     borderBottom: "none",
                     textDecoration: "none",
                     color: "#ffffff",
                   }}
          >
            {tab.label}
          </Menu.Item>
        ))}
        </div>
      </Container>
    </Menu>
  );
}

export default MenuBar;
