import React from "react";
import { Route, Router } from "react-router-dom";
import Header from './Header.jsx';
import WorkoutForm from './WorkoutForm.jsx';
import WorkoutList from './WorkoutList.jsx';
import GoalForm from './GoalForm.jsx';
import ProgressChart from './ProgressChart.jsx';

const App = () => {
  return <Router>
    <div>
      <Header/>
      <Route path="/" Component={<WorkoutList/>} />
      <Route path="/workout/add" Component={<WorkoutForm/>} />
      <Route path="/goals" Component={<GoalForm/>} />
      <Route path="/progress" Component={<ProgressChart/>} />
    </div>
  </Router>;
};

export default App;
