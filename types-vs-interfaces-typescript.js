var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var APP = {
    title: "Types vs Interfaces in TypeScript",
    description: "This is a simple example of how to use TypeScript interfaces and types to define the shape of objects and functions, demonstrating the flexibility of interfaces in extending functionality.",
};
var square = function (a) { return a * a; };
var filip = {
    height: 177 / 100,
    weight: 57,
    bodyType: "slim",
    age: 25,
};
var VIPMember = __assign(__assign({}, filip), { getBMI: function (weight, height) { return weight / square(height); }, getBodyType: function (bmi) {
        if (bmi < 18.5)
            return "Underweight";
        if (bmi < 25)
            return "Normal";
        if (bmi < 30)
            return "Overweight";
        return "Obese";
    } });
filip = __assign(__assign({}, filip), { bodyType: VIPMember.getBodyType(VIPMember.getBMI(VIPMember.weight, VIPMember.height)) });
console.log("updatedFilip", filip);
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
function logLen(arg) {
    console.log(arg.length);
    return arg;
}
logLen(["a", "b", "c"]);
