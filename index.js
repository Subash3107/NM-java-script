const x = "subash";
let y = 6;
var z = 6;

console.log(x,y,z);
let string="alpha college of engineering";
console.log(string);

let array = ["apple","mango","grapes","watermelon","fish"];
console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
console.log(array.length);

for(let i=0; i<5; i++)
{
    console.log(array[i]);
}

let array_1 = [1,3,5,7,9];
let array_2 = array_1.map((x)=> x+x);
console.log(array_2);

let arr=array.filter((x)=> x==="fish");
console.log(arr)

let b=array.some((x)=> x==="fish");
console.log(b)