import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Ribbon from './Ribbon';

export default class Landing extends Component {
  render() {
    return(
      <section className="landing">
        <Nav />
        <Ribbon />
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
