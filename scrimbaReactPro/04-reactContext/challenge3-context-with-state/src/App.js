import React, { Component } from 'react';
import Header from './components/Header';
import { UserContextConsumer } from './userContext';

class App extends Component {
  state = {
    newUsername: ''
  };

  handleChange = e => {
    this.setState({ newUsername: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <main>
          <UserContextConsumer>
            {context => (
              <div>
                <p className='main'>
                  No new notifications, {context.username}! 🎉
                </p>
                <input
                  type='text'
                  name='userNameInput'
                  placeholder='New username'
                  onChange={this.handleChange}
                />
                <button onClick={context.updateUsername}>
                  Update Username
                </button>
              </div>
            )}
          </UserContextConsumer>
        </main>
      </div>
    );
  }
}

export default App;
