import React from "react";
import './App.css'
import Login from "./component/login/login";
import Register from "./Register/Register"
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
const App = () => {
    return(
        <div className="app">
            <Router>
                <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </div>
        )
} 

export default App
