import React, {PropTypes} from 'react';
import IconText from './IconText';

export default class GitHub extends React.Component {
  static propTypes = {
    repo: PropTypes.string.isRequired
  }

  constructor (props) {
    super (props);
    this.state = {
      full_name: '',
      stargazers_count: 0,
      open_issues: 0
    };
  }

  componentDidMount() {
    const sourceRepo =
      `https://api.github.com/repos/${this.props.repo}`;

    this.serverRequest = $.get(sourceRepo, function (result) {
      this.setState({
        full_name: result.full_name,
        stargazers_count: result.stargazers_count,
        open_issues: result.open_issues
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      this.state.full_name
        ? <div>
            <h1>
              <IconText slim className="primary" icon="github"
                text={this.state.full_name} />
            </h1>
            <h2><IconText slim className="secondary" icon="star"
              text={`${this.state.stargazers_count} stars`} /></h2>
            <h2><IconText slim className="danger" icon="bug"
              text={`${this.state.open_issues} issues`} /></h2>
          </div>
        : <p>Loading Live Stats...</p>
    );
  }
};
