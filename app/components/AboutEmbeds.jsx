import React from 'react';
import Card from './Card';
import YouTube from './YouTube';

const AboutEmbeds = () => (
  <section className="stripe">
    <Card plain
      className="col--one-third text--center back--white">
        <YouTube videoid="MGuKhcnrqGA" />
    </Card>
    <Card plain className="col--half text--center">
      <h1>Embed React Components</h1>
      <p className="subtext">
        This custom component demonstrates media
        embed within custom React component.
      </p>
    </Card>
  </section>
);

export default AboutEmbeds;
