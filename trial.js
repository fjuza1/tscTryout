// trial.ts
// TypeScript basics for JavaScript developers
// 1. Variable types
var count = 5;
var nm = "Alice";
var isActive = true;
var isGay = false;
var anyValue = "Can be anything"; // 'any' type allows any value
var unknownValue = "Can be anything but safer than 'any'"; // 'unknown' type is safer than 'any'
// Using 'unknown' requires type checking before use
// Example of type checking with 'unknown'
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // Safe to use as a string
}
// 2. Arrays
var numbers = [1, 2, 3];
var names = ["Bob", "Carol"];
// 3. Tuples
var person = ["Dave", 30];
// 4. Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// 5. Functions
function add(a, b) {
    return a + b;
}
// Optional and default parameters
function greet(name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Hello, ".concat(name));
}
var user1 = { id: 1, username: "alice" };
var pt = { x: 10, y: 20 };
// 8. Classes
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log("".concat(this.name, " moved ").concat(distance, "m."));
    };
    return Animal;
}());
var dog = new Animal("Dog");
dog.move(5);
// 9. Generics
function identity(value) {
    return value;
}
var output = identity("hello");
// 10. Type assertions (like casting)
var someValue = "this is a string";
var strLength = someValue.length;
// 11. Union types
function printId(id) {
    console.log("ID:", id);
}
// 12. Null and undefined
var u = undefined;
var n = null;
// 13. Never type (for functions that never return)
function error(message) {
    throw new Error(message);
}
