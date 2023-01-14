import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateCompany from "./components/create-company";

function App() {
  return (
    <Router>
      {" "}
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/company" element={<CreateCompany />} />
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
