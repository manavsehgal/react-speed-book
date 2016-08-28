import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

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
import Roadmap from './components/Roadmap';

import store from './store/roadmap';
import roadmapHydrate from './fixtures/roadmap/hydrate';
import rsdb from './fixtures/rsdb.js';

roadmapHydrate();
const routeConfig = (
  <Route path="/" component={Landing}>
    <IndexRoute component={Roadmap} />
    <Route path="/roadmap" component={Roadmap} />
    <Route path="/book" component={AboutBook} />
    <Route path="/charts" component={AboutCharts} />
    <Route path="/embeds" component={AboutEmbeds} />
    <Route path="/forms" component={AboutForms} />
    <Route path="/custom" component={AboutCustom} />
    <Route path="/workflow"
      rsdb={rsdb}
      component={AboutWorkflow} />
    <Route path="/buttons" component={AboutButtons} />
    <Route path="/ajax" component={AboutAjax} />
    <Route path="/infographics"
      component={AboutInfographics} />
    <Route path="*" component={MissingRoute} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routeConfig} />
  </Provider>,
  document.getElementById('app')
);
