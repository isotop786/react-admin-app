import React from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu';
import './App.css';
import Dashboard from './secure/Dashboard';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Users from './secure/Users';
import Login from './public/Login';

function App() {
  return (
<div className='App'>
    {/* All Routes are here */}
      <Routes>
        <Route path="/" element={<Dashboard/>}  />
        <Route path="/users" element={<Users/>}  />
        <Route path="/login" element={<Login/>}  />
      </Routes>
     {/* Routes ends here */}

</div>
  );
}

export default App;
