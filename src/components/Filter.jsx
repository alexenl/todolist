import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import cn from 'classnames';

const filters = [['all', 'All Tasks'], ['active', 'Active Tasks'], ['finished', 'Finished Tasks']];

const mapStateToProps = ({ tasks: { currentFilterName } }) => ({
  currentFilterName,
});

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
    const isActive = currentFilterName === state;
    const buttonClasses = cn({
      'btn': true,
      'btn-outline-primary': !isActive,
      'btn-primary': isActive,
    });

    return (
      <button
        type="button"
        key={state}
        className={buttonClasses}
        onClick={handleSetTasksFilter(state)}
      >
        {name}
      </button>
    );
  };

  return (
    <div className="mt-4 d-flex btn-group">
      {filters.map(renderFilter)}
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Filter);
