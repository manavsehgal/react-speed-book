import { describe, it } from 'mocha';
import { expect } from 'chai';
import store from '../../app/store/roadmap';
import * as actions from '../../app/actions/roadmap';

describe('Roadmap Redux', () => {
  it('should get initial state for store', () => {
    expect(store.getState().features.length).to.equal(11);
    expect(store.getState().categoryFilter)
      .to.equal(actions.CategoryFilters.SHOW_ALL);
    expect(store.getState().searchText)
      .to.equal('');
  });
  it('should increment likes count for first feature', () => {
    store.dispatch(actions.likeFeature(0)); // likes = 1
    store.dispatch(actions.likeFeature(0)); // likes = 2
    expect(store.getState().features[0].likes).to.equal(43);
  });
  it('should set a new categoryFilter', () => {
    expect(store.getState().categoryFilter)
      .to.equal(actions.CategoryFilters.SHOW_ALL);
    store.dispatch(actions
      .setCategoryFilter(actions.CategoryFilters.SHOW_COMPONENTS));
    expect(store.getState().categoryFilter)
      .to.equal(actions.CategoryFilters.SHOW_COMPONENTS);
  });
  it('should set new search text', () => {
    expect(store.getState().searchText)
      .to.equal('');
    store.dispatch(actions
      .setSearchText('new search text'));
    expect(store.getState().searchText)
      .to.equal('new search text');
  });
});
