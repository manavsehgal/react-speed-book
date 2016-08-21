import React from 'react';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import InputLabel from './InputLabel';
import InputField from './InputField';

const AboutForms = () => (
  <section className="stripe back--default">
    <Card plain className="col--one-third text--center">
      <h1>Beautiful Responsive Forms</h1>
      <p className="subtext">
        Create beautiful forms using several variations
        of input controls and buttons.
      </p>
    </Card>
    <Card className="col--quarter back--white">
      <Input>
        <InputLabel label="Name" icon="user" />
        <InputField placeholder="Placeholder for name" />
      </Input>
      <Input>
        <InputLabel label="Street"/>
        <InputField placeholder="Enter street address" />
      </Input>
      <Input>
        <InputField placeholder="Just a field" />
      </Input>
    </Card>
    <Card className="back--white">
      <Input>
        <InputField />
        <Button color="success" icon="search" />
      </Input>
      <Input>
        <Button color="primary" icon="cloud" label="Connect" />
        <InputField placeholder="Enter server address" />
      </Input>
      <Input>
        <InputLabel icon="envelope" />
        <InputField placeholder="Send a note" />
        <Button color="warning" label="Send" />
      </Input>
    </Card>
  </section>
);

export default AboutForms;
