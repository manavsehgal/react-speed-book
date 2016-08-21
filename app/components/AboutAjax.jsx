import React from 'react';
import Card from './Card';
import GitHub from './GitHub';

const AboutAjax = () => (
  <section className="stripe">
    <Card className="col--quarter text--center back--default">
      <GitHub repo="angular/angular" />
    </Card>
    <Card className="col--quarter text--center back--default">
      <GitHub repo="facebook/react" />
    </Card>
    <Card className="col--quarter text--center back--default">
      <GitHub repo="meteor/meteor" />
    </Card>
  </section>
);

export default AboutAjax;
