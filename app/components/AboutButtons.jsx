import React from 'react';
import Button from './Button';
import Card from './Card';
import ButtonDemo from './ButtonDemo';

const AboutButtons = () => (
  <section className="stripe back--default">
    <Card className="col--one-third text--center back--white">
      <p>Click does not do much...</p>
      <Button label="Default" color="default" />
      <Button label="Primary" color="primary" />
      <Button label="Secondary" color="secondary" />
      <Button label="Warning" color="warning" />
      <Button label="Success" color="success" />
      <Button label="Danger" color="danger" />
    </Card>
    <Card className="col--quarter text--center back--white">
      <ButtonDemo
        colors={['Primary', 'Success', 'Danger', 'Warning']}
      />
    </Card>
    <Card className="text--center back--white">
      <ButtonDemo
        colors={['Secondary', 'Success', 'Danger', 'Warning']}
        sizes={['large', 'medium', 'medium', 'small']}
        icons={['coffee', 'cloud', 'flash', 'plug']}
        iconOnly
      />
    </Card>
  </section>
);

export default AboutButtons;
