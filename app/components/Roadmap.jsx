import React from 'react';

import Card from './Card.jsx';
import Button from './Button';
import Input from './Input';
import InputLabel from './InputLabel';
import InputField from './InputField';
import FeatureList from './FeatureList';
import features from '../fixtures/roadmap/features';

const likesClick = (id) => {
  // to be implemented
  console.log(`likesClick id = ${id}`);
};
const Roadmap = () => (
  <div className="roadmap">
    <Card plain>
      <h1>Roadmap</h1>
    </Card>
    <div className="roadmap__navigation">
      <Card plain className="col--half">
        <Input className="roadmap__search">
          <InputLabel label="Search" />
          <InputField placeholder="Enter feature name" />
        </Input>
      </Card>
      <Card plain>
        <Button className="roadmap__category"
          label="Component" color="default" icon="cubes" />
        <Button className="roadmap__category"
          label="App" color="primary" icon="cloud" />
        <Button className="roadmap__category"
          label="Chapter" color="secondary" icon="book" />
      </Card>
    </div>
    <FeatureList
      features={features}
      onClickLikes={likesClick}
    />
  </div>
);

export default Roadmap;
