// Other than this, typescript tries to infer the type of the variable based on the value assigned to it
// this is called type inference

let str1 = "abc";
// here ts implicitly infers thr type as string, if you try to assign number to this variable, err is thrown

let num1 = 20; // type inference is used here

//hence we can define types explicitly only when its needed instead of declaring types for every variable making the code redundant

//In this example, we need to explicitly define type

let res; // infers type any which we don't want
let res1: number; // now we know the assigned value would be of type number