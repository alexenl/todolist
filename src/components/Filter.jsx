import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const filters = [['all', 'All Tasks'], ['active', 'Active Tasks'], ['finished', 'Finished Tasks']];

const mapStateToProps = (state) => {
  const { tasks: { currentFilterName } } = state;
  return { currentFilterName };
};

const actionCreators = {
  setTasksFilter: actions.setTasksFilter,
};

const Filter = ({
  setTasksFilter,
  currentFilterName,
}) => {
  const handleSetTasksFilter = (filterName) => () => {
    setTasksFilter({ filterName });
  };

  const renderFilter = ([state, name]) => {
    if (currentFilterName === state) {
      return name;
    }
    return (
      <button
        type="button"
        key={state}
        className="btn btn-link border-0 p-0"
        onClick={handleSetTasksFilter(state)}
      >
        {name}
      </button>
    );
  };

  return (
    <div className="mt-3 d-flex justify-content-around">
      {filters.map(renderFilter)}
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Filter);
