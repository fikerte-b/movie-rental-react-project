import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



function Navbar() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onClickHandler =(event)=>{
        event.preventDefault();
        navigate("/login");
        alert("Successfully Logged out!");
        
    }

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Endeset Movie Rental</span>
        {/* don't need to work on this */}
         {/* <div className="search"> 
        <div className="searchMovie">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            <input 
            type="text"
            placeholder="search movies........."
            className="searchInput"
            />
             </div> 
             <div className="searchButton"> 
                <button className="headerbtn">Search</button>
            </div> 
            </div> */}
        
    {user?  <button className="navButton" onClick ={onClickHandler}>Sign Out</button>: <div className="navItems">
        <button className="navButton">Sign Up</button>
        <button className="navButton" >Sign In</button>
    </div> }
    </div>
    </div>
  );
}

export default Navbar;
