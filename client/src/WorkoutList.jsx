import React, { useState, useEffect } from "react";

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const response = await fetch("http://localhost:3001/workouts"); // Make a GET request to the backend API endpoint
      const data = await response.json();
      setWorkouts(data);
    } catch (error) {
      console.error("Failed to fetch workouts", error);
    }
  };

  return (
    <div>
      <h2>Logged Workouts</h2>
      {workouts.length > 0 ? (
        <ul>
          {workouts.map((workout) => (
            <li key={workout._id}>
              <strong>Exercise:</strong> {workout.exercise},{" "}
              <strong>Duration:</strong> {workout.duration} minutes
            </li>
          ))}
        </ul>
      ) : (
        <p>No workouts logged yet.</p>
      )}
    </div>
  );
}

export default WorkoutList;
