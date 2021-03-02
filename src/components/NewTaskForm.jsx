import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';

const mapStateToProps = () => {
  const props = {};
  return props;
};

const actionCreators = {
  addTask: actions.addTask,
};

const NewTaskForm = ({ addTask, reset, handleSubmit }) => {
  const onSubmit = (values) => {
    const task = { ...values, id: _.uniqueId(), state: 'active' };
    addTask({ task });
    reset();
  };

  return (
    <>
      <h2>Add task:</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="input-group mt-3"
      >
        <Field
          name="text"
          required
          component="input"
          type="text"
          className="form-control"
        />
        <input
          type="submit"
          value="Add"
          className="input-group-text"
        />
      </form>
    </>
  );
};

const ConnectedNewTaskForm = connect(mapStateToProps, actionCreators)(NewTaskForm);
export default reduxForm({
  form: 'newTask',
})(ConnectedNewTaskForm);
