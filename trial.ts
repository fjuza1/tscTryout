// trial.ts
// TypeScript basics for JavaScript developers

// 1. Variable types
let count: number = 5;
let nm: string = "Alice";
let isActive: boolean = true;
let isGay:boolean = false;
let anyValue: any = "Can be anything"; // 'any' type allows any value
let unknownValue: unknown = "Can be anything but safer than 'any'"; // 'unknown' type is safer than 'any'
// Using 'unknown' requires type checking before use
// Example of type checking with 'unknown'
if (typeof unknownValue === "string") { 
    console.log(unknownValue.toUpperCase()); // Safe to use as a string
}

// 2. Arrays
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Bob", "Carol"];

// 3. Tuples
let person: [string, number] = ["Dave", 30];

// 4. Enums
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;

// 5. Functions
function add(a: number, b: number): number {
    return a + b;
}

// Optional and default parameters
function greet(name: string = "Guest"): void {
    console.log(`Hello, ${name}`);
}

// 6. Interfaces
interface User {
    id: number;
    username: string;
    isAdmin?: boolean; // optional property
}

const user1: User = { id: 1, username: "alice" };

// 7. Type aliases
type Point = { x: number; y: number };
const pt: Point = { x: 10, y: 20 };

// 8. Classes
class Animal {
    constructor(public name: string) {}
    move(distance: number): void {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

const dog = new Animal("Dog");
dog.move(5);

// 9. Generics
function identity<T>(value: T): T {
    return value;
}
let output = identity<string>("hello");

// 10. Type assertions (like casting)
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// 11. Union types
function printId(id: number | string) {
    console.log("ID:", id);
}

// 12. Null and undefined
let u: undefined = undefined;
let n: null = null;

// 13. Never type (for functions that never return)
function error(message: string): never {
    throw new Error(message);
}