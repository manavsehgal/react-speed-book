import React from 'react';
import { connect } from 'react-redux';
import { setSearchText } from '../actions/roadmap';
import Input from './Input';
import InputLabel from './InputLabel';
import InputField from './InputField';

let SearchFeature = ({ dispatch }) => ( // eslint-disable-line import/no-mutable-exports
  <Input className="roadmap__search">
    <InputLabel label="Search" />
    <InputField
      onChange={e => {
        e.preventDefault();
        dispatch(setSearchText(e.target.value.trim()));
      }}
      placeholder="Enter feature name" />
  </Input>
);
SearchFeature.propTypes = {
  dispatch: React.PropTypes.func
};
SearchFeature = connect()(SearchFeature);

export default SearchFeature;
