import React from 'react';
import Card from './Card';
import World from './World';
import TodoApp from './TodoApp';

const AboutCustom = () => (
  <section>
    <section className="stripe">
      <Card
        className="col--one-third text--center back--white">
          <TodoApp />
      </Card>
      <Card plain className="col--half text--center">
        <h1>ES5 to ES6 Conversion</h1>
        <p className="subtext">
          This custom component is conversion from ES5 to ES6,
          reusing ReactSpeed UI library.
        </p>
      </Card>
    </section>
    <section className="stripe pattern-agsquare">
      <Card plain className="col--half text--center">
        <h1>Custom React Component</h1>
        <p className="subtext">
          This custom component demonstrates props, state,
          and ES6 classes.
        </p>
      </Card>
      <Card
        className="col--one-third text--center back--white">
          <World />
      </Card>
    </section>
  </section>
);

export default AboutCustom;
