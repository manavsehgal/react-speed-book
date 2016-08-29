import { configure } from '@kadira/storybook';
import '../app/style.css';

function loadStories() {
  require('../app/stories/button');
  // require as many stories as you need.
}

configure(loadStories, module);
