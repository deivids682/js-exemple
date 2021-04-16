import { Tesla } from "./Tesla.js";
import { BMW } from "./BMW.js";
import { Helppers } from "./Helppers.js";

const bmw = new BMW(BMW.MODEL, "Melns", "530", "BENDZINS");
const bmw2 = new BMW(BMW.MODEL, "Sarkans", "318", "BENDZINS");
const tesla = new Tesla(Tesla.MODEL, "Balta", "Model S", "ELEKTRO");

bmw.izmeshi();
bmw.skana();
bmw2.skana();
bmw2.izmeshi();
tesla.ladet();

const person = {
  fullName: function (city, house, index) {
    return this.firstName + " " + this.lastName + " " + (city !== undefined ? city : "") + " " +  house + " " + index;
  },
};

const apply = person.fullName.apply({ firstName: "Davis", lastName: "Iljins" }, [
  "Riga",
  "2",
  12
]);
console.log(apply);

const call = person.fullName.call({ firstName: "Davis", lastName: "Iljins" });


console.log(call);

const target = { a: 1, b: 3, d: 5 };
const source = { Davis: 4, Janis: 5, Ingus: 6 };

const targetSource = Object.assign(target, source);

//console.log(targetSource);

//console.log(Object.values(source));
///console.log(Object.keys(source));

for(const [key, value] of Object.entries(targetSource)) {
    console.log(`${key}: ${value}`);
};

const masivs = [1, 2,3,4,5];

const masivsExtra = [10, 100, 100];


//
//console.log([{ name: "NONE", index: -1 }, ...masivsExtra]);


function sum(...args) {
    let sum = 0;
    args.map(x => {
        return   x;
    });

    return sum;
}
//console.log(sum(1, 2, 3));
//console.log(sum(1, 2, 3, 4));

//console.log(new Helppers().getRandomNumberFromOneToSix());

const masivs3  = [
    { name: "Davis", marks: 7 }, 
    { name: "Davis", marks: 6 }, 
    { name: "Davis", marks: 7 }, 
    { name: "Davis", marks: 3 }, 
    { name: "Davis", marks: 5 }, 
];



const atdzimesAvg = Array.from(masivs3, x => { return { name: "Davis" , marks: x.marks + x.marks }});

const masivs4 = [1, 2,3,4,5];

console.log(masivs.concat(masivsExtra));