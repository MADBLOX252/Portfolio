import React from "react";
import Hero from "../components/Hero";
import GFX from "../components/GFX";
import Scripting from "../components/Scripting";
import Modeling from "../components/Modeling";
import Animations from "../components/Animations";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <GFX />
      <Scripting />
      <Modeling />
      <Animations />
      <Contact />
      <div className="cursor" id="cursor"></div>
    </div>
  );
};

export default Home;
