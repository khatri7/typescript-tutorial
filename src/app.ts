import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const me: IsPerson = {
//   name: "John",
//   age: 30,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     return amount;
//   },
// };

// console.log(me);

// const greetPerson = (person: IsPerson) => {
//   console.log(`Hello ${person.name}`);
// };

// const anchor = document.querySelector("a")!;

// console.log(anchor.href);

const addUID = <T extends object>(object: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...object, uid };
};

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);

  list.render(doc, type.value, "end");
});

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("mario", "plumbing work", 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice("Abhishek", "website development", 250);

// console.log(invOne.format());

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const resourceOne: Resource<string> = {
  uid: 1,
  resourceName: "One",
  data: "string data",
};

const resourceTwo: Resource<object> = {
  uid: 2,
  resourceName: "Two",
  data: { name: "abhishek" },
};
