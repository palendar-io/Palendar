import React, { Component } from "react";
import Navigation from "../components/LandingPage/Navigation";
import Hero from "../components/LandingPage/Hero";
import Features from "../components/LandingPage/Features";
import Pricing from "../components/LandingPage/Pricing";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Hero />
        <Features />
        <Pricing />
      </div>
    );
  }
}
