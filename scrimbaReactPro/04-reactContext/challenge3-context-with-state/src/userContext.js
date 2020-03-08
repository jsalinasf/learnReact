import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

class UserContextProvider extends Component {
  state = {
    username: 'user01'
  };

  updateUsername = newUsername => {
    this.setState({ username: newUsername });
  };

  render() {
    return (
      <Provider
        value={{
          username: this.state.username,
          updateUsername: this.updateUsername
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UserContextProvider, Consumer as UserContextConsumer };
