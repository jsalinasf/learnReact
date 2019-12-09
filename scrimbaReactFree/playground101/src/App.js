/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

import React from "react";
// import ReactDOM from "react-dom";

// #1
// function App() {
//   return (
//     <div>
//       <p>Test</p>
//       {/* <Header />
//             <Greeting /> */}
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Header2 name={"Mike"} />
        <Greeting2 />
      </div>
    );
  }
}

// // #2
// function Header(props) {
//   return (
//     <header>
//       <p>Welcome, {props.username}!</p>
//     </header>
//   );
// }

class Header2 extends React.Component {
  render() {
    return <h1>Welcome, {this.props.name}!</h1>;
  }
}
// #3
// function Greeting() {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;

//   if (hours < 12) {
//     timeOfDay = "morning";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon";
//   } else {
//     timeOfDay = "night";
//   }
//   return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
// }

class Greeting2 extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay = "";

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }

    return <h2>Good {timeOfDay} to you, sir or madam!</h2>;
  }
}

export default App;
