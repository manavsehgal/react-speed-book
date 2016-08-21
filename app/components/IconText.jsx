import React, { PropTypes } from 'react';

const IconText = (props) => {
  const {
    icon, text, size, rotate,
    flip, inverse, slim, ribbon,
    active, ...rest } = props;

  let variation = '';

  variation += size ? ` fa-${size}` : '';
  variation += rotate ? ` fa-rotate-${rotate}` : '';
  variation += flip ? ` fa-flip-${flip}` : '';
  variation += inverse ? ' fa-inverse' : '';

  const iconClass = `fa fa-${icon}${variation}`;

  let renderIcon = null;

  if (slim) {
    renderIcon =
      <div {...rest}>
        <i className={iconClass}></i> {text}
      </div>;
  }

  if (ribbon) {
    renderIcon =
      <div {...rest} className=
        {`${props.className} ribbon__menu text--center`}>
          <i className={iconClass}></i>
          <p className={active
              ? 'ribbon__text--active'
              : 'ribbon__text'}>
                {text}
          </p>
      </div>;
  }

  if (!slim && !ribbon) {
    renderIcon =
      <div {...rest}>
        <i className={iconClass}></i>
        <h1>{text}</h1>
      </div>;
  }

  return (renderIcon);
};

IconText.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x', '']),
  rotate: PropTypes.number,
  flip: PropTypes.oneOf(['horizontal', 'vertical', '']),
  inverse: PropTypes.bool,
  slim: PropTypes.bool,  // draw slim single-line InfoText
  ribbon: PropTypes.bool
};

IconText.defaultProps = {
  className: '',
  size: '',
  rotate: null,
  flip: '',
  inverse: false,
  slim: false,
  ribbon: false
};


export default IconText;
