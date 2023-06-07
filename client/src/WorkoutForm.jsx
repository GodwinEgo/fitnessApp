import React, { useState } from "react";

function WorkoutForm() {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workoutData = {
      exercise,
      duration: parseInt(duration),
    };

    try {
      const response = await fetch("http://localhost:3001s/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workoutData),
      });

      if (response.ok) {
        console.log("Workout data submitted successfully");
        // Handle successful submission (e.g., display a success message, update the UI)
      } else {
        console.error("Failed to submit workout data:", response.statusText);
        // Handle error response (e.g., display an error message)
      }
    } catch (error) {
      console.error("Failed to submit workout data:", error);
      // Handle network or other errors (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Exercise:
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </label>
      <br />
      <label>
        Duration (minutes):
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default WorkoutForm;
