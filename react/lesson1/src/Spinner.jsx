import React from 'react';

// input: (props): number
// output: JSX
const Spinner = ({ size }) => {
  const style = { height: size, width: size };

  return <span className="spinner" style={style}></span>;
};

export default Spinner;
