//class Car{
   // constructor(model){
        //this.group=model;
  //  }
//}
//var cars;
//const api_url = "http://localhost:4000/api/getAllUsers";
//"https://api.wheretheiss.at/v1/satellites/25544"
//"http://localhost:4000/api/getAllUsers"
//async function getISS() {
  // const response = await fetch (api_url);
    //const data = await response.json();
    //cars=data;
    //console.log(cars);
//}

//getISS();

//const mycar= new Car("volkswagen"); 
//const cars=<h1>{mycar.group}</h1>
//var cars="volkswagen hullingam";

//const gari=<h1>{cars}</h1>
//function Big(){

    //return gari;

//}

//export default Big;

//export {cars}
import { Outlet, Link } from "react-router-dom";

const Counter = () => {
  return (
    <>
      

      <Outlet />
    </>
  )
};

export default Counter;
<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>