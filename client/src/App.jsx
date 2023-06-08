import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";
import GoalForm from "./GoalForm";
import ProgressChart from "./ProgressChart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={<WorkoutList/>} />
        <Route path="/workout/add" component={<WorkoutForm/>} />
        <Route path="/goals" component={<GoalForm/>} />
        <Route path="/progress" component={<ProgressChart/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
