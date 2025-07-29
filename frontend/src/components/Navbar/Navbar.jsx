import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  //create a state variable to manage the active menu item
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  //using useNavigate hook to navigate to different pages
  const navigate=useNavigate();
  
  //function to handle navigation to home page sections
  const handleSectionNavigation = (sectionId, menuName) => {
    setMenu(menuName);
    
    // If we're already on home page, just scroll to section
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure page loads
    }
  };
  
  //logout function to clear the token and redirect to home
  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }


  return (
    <div className='navbar'>
      <Link to={'/'}><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
        {/*using the state variables */}
        {/* applying the active classnames intially to home which changes to different one on click */}
        {/* link to navigate to different section of page */}
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <button 
          onClick={() => handleSectionNavigation('explore-menu', 'menu')} 
          className={menu === "menu" ? "active navbar-link-button" : "navbar-link-button"}
        >
          menu
        </button>
        <button 
          onClick={() => handleSectionNavigation('app-download', 'mobile-app')} 
          className={menu === "mobile-app" ? "active navbar-link-button" : "navbar-link-button"}
        >
          mobile-app
        </button>
        <button 
          onClick={() => handleSectionNavigation('footer', 'contact us')} 
          className={menu === "contact us" ? "active navbar-link-button" : "navbar-link-button"}
        >
          contact us
        </button>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          {/* this dot indicates items in the basket */}
          {/* if getcart amount is zero then display a none */}
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {/* onClick event to show the login form linking the setShowLogin state variable */}
        {/* if token is there then show the profile icon with dropdown menu*/}
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}
      </div>
    </div>
  )
}

export default Navbar



