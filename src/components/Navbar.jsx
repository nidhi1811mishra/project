import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import useAppContext from '../AppContext'
const Navbar = () => {
  const { loggedin, logout } = useAppContext();
  const showOption = () => {
    if (loggedin) {
      return (
        <li className='nav-item'>
          <button className='btn btn-danger' onClick={logout}>Logout</button>
        </li>
      )
    } else {
      return <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </>
    }
  }
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <div className='nav_border'>
          <img className='logo' src="https://cdn.vectorstock.com/i/preview-1x/70/16/initial-hc-antique-retro-luxury-victorian-vector-35837016.jpg" alt="" />
          {/* <a className="navbar-brand" href="#">
      HomeyCured
    </a> */}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <b>HomeyCured</b>
              </NavLink>

            </li>
            {/* <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login 
          </NavLink>
        </li> */}
            {/* <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Signup 
          </NavLink>
        </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/addfurniture">
                Add furniture
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/furniturelist">
                Furniture List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/managefurniture">
                Manage Furniture
              </NavLink>
            </li>

            {/* <li className="nav-item">
          <NavLink className="nav-link" to="/FurnitureDetails">
            furniture Details 
          </NavLink>
        </li> */}


            {showOption()}
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar