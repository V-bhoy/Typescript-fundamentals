// bigInt is different from type number

let bigInt = 1243263n;
 // literal syntax with suffix n, will throw err if the tsconfig file contains js version smaller than es2020

bigInt = BigInt(35342) // gives literal followed by n character i.e 35342n
 
// In js , number represents whole number upto 2^53, it unsafe to work with numbers beyond this range

const safeInt = Number.MAX_SAFE_INTEGER // maximum safe integer is a constant provided by js

const s1 = safeInt + 1;
const s2 = safeInt + 2;

console.log(safeInt, s1, s2);

// here js will give same op equal to safeInt for s1 and s2 , that is safeInt = s1 = s2

console.log(s1 > s2) // it will always give true

//Hence to perform operations beyond this range we use bigint
// bigInt cannot have decimal values
// you cannot use built in Math objects with bigInts
// you can perform mathematical and conditional operations with bigInt

const a: bigint = BigInt(23253)
const b: bigint = BigInt(23234346)

console.log(b - a);