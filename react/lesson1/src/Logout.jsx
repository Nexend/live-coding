import React from 'react';

// input: (props): function
// output: JSX
const Logout = props => {
  return (
    <button className="logout btn" onClick={props.onLogout}>
      Logout
    </button>
  );
};

export default Logout;
