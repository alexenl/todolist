import React from 'react';
import NewTaskForm from './NewTaskForm.jsx';
import Tasks from './Tasks.jsx';

const App = () => (
  <div className="container">
    <h1 className="mb-5 mt-3">TodoList</h1>
    <NewTaskForm />
    <Tasks />
  </div>
);
export default App;
