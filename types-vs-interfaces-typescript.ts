{type sqr = (a:number) => number;
interface sqr2 {
    a:number
}
const square :sqr = (a) =>a*a
console.log(square(5))
interface Person {
        bodyType:string;
        height:number;
}
interface Person {
    age:number
}
interface Person {
    weight:number;
};
const filip: Person ={
    height: 185/100,
    weight: 65,
    bodyType: "slim",
    age: 18
}
interface VIPBMI extends Person {
    getBMI: (weight:number, height:number) => number;
}
const VIPMember : VIPBMI = {
    getBMI:(weight, height)=> weight / square(height),
    ...filip
}
console.log(VIPMember.getBMI(VIPMember.weight, VIPMember.height));
type MEMBERS =[{name:string, age:number, position:string}];
/*
const members: MEMBERS = [{name: "Filip", age: 30, position: "Developer"}, {name: "Jana", age: 28, position: "Designer"}, {name: "Michal", age: 32, position: "Manager"}, {name: "Petr", age: 29, position: "Tester"}];
console.log(members[11].name);
*/
// TypeScript allows you to extend interfaces, which is useful for adding new properties or methods without modifying the original interface.
// This is particularly useful in large codebases or when working with third-party libraries where you want to add custom functionality without altering the original definitions.
// In contrast, types are more rigid and cannot be extended in the same way. If you need to add properties or methods, you would have to create a new type or use intersection types.
// This flexibility makes interfaces a better choice for defining object shapes that may evolve over time, while types are often used for more static definitions or unions.
// In summary, interfaces are more flexible and extensible, making them suitable for defining object shapes that may change or grow over time, while types are better suited for more static definitions or unions.
// This is a simple example of how to use TypeScript interfaces and types to define the shape of objects and functions, demonstrating the flexibility of interfaces in extending functionality.
// This code defines a square function, a Person interface, and a VIPBMI interface that extends Person.
// It also shows how to create an object of type Person and an object of type VIPBMI, demonstrating the use of interfaces in TypeScript.
// The code also highlights the ability to extend interfaces, which allows for adding new properties or methods without modifying the original interface.
// This is particularly useful in large codebases or when working with third-party libraries where you want to add custom functionality without altering the original definitions.
}