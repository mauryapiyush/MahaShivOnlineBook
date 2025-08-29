import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Partners from "./components/Partners/Partners";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FriendlyBook from "./components/FriendlyBook/FriendlyBook";
import PlaceBet from "./components/PlaceBet/PlaceBet";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Partners />
      <HowItWorks />
      <FriendlyBook />
      <PlaceBet />
      <Support />
      <Footer />
    </>
  );
}

export default App;
