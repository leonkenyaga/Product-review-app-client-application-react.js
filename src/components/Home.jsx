import React from "react";
import brand from "./kindpng.png";
import './css/style.css';
import './css/home.css';
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
  
const Home = () => {
  return (
    <div>
       <div className="top">
       <img src={brand} id="i" alt="brand" />
        <i class=""></i>
    </div>
    <div id="pagehome">
        <h1>See other users experience around the world right now.</h1>
        
         <button>
         <Link to="/signIn">Create an account</Link>
        </button>
  
    </div>
    </div>
  );
};
  
export default Home;
        
    