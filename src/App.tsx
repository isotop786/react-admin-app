import React from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu';
import './App.css';
import Dashboard from './secure/dashboard/Dashboard';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Users from './secure/users/Users';
import Login from './public/Login';
import Register from './public/Register';
function App() {
  return (
<div className='App'>
    {/* All Routes are here */}
      <Routes>
        <Route path="/" element={<Dashboard/>}  />
        <Route path="/users" element={<Users/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={<Register/>}  />
      </Routes>
     {/* Routes ends here */}

</div>
  );
}

export default App;
