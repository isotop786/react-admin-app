import React from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu';
import './App.css';
import Dashboard from './secure/Dashboard';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Users from './secure/Users';

function App() {
  return (
<div className='App'>
    <Nav/>
<div className="container-fluid">
  <div className="row">

    {/* Menu */}
    <Menu/>
    {/* Menu Ends*/}      

    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-4">
    {/* All Routes are here */}
      <Routes>
        <Route path="/" element={<Dashboard/>}  />
        <Route path="/users" element={<Users/>}  />
      </Routes>
     {/* Routes ends here */}
    </main>
  </div>
</div>
</div>
  );
}

export default App;
