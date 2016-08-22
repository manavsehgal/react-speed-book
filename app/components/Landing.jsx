import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Ribbon from './Ribbon';

const Landing = (props) => (
  <section className="landing">
    <Nav />
    <Ribbon />
    {props.children}
    <Footer />
  </section>
);
Landing.propTypes = {
  children: React.PropTypes.node
};
export default Landing;
