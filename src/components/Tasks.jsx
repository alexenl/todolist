import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
// import { filteredTasksSelector } from '../selectors/index.js';

const mapStateToProps = (state) => {
  const { tasks: { byId, allIds } } = state;
  const tasks = allIds.map((id) => byId[id]);
  return { tasks };
};

const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

const Tasks = ({ removeTask, toggleTaskState, tasks }) => {
  const handleRemoveTask = (id) => () => {
    removeTask({ id });
  };

  const handleToggleTaskState = (id) => () => {
    toggleTaskState({ id });
  };

  if (tasks.length === 0) {
    return null;
  }

  return (
    <>
      <h2 className="mt-4">Tasks:</h2>
      <ul className="list-unstyled mt-3">
        {tasks.map(({ id, text, state }) => {
          const isActive = state === 'active';
          return (
            <li key={id} className="d-flex list-group-item">
              <div className="form-check flex-grow-1">
                <input
                  type="checkbox"
                  checked={!isActive}
                  onChange={handleToggleTaskState(id)}
                  className="form-check-input"
                  id={`task-${id}`}
                  />
                <label
                  htmlFor={`task-${id}`}
                  className="form-check-label"
                >
                  {isActive ? text : <s>{text}</s>}
                </label>
              </div>
              <button
                type="button"
                className="btn-close"
                onClick={handleRemoveTask(id)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, actionCreators)(Tasks);
