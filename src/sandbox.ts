//explicit type
let fullName: string;
let age: number;
let isLoggedIn: boolean;

//array
let ninjas: string[];

//array with mixed types - union types
let mixed: (string | number)[];

//union types can be used for normal variables as well
let uid: string | number;

//objects
let obj1: object;
obj1 = { name: "Abhishek", age: 20 };
obj1 = [];

let obj2: {
  name: string;
  age: number;
};
obj2 = { name: "Abhishek", age: 20 };
