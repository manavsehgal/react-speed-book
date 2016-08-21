import React from 'react';
import Card from './Card';
import Workflow from './Workflow';

const AboutWorkflow = () => (
  <section className="stripe">
    <Card plain className="col--half text--center">
      <h1>Custom Workflow Component</h1>
      <p className="subtext">
        Navigate React development strategies.
      </p>
    </Card>
    <Card className="col--one-third back--secondary">
      <Workflow />
    </Card>
  </section>
);

export default AboutWorkflow;
