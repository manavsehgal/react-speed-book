import React from 'react';
import Card from './Card';
import Workflow from './Workflow';
import WorkflowFire from './WorkflowFire';

const steps = require('../fixtures/workflow/steps.json');

const AboutWorkflow = ({ route }) => (
  <section>
    <section className="stripe">
      <Card plain className="col--half text--center">
        <h1>Custom Workflow Component</h1>
        <p className="subtext">
          Navigate React development strategies.
        </p>
      </Card>
      <Card className="col--one-third">
        <Workflow />
      </Card>
    </section>
    <section className="stripe back--default">
      <Card className="col--one-third back--white">
        <WorkflowFire steps={steps} rsdb={route.rsdb} />
      </Card>
      <Card plain className="col--half text--center">
        <h1>Firebase Wired Workflow Component</h1>
        <p className="subtext">
          Navigate React development strategies straight from
          a realtime database.
        </p>
      </Card>
    </section>
  </section>
);

AboutWorkflow.propTypes = {
  route: React.PropTypes.object
};

export default AboutWorkflow;
