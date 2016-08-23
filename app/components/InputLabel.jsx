import React from 'react';

const InputLabel = (props) => {
  let renderLabel = null;
  if (props.icon && props.label) {
    renderLabel = (
      <span className="text--nowrap">
        <span className={`fa fa-${props.icon}`} />
        <span> {props.label}</span>
      </span>
    );
  }

  if (!props.icon && props.label) {
    renderLabel = props.label;
  }

  if (props.icon && !props.label) {
    renderLabel =
        <span className={`fa fa-${props.icon}`} />;
  }

  // pass on className if any as defined by owner
  const renderClass = props.className
    ? `input__label ${props.className}`
    : 'input__label';

  return (
    <span {...props} className={renderClass}>
      {renderLabel}
    </span>
  );
};

InputLabel.propTypes = {
  className: React.PropTypes.string,
  label: React.PropTypes.string,
  icon: React.PropTypes.string
};

export default InputLabel;
