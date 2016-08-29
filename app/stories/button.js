import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../components/Button.jsx';

storiesOf('Button', module)
  .add('with text, default color', () => (
    <Button color="default"
      label="My First Button"
      onClick={action('clicked')} />
  ))
  .add('with icon, primary color', () => (
    <Button color="primary" icon="cog" />
  ));
