import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/stack_logo.png';
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import menuIcon from '../../assets/menu.png'


import {NavLink} from 'react-router-dom';
import Globe from '../../assets/globe-2.png'
import './Menu.css';

import "./Navbar.css"
import { setCurrentUser } from '../../actions/currentUser';
import { useState } from 'react';

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  var user = useSelector((state) => (state.currentUserReducer))
  
  const [menuBtn, setMenuBtn] = useState(false)

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [user?.token, dispatch]);

  const handleMenu = () => {
    setMenuBtn(!menuBtn)
    console.log(menuBtn)
  }




  return (
    <div>
      {
      menuBtn && <div className='left-sidebar-menu'>
            <nav className='side-nav-menu'>
                <NavLink to="/" className='side-nav-links-menu' activeClassName='active' onClick={()=>{setMenuBtn(!menuBtn)}}>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div-menu'>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className='side-nav-links-menu' onClick={()=>{setMenuBtn(!menuBtn)}} activeClassNmae='active' style={{paddingLeft:"40px"}}>
                        <img src = {Globe} alt = "Globe"/>
                        <p style={{paddingLeft: "10px"}}>Questions</p>
                    </NavLink>
                    <NavLink to="/Tags" className='side-nav-links-menu' onClick={()=>{setMenuBtn(!menuBtn)}} activeClassNmae='active' style={{paddingLeft:"40px"}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to="/Users" className='side-nav-links-menu' onClick={()=>{setMenuBtn(!menuBtn)}} activeClassNmae='active' style={{paddingLeft:"40px"}}>
                        <p>Users</p>
                    </NavLink>
                    <div></div>
                    <Link to="/" className='side-nav-links-menu' onClick={()=>{setMenuBtn(!menuBtn)}}  style={{paddingLeft:"40px"}}>
                        <p>About</p>
                    </Link>
                    <Link to="/" className='side-nav-links-menu' onClick={()=>{setMenuBtn(!menuBtn)}}  style={{paddingLeft:"40px"}}>
                        <p>Products</p>
                    </Link>
                    <Link to="/" className='side-nav-links-menu' onClick={()=>{setMenuBtn(!menuBtn)}}  style={{paddingLeft:"40px"}}>
                        <p>For Teams</p>
                    </Link>
                </div>
            </nav>
        </div>
      }
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to="/" className='nav-logo'>
          <img src={logo} alt="logo" />
        </Link>
        <div className='icon-bars' onClick={handleMenu}><img src={menuIcon} alt="pen" width="13" /></div>
        <div className='icon-cancel'><span className='fas fa-times'></span></div>
        <div className='nav-btns'>
          <li><Link to="/" className='nav-item nav-btn' >About</Link></li>
          <li><Link to="/" className='nav-item nav-btn' >Products</Link></li>
          <li><Link to="/" className='nav-item nav-btn' >For Teams</Link></li>
        </div>
        <form>
          <input type="text" placeholder='Search' />
          <img src={search} alt="search" className='search-icon' />
        </form>
        {user == null ?
          <Link to="/Auth" className='nav-item nav-links'>Log in</Link> :
          <>
            <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color="white" ><Link to={`/Users/${user.result._id}`} style={{ color: "white", textDecoration: 'none' }}>{user.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
          </>
        }
      </div>
    </nav>
    </div>
  )
}

export default Navbar