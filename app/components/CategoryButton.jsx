import React, { PropTypes } from 'react';
import { CategoryFilters } from '../actions/roadmap';
import Button from './Button';

const CategoryButton = ({ selected, filter, onClick }) => {
  let categoryColor = '';
  let categoryIcon = '';

  switch (filter) {
  case CategoryFilters.SHOW_APPS:
    categoryColor = 'primary';
    categoryIcon = 'cloud';
    break;
  case CategoryFilters.SHOW_COMPONENTS:
    categoryColor = 'default';
    categoryIcon = 'cubes';
    break;
  case CategoryFilters.SHOW_CHAPTERS:
    categoryColor = 'secondary';
    categoryIcon = 'book';
    break;
  default:
    categoryColor = 'warning';
    categoryIcon = 'star';
  }
  if (selected) {
    return (
      <Button className="roadmap__category"
        color={categoryColor} icon={categoryIcon} />
    );
  }
  return (
    <Button className="roadmap__category"
      color={categoryColor} icon={categoryIcon}
      onClick={e => {
        e.preventDefault();
        onClick();
      }} />
  );
};

CategoryButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CategoryButton;
