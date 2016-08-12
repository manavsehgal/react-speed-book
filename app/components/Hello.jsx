import React from 'react';

const Hello = ({ greet, message }) => (
  <h1>{greet} {message}</h1>
);

Hello.propTypes = {
  greet: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired
};

export default Hello;
