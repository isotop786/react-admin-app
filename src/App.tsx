import React from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu';
import './App.css';
import Dashboard from './secure/dashboard/Dashboard';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './public/Login';
import Register from './public/Register';
import RedirectToDashboard from './secure/RedirectToDashboard';
import { UserEdit,UserCreate, Users } from './secure/users';
import Roles from './secure/roles/Roles';
import Orders from './secure/orders/Orders';
import OrderItems from './secure/orders/OrderItems';
import Products from './secure/products/Products';
import ProductCreate from './secure/products/ProductCreate';
import ProductEdit from './secure/products/ProductEdit';
import Profile from './secure/profile/Profile';
function App() {
  return (
<div className='App'>
    {/* All Routes are here */}
      <Routes>
        <Route path="/" element={<RedirectToDashboard/>}  />
        <Route path="/dashboard" element={<Dashboard/>}  />
        <Route path="/users" element={<Users/>}  />
        <Route path="/users/create" element={<UserCreate/>}  />
        <Route path="/users/:id/edit" element={<UserEdit/>}  />
        <Route path="/roles" element={<Roles/>}  />
        <Route path="/orders" element={<Orders/>}  />
        <Route path="/orders/:id/details" element={<OrderItems/>}  />
        <Route path="/products" element={<Products/>}  />
        <Route path="/products/create" element={<ProductCreate/>}  />
        <Route path="/products/:id/edit" element={<ProductEdit/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={<Register/>}  />
        <Route path="/profile" element={<Profile/>}  />
      </Routes>
     {/* Routes ends here */}

</div>
  );
}

export default App;
