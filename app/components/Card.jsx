import React, { PropTypes } from 'react';

const Card = (props) => {
  const boxStyle = props.plain ? 'card' : 'card--box';
  const cardStyle = props.className
    ? `${boxStyle} ${props.className}`
    : boxStyle;
  return (
    <div onClick={props.onClick} className={cardStyle}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  plain: PropTypes.bool
};

Card.defaultProps = {
  className: '',
  children: null,
  onClick: null,
  plain: false
};

export default Card;
