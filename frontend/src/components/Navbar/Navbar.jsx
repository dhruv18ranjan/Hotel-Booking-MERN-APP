import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user,loading, error, dispatch } = useContext(AuthContext);
  const handleClick=(e)=>{
    e.preventDefault();
    try{

      dispatch({type:"LOGOUT"});
    }
    catch(err){
      return err;
    }
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h2 className="logo" >Alpha Booking</h2>
        </Link>
        {user ? <div className="logoutContainer">
          <h3> {user.username} </h3>
          <button className="navButton" onClick={handleClick}>Logout</button>
        </div>: (
          <div className="navItems">   
          <Link to="/signup">

            <button className="navButton">Register</button>
          </Link>
          <Link to="/login">

            <button className="navButton">Login</button>
          </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;