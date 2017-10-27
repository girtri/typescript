
let arr1: string[];

// index signature per creare un array di stringhe
interface StringArray {
	[index: number]: string;
}
const arr: StringArray = [ "one", "two", "tree" ];

// plain objects
interface MyObj {
	foo: string;
	bar: number;
}
let obj1: MyObj;

let obj2: { foo: string, bar: number };

function request( options: { uri: string, method: string } ): void {
	console.log("op: %s, met: %s", options.uri, options.method);
}

let opObj = {uri: "mio uri", method: "nomeMetodo"};
request(opObj);

// object with read-only members
interface RGB {
	readonly red: number;
	readonly green: number;
	readonly blue: number;
}
let green: RGB = { red: 0, green: 128, blue: 0 };

// object of arbitrary properties
/*
interface DataMap {
	[key: string]: any;
}
const map: DataMap = { foo: "foo", bar: "bar" };
*/