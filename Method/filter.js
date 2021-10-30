// 1.filter method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter((num) => {
  return num < 250;
});

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});

// 2.findIndex method

const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant";
});

const startsWithS = animals.findIndex((animal) => {
  return animal[0] === "s" ? true : false;
});

// 3.reduce method

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);

  console.log("The value of currentValue: ", currentValue);

  return accumulator + currentValue;

  console.log(newSum);
}, 10);

// 4.practice

const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

const interestingWords = words.filter((word) => {
  return word.length > 5;
});

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);

// 5.

const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
nums.every((num) => num < 0);
// OR nums.some(num => num < 0);
