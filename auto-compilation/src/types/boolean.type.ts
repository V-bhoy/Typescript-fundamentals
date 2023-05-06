// boolean --> values with either true or false

let flag: boolean = true;

flag = false;

flag = 1 > 0

flag = typeof ("a") === "string";

//flag = {} //throws error
//flag = 123 // throws error

// you cannot assign undefined or null to type boolean, it will throw error because ts does not consider null or undefined as falsy values

//flag = undefined;
//flag = null;