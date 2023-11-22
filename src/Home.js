// Home.js
import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";

const Home = () => (
  <header className="App-header overlay-blur">
    <Container className="centered-content">
      <h1 className="title">Student Cents</h1>
      <div>
        <br />
        <p className="home-text">
          College can be both exciting and overwhelming. I understand how intimidating
          understanding the financial aspect of college can be. Welcome to your
          finance hub with everything you should know about. From scholarships to credit cards,
          you will find valuable information to help you navigate this not-so-scary college life.
        </p>
        <h6>~Elisa Arenas</h6>
      </div>
    </Container>
  </header>
);

export default Home;
