import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/dashboard">
              <span data-feather="home"></span>
              Dashboard <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              <span data-feather="file"></span>
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/roles">
              <span data-feather="file"></span>
              Roles
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file"></span>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Products
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
    )
}

export default Menu;