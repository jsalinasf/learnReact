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
      <ContactCard contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}/>
      <ContactCard contact={{name: "Fluffykins", imgUrl: "http://images6.fanpop.com/image/photos/40800000/socializing-kitten-300x200-cute-kittens-40835560-300-200.jpg", phone: "(809) 569-9986", email: "catcat@gmail.com"}} />
      <InlineStyle />
      <Footer />
    </div>
  );
};

export default App;
