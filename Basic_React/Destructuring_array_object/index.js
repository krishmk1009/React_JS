// animal data is for demo practice

// import animals from "./data";
// // console.log(animals);

// const [cat, dog] = animals;
// // console.log(dog);

// const { name, sound, breed = "lab" } = dog;
// // console.log(breed);
// // console.log(dog);
// const {
//   feed: { water, food }
// } = dog;
// console.log(food);


// Actual code ....
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

//for honda
const [honda, tesla] = cars;
const { model: modelOne } = honda;
const {
  speedStats: { topSpeed: hondaTopSpeed }} = honda;
const {
  coloursByPopularity: [hondaColor]
} = honda;

//for tesla
const { model: modelTwo } = tesla;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
const {
  coloursByPopularity: [teslaColor]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Colour</th>
    </tr>
    <tr>
      <td>{modelTwo}</td>
      <td>{teslaTopSpeed}</td>
      <td>{hondaColor}</td>
    </tr>
    <tr>
      <td>{modelOne}</td>
      <td>{hondaTopSpeed}</td>
      <td>{teslaColor}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
