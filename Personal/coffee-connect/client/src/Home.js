import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Header/Navigation";

const Home = () => {
  return (
    //add navigation to route to admin and user page here. this is the page i want to render when the user first goes to my webapp
    <div>
      <Navigation />
      <div className="homeImage" />
    </div>
  );
};

export default Home;
