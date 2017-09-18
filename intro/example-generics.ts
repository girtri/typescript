
interface DataMap<T> 
{
	[key: string]: T;
}

const numberMap: DataMap<number> = {foo: 1, bar: 2};
const stringMap: DataMap<string> = {foo: "foo", bar: "bar"};

console.log('numberMap: ' + numberMap.foo);
console.log('stringMap: ' + stringMap.foo);
