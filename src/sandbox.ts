type person = { name: string; age: number };

let logDetails: (obj: person) => string;

logDetails = (ninja: person) => {
  return `${ninja.name} is ${ninja.age} years old`;
};
