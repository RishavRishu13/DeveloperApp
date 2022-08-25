import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch ,useSelector} from 'react-redux'
import {logUserOut} from '../../actions/authActions'
import styled from 'styled-components'
import './Navbar.css'
function Navbar(){

  const styles = {
    Brand: {
      letterSpacing: "12px",
      fontWeight: "650",
      color: "black",
      textDecoration: "none",
      fontSize: "24px"
    },
    NavMenu: {
      fontSize: "18px",
      letterSpacing: "1.42px",
      lineHeight: "1.08",
      padding: "2px 0",
      position: "relative",
      whiteSpace: "nowrap",
      textDecoration: "none",
      color: "black",
      padding: "25px",
    },
    NavMenuContainer: {
      alignItems: "center",
      flexflow: "row nowrap",
      height: "100%",
      margin: "10px",
      padding: "0px",
      position: "relative",
      marginRight: "auto",
      marginLeft: "25px",
      display: "flex",
    }
  }

  const {isAuthenticated,user} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const style = {
    width: '25px',
    marginRight: '5px'
  }
  const authLinks = (
    <div style={styles.NavMenuContainer}>
        <Link style={styles.NavMenu} to="/dashboard">Dashboard</Link>
        <Link style={styles.NavMenu} to="/post">Posts</Link>
    <a style={styles.NavMenu} href="#" onClick = {() => {
      dispatch(logUserOut())
    }}>Logout</a>
  </div>
  )  
  const guestLinks = (
    <div style={styles.NavMenuContainer}>
      <Link style={styles.NavMenu} to="/register">SignUp</Link>
      <Link style={styles.NavMenu} to="/login">Login</Link>
    </div>   
  )

    return(
      <>
            <div className="nav">
                <div className="logo">
                  <Link style={styles.Brand} to="/"><p>SOCIAL</p></Link>
                </div>
                <div className="navMenu">
                <Link style={styles.NavMenu} to="/profiles"> Developers</Link>
                {isAuthenticated ? authLinks : guestLinks }
                </div>
            </div>
      </>
    )
}
export default Navbar;