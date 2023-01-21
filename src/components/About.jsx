import React,{ useState } from "react";
import brand from "./kindpng.png";
import './css/registerCheck.css';
const About = () => {

  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  return (
  <div>
    <div className="top">
    <img src={brand} id="i" alt="brand" />
    </div>
    <div id="formHome">
        <h1>Create your account </h1>
        <form onSubmit={handleSubmit} >
        <div className="input">
        <input type="text" placeholder="Name" name="username" value={inputs.username || ""} onChange={handleChange} />
       </div>
        <div className="input">
        <input type="text" placeholder="Mobile or email" name="email" value={inputs.email || ""} onChange={handleChange}/>
        </div>
        <input type="submit"  />
        </form> 
    </div>
   
    </div>
  );
};
  
export default About;