import React from 'react';

import Card from './Card.jsx';
import SearchFeature from './SearchFeature';

import VisibleFeatureList from './VisibleFeatureList';
import FilterCategoryButton from './FilterCategoryButton';
import { CategoryFilters } from '../actions/roadmap';


const Roadmap = () => (
  <div className="roadmap">
    <Card plain>
      <h1>Roadmap</h1>
    </Card>
    <div className="roadmap__navigation">
      <Card plain className="col--half">
        <SearchFeature />
      </Card>
      <Card plain>
        <FilterCategoryButton filter={CategoryFilters.SHOW_ALL} />
        <FilterCategoryButton filter={CategoryFilters.SHOW_APPS} />
        <FilterCategoryButton filter={CategoryFilters.SHOW_CHAPTERS} />
        <FilterCategoryButton filter={CategoryFilters.SHOW_COMPONENTS} />
      </Card>
    </div>
    <VisibleFeatureList />
  </div>
);

export default Roadmap;
