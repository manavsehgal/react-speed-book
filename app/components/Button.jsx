import React from 'react';

const Button = (props) => {
  const renderLabel = props.icon
    ? <span>
        <i className={`fa fa-${props.icon}`}></i>
        &nbsp;
        {props.label}
      </span>
    : props.label;

  let renderClass = props.size
    ? `button button--${props.color} button--${props.size}`
    : `button button--${props.color}`;

  // pass on className if any as defined by owner
  renderClass = props.className
    ? `${renderClass} ${props.className}`
    : renderClass;

  return (
    <button {...props} className={renderClass}>
      {renderLabel}
    </button>
  );
}

Button.propTypes = {
  label: React.PropTypes.string,
  icon: React.PropTypes.string,
  size: React.PropTypes.string,
  color: React.PropTypes.string
};

export default Button;
