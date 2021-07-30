import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const me = {
    name: "John",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    },
};
console.log(me);
const greetPerson = (person) => {
    console.log(`Hello ${person.name}`);
};
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
});
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice("Abhishek", "website development", 250);
console.log(invOne.format());
