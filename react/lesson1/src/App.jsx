import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';
import Auth from './Auth.jsx';

const App = () => {
  const someFunc = () => {
    console.log('hello');
  };
  return (
    <div>
      <Auth />
      <Login onLogin={someFunc} />
      <Logout />
      <Spinner size={50} />
    </div>
  );
};

export default App;
