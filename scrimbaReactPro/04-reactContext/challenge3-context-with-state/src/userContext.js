import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

class UserContextProvider extends Component {
  state = {
    username: 'mike12'
  };

  updateUsername = () => {
    this.setState({ username: 'jake3' });
  };

  render() {
    return (
      <Provider
        value={{ username: this.username, updateUsername: this.updateUsername }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UserContextProvider, Consumer as UserContextConsumer };
