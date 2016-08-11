import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <article className="pa3">
    <h1>App running in {process.env.NODE_ENV} mode</h1>
    <p className="measure">
      This app uses React, Webpack, PostCSS, Tachyon, PostCSS, and Babel,
      to deliver a modern development pipeline.
    </p>
  </article>,
  document.getElementById('app')
);
