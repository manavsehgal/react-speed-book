import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing.jsx';
import AboutBook from './components/AboutBook';
import AboutCharts from './components/AboutCharts';
import AboutForms from './components/AboutForms';
import AboutCustom from './components/AboutCustom';
import AboutWorkflow from './components/AboutWorkflow';
import AboutButtons from './components/AboutButtons';
import AboutAjax from './components/AboutAjax';
import AboutInfographics from './components/AboutInfographics';
import AboutEmbeds from './components/AboutEmbeds';
import MissingRoute from './components/MissingRoute';

import { Router, Route,
  IndexRoute, browserHistory } from 'react-router';

const routeConfig = (
  <Route path="/" component={Landing}>
    <IndexRoute component={AboutCharts} />
    <Route path="/book" component={AboutBook} />
    <Route path="/charts" component={AboutCharts} />
    <Route path="/embeds" component={AboutEmbeds} />
    <Route path="/forms" component={AboutForms} />
    <Route path="/custom" component={AboutCustom} />
    <Route path="/workflow" component={AboutWorkflow} />
    <Route path="/buttons" component={AboutButtons} />
    <Route path="/ajax" component={AboutAjax} />
    <Route path="/infographics"
      component={AboutInfographics} />
    <Route path="*" component={MissingRoute} />
  </Route>
);

ReactDOM.render(
  <Router history={browserHistory} routes={routeConfig} />,
  document.getElementById('app')
);
