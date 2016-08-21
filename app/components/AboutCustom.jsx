import React from 'react';
import Card from './Card';
import World from './World';

const AboutCustom = () => (
  <section className="stripe pattern-agsquare">
    <Card
      className="col--one-third text--center back--white">
        <World />
    </Card>
    <Card plain className="col--half text--center">
      <h1>Custom React Component</h1>
      <p className="subtext">
        This custom component demonstrates props, state,
        and ES6 classes.
      </p>
    </Card>
  </section>
);

export default AboutCustom;
