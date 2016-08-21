import React, { Component, PropTypes } from 'react';
import IconText from './IconText';

export default class Ribbon extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = { ribbonActive: '' }
  }
  setRibbonActive(activeText) {
    this.setState({ ribbonActive: activeText });
    this.context.router.push(activeText.toLowerCase());
  }
  render() {
    return (
      <section className="ribbon">
        <IconText
          onClick={this.setRibbonActive.bind(this, "Forms")}
          active={this.state.ribbonActive ===
            "Forms" ? true : false}
          ribbon text="Forms" icon="list-alt"
          size="2x" className="default" />
        <IconText
          onClick={this.setRibbonActive.bind(this, "Workflow")}
          active={this.state.ribbonActive ===
            "Workflow" ? true : false}
          ribbon text="Workflow" icon="code-fork"
          size="2x" className="default" />
        <IconText
          onClick={this.setRibbonActive.bind(this, "Ajax")}
          active={this.state.ribbonActive ===
            "Ajax" ? true : false}
          ribbon text="Ajax" icon="cloud"
          size="2x" className="default" />
        <IconText
          onClick={this.setRibbonActive.bind(this, "Embeds")}
          active={this.state.ribbonActive ===
            "Embeds" ? true : false}
          ribbon text="Embeds" icon="share-alt-square"
          size="2x" className="default" />
        <IconText
          onClick={this.setRibbonActive.bind(this, "Custom")}
          active={this.state.ribbonActive ===
            "Custom" ? true : false}
          ribbon text="Custom" icon="cog"
          size="2x" className="default" />
        <IconText
          onClick={this.setRibbonActive.bind(this, "Infographics")}
          active={this.state.ribbonActive ===
            "Infographics" ? true : false}
          ribbon text="Infographics" icon="eye"
          size="2x" className="default" />
        <IconText
          onClick={this.setRibbonActive.bind(this, "Charts")}
          active={this.state.ribbonActive ===
            "Charts" ? true : false}
          ribbon text="Charts" icon="bar-chart"
          size="2x" className="default" />
      </section>
    );
  }
}
