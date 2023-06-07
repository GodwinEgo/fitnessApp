import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return <header>
    <h1>FITNESS TRACKER</h1>
    <nav>
        <ul>
            <li>
                <Link to="/">Workouts</Link>
            </li>
            <li>
                <Link to="/workout/add">Log Workout</Link>
            </li>
            <li>
                <Link to="/goals">Set Goals</Link>
            </li>
            <li>
                <Link to="/progress">Progress</Link>
            </li>
        </ul>
    </nav>
  </header>;
};

export default Header;
