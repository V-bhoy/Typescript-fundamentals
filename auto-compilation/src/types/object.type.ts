let person = {
    name: "John",
    age: 30,
}
    // ts infers type as object;

    // explicit definition og type object 

let car: {
    color: string;
    brand: string;
};

//car = {} // will throw error for missing properties
car = {
    color: "red",
    brand: "Toyota"
}

// for optional properties add question mark
 
let article: {
    author: string;
    title: string;
    url?: string;
}
// ts doesn't throw an err for missing optional properties