import React, { PropTypes } from 'react';
import Card from './Card.jsx';
import IconText from './IconText.jsx';
import { Categories } from '../actions/roadmap';

const Feature = ({ onClickLikes, title, about,
  category, likes }) => {
  let renderCategory = '';
  switch (category) {
  case Categories.COMPONENT:
    renderCategory = (
      <IconText
        icon="cubes"
        size="2x" className="default feature__category" />
    );
    break;
  case Categories.APP:
    renderCategory = (
      <IconText
        icon="cloud"
        size="2x" className="primary feature__category" />
    );
    break;
  case Categories.CHAPTER:
    renderCategory = (
      <IconText
        icon="book"
        size="2x" className="secondary feature__category" />
    );
    break;
  default:
    renderCategory = '';
  }

  const renderLikesClass = (likes > 10)
    ? 'success feature__likes' : 'warning feature__likes';

  return (
    <div className="feature">
      <Card onClick={onClickLikes} className="col--twentieth" plain>
        <IconText
          className={renderLikesClass}
          icon="heart"
          size="2x"
          text={`${likes} likes`}
          ribbon
        />
      </Card>
      <Card plain className="col--half">
        <div className="feature__detail">
          <b>{title}</b><br />
          <small>{about}</small>
        </div>
      </Card>
      <Card plain>
        {renderCategory}
      </Card>
    </div>
  );
};

Feature.propTypes = {
  onClickLikes: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired
};

export default Feature;
