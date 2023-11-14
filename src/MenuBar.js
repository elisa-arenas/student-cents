import React, { useState } from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const logo = "https://th.bing.com/th/id/OIP.wmLy5qlrl49ZmNBK9C71cgHaHa?pid=ImgDet&rs=1";
function MenuBar() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { name: "home", label: "Home", to: "/" },
    { name: "scholarships", label: "Scholarships", to: "/Scholarships" },
    { name: "fafsa", label: "FAFSA", to: "/FAFSA" },
    { name: "costOfLiving", label: "Cost of Living", to: "/CostOfLiving" },
    { name: "creditCards", label: "Credit Cards", to: "/CreditCards" },
    { name: "budgetCalculator", label: "Budget Calculator", to: "/BudgetCalculator" },
    { name: "resources", label: "Resources", to: "/Resources" },
  ];

  return (
    <Menu inverted style={{ backgroundColor: "#FFFFFF" }}>
    <Container style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Menu.Item className="brand-logo" as={Link} to="/">
          <img src={logo} alt="" />
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
                     backgroundColor: activeTab === tab.name ? "#FFFFFF" : "#FFFFFF",
                     //border: "3px solid #DE7E5D",
                     fontFamily: "sans-serif", 
                     borderBottom: "none",
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
