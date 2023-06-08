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
        <Route path="/" exact element={<WorkoutList/>} />
        <Route path="/workout/add" element={<WorkoutForm/>} />
        <Route path="/goals" element={<GoalForm/>} />
        <Route path="/progress" element={<ProgressChart/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
