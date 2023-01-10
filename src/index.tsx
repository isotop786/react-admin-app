import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './secure/dashboard/Dashboard';
import Users from './secure/users/Users';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store'

axios.defaults.baseURL = 'http://165.227.33.145:8000/api/';
// axios.defaults.baseURL = 'https://django-admin-app.herokuapp.com/api/';
// axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.withCredentials = true;
// axios.defaults.



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App/>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
