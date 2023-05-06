// function multiplyByTwo(num: unknown) {
//     return num * 2;
// }

//multiplyByTwo(2) ---> 4
//multiplyByTwo("happy")---> NaN

// in this case it doesn't know what would be multiplied by 2, and what would be the output.
// difference between unknown and any
// in case of any, ts wont throw error and not bother about output
// in case of unknown, ts will throw error and complain about output

function multiplyByTwo(num: unknown) {
    if (typeof (num) === "number") {
          return num * 2;
    }
    return "Please provide a number";
}

// here we are confirming ts what would be the type of arg and what would be the o/p, hence ts is not throwing any error in this case even if the arg is of type unknown

// Here ts forces you to check the type of particular value, before you use it in your program.
// This type is useful when you do not know that actual value of the variable while coding the program and later 
// you can test it before applying any operation on that particular value