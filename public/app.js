import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
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
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
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
