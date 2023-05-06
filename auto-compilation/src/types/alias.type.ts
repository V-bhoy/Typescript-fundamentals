// created using type keyword
// helpful for reusing the custom type wherever needed

type Article = {
    author: string;
    title: string;
    content: string;
    url?: string;
}

const blog: Article = {
    author: 'John',
    title: 'Article title',
    content: 'abc'
}

// union types - combination of two types

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
  color: string;
};

type Cat = {
  name: string;
  purrs: boolean;
  color: string;
};

type DogAndCatUnion = Dog | Cat; // includes all properties of either Dog or Cat or all properties common together, err is thrown otherwise

const dog: DogAndCatUnion = {  // doesn't throw err 
    name: "Max",
    barks: true,
    wags: true,
    color: 'white'
};

const cat: DogAndCatUnion = {
    name: "John",
    purrs: true,
    color: 'black'
}

const hybrid: DogAndCatUnion = {
    name: "Max",
    barks: true,
    purrs: true,
    color: 'white'
}

//union type with primitive types

function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return a.toString() + b.toString();
}

// any arg used in this function apart from string and number , will throw an error

// intersection of alias --> common properties along with unique properties

type Hybrid = Dog & Cat; 
// this will have 2 common properties and 3 unique properties to each one of them

const animal: Hybrid = { // throws err if any of 5 properties is missing
    name: "Max",
    color: 'white',
    barks: true,
    wags: true,
    purrs: true,
}

// Index Signatures
// helpful when we dont know the keys and values for object but we do know the pattern

type AirPlane = {
    flightNumber: string;
    airplaneModel: string;
    dateOfDeparture: string;
    timeOfDeparture: string;
    from: string;
    to: string;
    seats: {
        [key: string]: string; // this is index signature
        orderProperty: string; // you cant assign type number here since value has type string in index signature, need to
                              // declare type accordingly
    }
}
// the index signature states that the object can have number of properties as long as the key type is string and value type is also string, one object can only have one index signature
// you can also use union type in index signature 
// ex. [key: string|number]: string|number;

const airPlane: AirPlane = {
    flightNumber: 'sg102',
    airplaneModel: 'A380',
    dateOfDeparture: '1/2/2023',
    timeOfDeparture: '1:00 AM',
    from: 'Delhi',
    to: 'Bangalore',
    seats: {
        orderProperty: 'alphabetical',
        "10A": "Mark",
        "10B": "Sam",
    }
}