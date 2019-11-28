import React from "react";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InlineStyle from "./components/InlineStyle";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <InlineStyle />
      <Footer />
    </div>
  );
};

export default App;
