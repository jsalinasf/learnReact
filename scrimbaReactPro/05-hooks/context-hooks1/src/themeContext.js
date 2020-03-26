import React, { useState } from 'react';
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };

// class ThemeContextProvider extends Component {
//   state = {
//     theme: 'dark'
//   };

//   toggleTheme = () => {
//     this.setState(prevState => {
//       return {
//         theme: prevState.theme === 'light' ? 'dark' : 'light'
//       };
//     });
//   };

//   render() {
//     return (
//       <ThemeContext.Provider
//         value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
//       >
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }
