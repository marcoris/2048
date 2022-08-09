import React from 'react';
import './assets/scss/_variables.scss';
import './App.scss';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {About} from "./pages/About";
import {ErrorPage} from "./pages/ErrorPage";
import Home from "./pages/Home";
import {Highscores} from "./pages/Highscores";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="header">
            <nav className="mb-4">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/highscores">Highscores</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/highscores" element={<Highscores />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
