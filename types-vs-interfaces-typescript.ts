// Types and Interfaces
type body = string;
type description = string;

interface AppDetails {
  title: string;
  description: description;
}

const APP: Readonly<AppDetails> = {
  title: "Types vs Interfaces in TypeScript",
  description:
    "This is a simple example of how to use TypeScript interfaces and types to define the shape of objects and functions, demonstrating the flexibility of interfaces in extending functionality.",
};

// APP.title = "New Title"; // This will cause an error because APP is readonly

type sqr = (a: number) => number;

const square: sqr = (a) => a * a;

interface Person {
  bodyType?: string;
  height: number;
  age: number;
  weight: number;
}

let filip: Person = {
  height: 177 / 100,
  weight: 57,
  bodyType: "slim",
  age: 25,
};

interface VIPBMI extends Person {
  getBMI: (weight: number, height: number) => number;
  getBodyType: (bmi: ReturnType<VIPBMI["getBMI"]>) => body;
}

const VIPMember: VIPBMI = {
  ...filip,
  getBMI: (weight, height) => weight / square(height),
  getBodyType: (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  },
};

filip = {
  ...filip,
  bodyType: VIPMember.getBodyType(
    VIPMember.getBMI(VIPMember.weight, VIPMember.height)
  ),
};

console.log("updatedFilip", filip);

// Utility Types
type k = ReturnType<sqr>;
type p = ReturnType<typeof square>;

// Indexed Access Types
type vipBMI = ReturnType<VIPBMI["getBMI"]>;
type vipType = ReturnType<VIPBMI["getBodyType"]>;

// Conditional Types
type Example1<T> = T extends VIPBMI ? string : number;

type MEMBERS = [{ name: string; age: number; position: string }];
/*
const members: MEMBERS = [
  { name: "Filip", age: 30, position: "Developer" },
  { name: "Jana", age: 28, position: "Designer" },
  { name: "Michal", age: 32, position: "Manager" },
  { name: "Petr", age: 29, position: "Tester" },
];
console.log(members[11].name);
*/

// Generic Function
function logLen<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

logLen(["a", "b", "c"]);