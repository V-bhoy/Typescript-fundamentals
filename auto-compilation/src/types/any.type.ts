let firstName: any = "Mark";

firstName = 23;

firstName = [1, 2, 3, 4];

firstName = {
    a: "b",
    c: "d"
}

// type - any
// that's the default type in javascript, the whole point of using typescript is avoiding any type
// typescript will throw an error if no type is defined, we can override this in config file by setting noImplicitAny to false, by default it is true when strict is true.