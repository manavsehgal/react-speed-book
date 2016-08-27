import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import Roadmap from '../../app/components/Roadmap';
import store from '../../app/store/roadmap';
import roadmapHydrate from '../../app/fixtures/roadmap/hydrate';

roadmapHydrate();

describe('<Roadmap />', () => {
  it('should create one .roadmap component', () => {
    const wrapper = shallow(<Roadmap />);
    expect(wrapper.is('.roadmap')).to.equal(true);
  });

  describe('roadmap__navigation', () => {
    it('should create one .roadmap__navigation component');

    describe('roadmap__search', () => {
      it('should create one .roadmap__search component', () => {
        const wrapper = render(<Provider store={store}><Roadmap /></Provider>);
        expect(wrapper.find('.roadmap__search')).to.have.length(1);
      });
      it('should initialize default value for searchText');
      it('should execute enterSearch() when user presses Enter in search box');
      it('should update state tree after enterSearch() is called');
    });

    describe('roadmap__category', () => {
      it('should create 4 .roadmap__category components', () => {
        const wrapper = render(<Provider store={store}><Roadmap /></Provider>);
        expect(wrapper.find('.roadmap__category')).to.have.length(4);
      });
      it('should execute selectFilter() when user selects a filter');
      it('should update state tree after selectFilter() is called');
    });
  });

  describe('feature__list', () => {
    it('should create one .feature__list component', () => {
      const wrapper = render(<Provider store={store}><Roadmap /></Provider>);
      expect(wrapper.find('.feature__list')).to.have.length(1);
    });
  });
});
