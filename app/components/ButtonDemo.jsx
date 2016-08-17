import React, { PropTypes, Component } from 'react';
import Button from './Button';

export default class ButtonDemo extends Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
    icons: PropTypes.array,
    sizes: PropTypes.array,
    iconOnly: PropTypes.bool
  }
  static defaultProps = {icons: [], sizes: [], iconOnly: false}

  constructor(props) {
    super(props);
    this.state = {demoMessage: 'Click any button...'};
  }

  handleButtonClick(color) {
    this.setState({demoMessage: `Button ${color} clicked.`});
  }

  render () {
    const renderButtons = this.props.colors.map((color, i) => {
        const renderIcon =
          (this.props.icons === undefined || this.props.icons.length === 0)
            ? null : this.props.icons[i];
        const renderSize =
          (this.props.sizes === undefined || this.props.sizes.length === 0)
            ? null
            : this.props.sizes[i];
        const renderLabel = this.props.iconOnly ? null : color;
        return(
          <Button
            key={color}
            label={renderLabel}
            size={renderSize}
            color={color.toLowerCase()}
            icon={renderIcon}
            onClick={this.handleButtonClick.bind(this, color)}
          />
        );
      });

    return (
      <div>
        <p>{this.state.demoMessage}</p>
        {renderButtons}
      </div>
    );
  }
}
