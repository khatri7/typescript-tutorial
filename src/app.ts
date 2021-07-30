import { Invoice } from "./classes/Invoice.js";

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "John",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    return amount;
  },
};

console.log(me);

const greetPerson = (person: IsPerson) => {
  console.log(`Hello ${person.name}`);
};

// const anchor = document.querySelector("a")!;

// console.log(anchor.href);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.value,
    amount.valueAsNumber
  );
});

const invOne = new Invoice("Abhishek", "website development", 250);

console.log(invOne.format());
