"use strict";
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 3));
// if you pass string args, while compiling the ts file with command tsc index.ts, it will show error, but still it
// will compile and create a js file
// to avoid this we can use flag noEmitOnError
// command --> tsc --noEmitOnError index.ts
// this will parse the ts file, and find errors, if errors are found, it won't compile and create a new js file
// other way is the tsconfig that we created using command tsc --init
// we permanently set up our typescript file to not compile to js file if there are any errors in typescript code
// it is by default set to false in config file, we need to set it to true
// while we use command tsc index.ts , it's not going to use the config file, since we are compiling only one file
// it's the default behaviour, it uses the defaults by typescript instead of config file
// to use config file, we run tsc -p ./tsconfig.json
// Typescript is just a transpiler that converts the typescript code into vanilla js, also provides some extra
// features that js doesn't provide us, which also includes strict typing
// compilation is needed since browsers/ node understand javascript only
// in ts config file you can also choose the js version that you want , mentioned with key - "target"
// if you have a look - it's es2016
