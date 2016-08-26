import React from 'react';
import Card from './Card';
import IconText from './IconText';

import IconSvg from './IconSvg.jsx';
import ICONS from '../fixtures/icons.js';

const AboutInfographics = () => (
  <section className="stripe">
    <Card className="col--quarter text--center back--white">
      <IconText className="primary" icon="globe" size="5x"
        text="Nine Component Creation Strategies" />
    </Card>
    <Card className="col--quarter text--center back--white">
      <IconSvg color="warning" icon={ICONS.DATABASE}
        size={100} text="Firebase React Integration" />
    </Card>
    <Card plain className="col--one-fourth">
      <h3>
        <IconText slim className="danger" icon="building"
          text="Modular Architecture" />
      </h3>
      <h3>
        <IconText slim className="default" icon="cloud"
          text="Leverages Cloud" />
      </h3>
      <h3>
        <IconText slim className="secondary" icon="cog"
          text="30 Custom Components" />
      </h3>
      <h3>
        <IconText slim className="warning" icon="bullseye"
          text="Goal Oriented Design" />
      </h3>
    </Card>
    <Card plain className="text--center">
      <h1>Infographic Components</h1>
      <p className="subtext">
        Custom React components easily reusable to
        create variety of Infographic elements.
      </p>
    </Card>
  </section>
);

export default AboutInfographics;
