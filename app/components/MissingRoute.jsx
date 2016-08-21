import React from 'react';
import Card from './Card';

function MissingRoute() {
  return (
    <section className="stripe">
      <Card plain className="col--half text--center">
        <h1>Sorry we could not find that</h1>
        <p className="subtext">
          Please use top navigation to visit what you are looking for.
        </p>
      </Card>
      <Card plain className="text--center">
        <a href="https://leanpub.com/reactspeedcoding"
          className="image__link">
          <img width="200"
            src="img/reactspeed-cover-leanpub.jpg" />
        </a>
      </Card>
    </section>
  );
}

export default MissingRoute;
