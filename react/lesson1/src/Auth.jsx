import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// algo:
// 1. show Login by default
// 2. show Sponner after Login click & hide Login
// 3. show Logout after 2 sec, hide Spinner
// 4. show Login after Logout clicked & hide Logout

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isProcessing: false,
    };
  }

  loginHanlder = () => {
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({ isProcessing: false, isLoggedIn: true });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn, isProcessing } = this.state;

    if (isProcessing) {
      return <Spinner size={50} />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }

    return <Login onLogin={this.loginHanlder} />;
  }
}

export default Auth;
