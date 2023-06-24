import { cars } from "./Counter";

const myArray = ["apple", "dodge", "orange", "texas"];

const myList = cars.map((item) => (
  <p>
    {item}is {myArray}
  </p>
));

function Hello() {
  return myList;
}

export default Hello;
