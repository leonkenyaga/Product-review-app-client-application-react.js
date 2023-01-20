import React from "react";
import brand from "./kindpng.png";
import './style.css';
import './home.css';
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
  
const Home = () => {
  return (
    <div>
       <div class="top">
       <img src={brand} id="i" alt="brand" />
        <i class=""></i>
    </div>
    <div id="pagehome">
        <h1>See other users experience around the world right now.</h1>
        
         <button>
         <Link to="/about">Create an account</Link>
        </button>
  
    </div>
    <div class="footer">
        <p>Already have an account?Log in</p>
    </div>
    </div>
  );
};
  
export default Home;

<ul>
<li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
        {/* Endpoint to route to Home component */}
        <Link to="/">Create an account</Link>
      </li>
      </ul>
        
    