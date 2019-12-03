import React from "react";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InlineStyle from "./components/InlineStyle";
import ContactCard from "./components/ContactCard";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <InlineStyle />
      <ContactCard
        url={"http://www.randomkittengenerator.com/"}
        name={"Mr Cat 01"}
        phone={"438 569-6965"}
        email={"cat1@hotmail.com"}
      />
      <ContactCard
        url={"http://www.randomkittengenerator.com/"}
        name={"Mr Cat 01"}
        phone={"438 569-6965"}
        email={"cat1@hotmail.com"}
      />
      <Footer />
    </div>
  );
};

export default App;
