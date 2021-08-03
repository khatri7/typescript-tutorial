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
const addUID = (object) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, object), { uid });
};
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
const resourceOne = {
    uid: 1,
    resourceName: "One",
    data: "string data",
};
const resourceTwo = {
    uid: 2,
    resourceName: "Two",
    data: { name: "abhishek" },
};
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 1] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 2] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 4] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 5] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 3,
    resourceType: ResourceType.AUTHOR,
    data: { name: "abhishek" },
};
console.log(docThree);
