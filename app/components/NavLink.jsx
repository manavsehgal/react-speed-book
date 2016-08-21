import React, {PropTypes} from 'react';
import { Link } from 'react-router';

export default class NavLink extends React.Component {
  static propTypes = {brand: PropTypes.bool}
  static defaultProps = {brand: false}

  render() {
    const renderClass = this.props.brand
      ? "nav__brand" : "nav__link";

    const renderActiveClass = this.props.brand
      ? null : "nav__link--active";

    return (
      <li className="grid-cell">
        {
          this.props.to
          ? <Link
              to={this.props.to}
              className={renderClass}
              activeClassName={renderActiveClass}>
              {this.props.children}
            </Link>
          : <a href={this.props.href} className="nav__link">
              {this.props.children}
            </a>
        }
      </li>
    );
  }
}
