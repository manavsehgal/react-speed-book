import React from 'react';

const YouTube = ({ videoid }) => (
  <iframe
    className="youtube"
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${videoid}?
    rel=0&amp;controls=0&amp;showinfo=0`}
    frameBorder="0"
    allowFullScreen
  >
  </iframe>
);

YouTube.propTypes
  = { videoid: React.PropTypes.string };

export default YouTube;
