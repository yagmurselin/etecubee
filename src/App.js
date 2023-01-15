import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import ExerciseList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateCompany from "./components/create-company";
import Login from "./Login";

function App() {
  return (
    <Router>
      {" "}
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/list" element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/company" element={<CreateCompany />} />
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
