const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
// //1. Get array of all names
// const allNames = characters.map(char=>char.name);
// console.log("all names: ", allNames);
// //2. Get array of all heights
// const allHeights = characters.map(char=>char.height);
// console.log("all heights: ", allHeights);
// //3. Get array of objects with just name and height properties
// const allNameHeights = characters.map(char=>{return {name: char.name, height: char.height}});
// console.log("all name heights: ", allNameHeights);
// //4. Get array of all first names
// const allFirstNames = characters.map(char=> char.name.split(" ")[0]);
// console.log("all first names: ", allFirstNames);

//***REDUCE***
//1. Get total mass of all characters
// const totalMass = characters.reduce((prev, current) => {
//     return current.mass + prev;
// }, 0);
// console.log("total mass: ", totalMass);
// //2. Get total height of all characters
// const totalHeight = characters.reduce((prev, current) => {
//     return current.height + prev;
// }, 0);
// console.log("total height: ", totalHeight);
// //3. Get total number of characters by eye color
// const totalCharsByEyeColor = characters.reduce((prev, current) => {
//     if (!Object.keys(prev).includes(current.eye_color)) {
//         prev[current.eye_color] = 1;
//     } else {
//         prev[current.eye_color] += 1
//     }
//     return prev;
// }, {});
// console.log("Total number of characters by eye color: ", totalCharsByEyeColor);
// //4. Get total number of characters in all the character names
// const totalCharsInAllNames = characters.reduce((prev, current) => {
//     prev[current.name] = `${current.name.split(" ").join("").length} characters`;
//     return prev;
// }, {});
// console.log("total number of characters per name: ", totalCharsInAllNames);

//***FILTER***
//1. Get characters with mass greater than 100
// const massGreater100 = characters.filter(char=>char.mass>100);
// console.log("characters with mass greater than 100: ", massGreater100);

// //2. Get characters with height less than 200
// const massLess200 = characters.filter(char=>char.mass<200);
// console.log("characters with mass less than 200: ", massLess200);

// //3. Get all male characters
// const males = characters.filter(char=>char.gender === 'male');
// console.log('males: ', males);

// //4. Get all female characters
// const females = characters.filter(char=>char.gender === 'female');
// console.log('females: ', females);

//***SORT***
// //1. Sort by mass
// const massAsc = characters.sort((a, b) => a.mass - b.mass);
// console.log("sorted by mass ascending: ", massAsc);
// //2. Sort by height

// const heightAsc = characters.sort((a, b) => a.height - b.height);
// console.log("sorted by height ascending: ", heightAsc);
// //3. Sort by name

// const nameAsc = characters.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   return 1;
// });
// console.log("sorted by name ascending: ", nameAsc);
// //4. Sort by gender

// const genderAsc = characters.sort((a) => {
//   if (a.gender === 'female') return -1;
//   return 1;
// });
// console.log("sorted by gender ascending: ", genderAsc);

//***EVERY***
//1. Does every character have blue eyes?
const allBlue = characters.every((char) => char.eye_color === "blue");
console.log("Do all characters have blue eyes? ", allBlue);
//2. Does every character have mass more than 40?
const massOver40 = characters.every((char) => char.mass > 40);
console.log("Do all characters have a mass over 40? ", massOver40);
//3. Is every character shorter than 200?
const heightUnder200 = characters.every(char=>char.height < 200);
console.log("Are all characters shorter than 200? ", heightUnder200);
//4. Is every character male?
console.log("Are all characters male? ", characters.every(char=>char.gender === 'male'));

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
