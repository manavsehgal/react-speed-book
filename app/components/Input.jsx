import React from 'react';

const Input = (props) => (
  <div
    {...props}
    className={props.className
      ? `input ${props.className}`
      : 'input'}>
    {props.children}
  </div>
);

Input.propTypes = {
  children: React.PropTypes.node
};

export default Input;
