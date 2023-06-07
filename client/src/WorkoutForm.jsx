import React, { useState } from "react";

const WorkoutForm = () => {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState(0);

  const handleExerciseChange = (event) => {
    setExercise(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit workout data to the server
  };

  return (
    <div>
      <h2>Log Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Exercise:
          <input type="text" value={exercise} onChange={handleExerciseChange} />
        </label>
        <label>
          Duration (minutes):
          <input
            type="number"
            value={duration}
            onChange={handleDurationChange}
          />
        </label>
        <button type="submit">Log Workout</button>
      </form>
    </div>
  );
};

export default WorkoutForm;
