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
// * readonly type and omit example for improved TypeScript understanding
// readonly type
type readCarBrands = {
    readonly brand: string,
    readonly model: string,
    readonly year: number
}
// omits
type removeYear = Omit<readCarBrands, 'year'>; // omitting year property
const car: removeYear = {
    brand: "Toyota", model: "Corolla" // 'year' property is omitted and cannot be set, causes error if attempted year: 2020
}
console.log(car.brand, car.model); // Output: Toyota Corolla
// 2. Arrays
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Bob", "Carol"];

// 3. Tuples
let person: [string, number] = ["Dave", 30];

// 4. Enums
enum appColor{
    Red = 'rgba(255,0,0,1)',
    Green = 'rgba(0,255,0,1)',
    Blue = 'rgba(0,0,255,1)',
    Violet = 'rgba(238,130,238,1)',
    Yellow = 'rgba(255,255,0,1)',
    Orange = 'rgba(255,165,0,1)',
    Pink = 'rgba(255,192,203,1)',
    Cyan = 'rgba(0,255,255,1)',
    Brown = 'rgba(165,42,42,1)',
    Black = 'rgba(0,0,0,1)',
    White = 'rgba(255,255,255,1)',
    Gray = 'rgba(128,128,128,1)',
    LightGray = 'rgba(211,211,211,1)',
    DarkGray = 'rgba(169,169,169,1)',
    Gold = 'rgba(255,215,0,1)',
    Silver = 'rgba(192,192,192,1)',
    Bronze = 'rgba(205,127,50,1)',
    Magenta = 'rgba(255,0,255,1)',
    Lime = 'rgba(0,255,0,1)',
    Teal = 'rgba(0,128,128,1)',
    Indigo = 'rgba(75,0,130,1)',
    Coral = 'rgba(255,127,80,1)',
    Lavender = 'rgba(230,230,250,1)',
    Peach = 'rgba(255,218,185,1)',
    Mint = 'rgba(189,252,201,1)',
    Navy = 'rgba(0,0,128,1)',
    Olive = 'rgba(128,128,0,1)',
    Maroon = 'rgba(128,0,0,1)',
    SkyBlue = 'rgba(135,206,235,1)',
    Salmon = 'rgba(250,128,114,1)',
    Plum = 'rgba(221,160,221,1)',
    Khaki = 'rgba(240,230,140,1)',
    Chocolate = 'rgba(210,105,30,1)',
    Turquoise = 'rgba(64,224,208,1)',
    Crimson = 'rgba(220,20,60,1)',
    GoldFoil = 'rgba(255,223,0,1)',
    LightBlue = 'rgba(173,216,230,1)',
    DarkBlue = 'rgba(0,0,139,1)',
    LightGreen = 'rgba(144,238,144,1)',
    DarkGreen = 'rgba(0,100,0,1)',
    LightPink = 'rgba(255,182,193,1)',
    DarkRed = 'rgba(139,0,0,1)',
    LightPurple = 'rgba(216,191,216,1)',
    DarkPurple = 'rgba(75,0,130,1)',
    LightOrange = 'rgba(255,165,0,1)',
    DarkOrange = 'rgba(255,140,0,1)',
    LightYellow = 'rgba(255,255,224,1)',
    DarkYellow = 'rgba(255,215,0,1)',
    LightGrayBlue = 'rgba(211,211,255,1)',
    DarkGrayBlue = 'rgba(100,149,237,1)',
    LightGrayGreen = 'rgba(144,238,144,1)',
    DarkGrayGreen = 'rgba(0,128,0,1)',
    LightGrayRed = 'rgba(255,160,122,1)',
    DarkGrayRed = 'rgba(178,34,34,1)',
}
let c: appColor = appColor.Green;
console.log(c)


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
type Size = "xs" | "s" | "m" | "l" | "xl"; "xxl";"xxxl"