import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import about from './pages/about';
import devlog from './pages/devlog'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={about} />
          <Route path="/devlog" exact Component={devlog} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
