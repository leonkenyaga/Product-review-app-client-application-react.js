import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <br />
      <ul>
       
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/contact">ContactUs Page</Link>
        </li>
        
      </ul>
    </div>
  );
};
  
export default About;