//map 
//map is used to store collection of key value pair where key can be nay datatype
//array based on index value, object is key value pairs, map is key value pair wiht kay can be any datatype.

const colors1={"top":"red1","center":"white1","bottom":"yellow1","left": "blue1","right": "green1"};
console.log(colors1);
console.log(colors1["top"]);
const colors= new Map();
console.log(colors);
colors.set(1,"Black");
colors.set(2,"red");
colors.set(3,"white");
colors.set(4,"green");
colors.set(5,"blue");
console.log(colors);
console.log(colors.get(2));
console.log(colors.entries());
console.log(colors.keys());
console.log(colors.values());
console.log(colors.size);
console.log(colors.delete(4));
console.log(colors);
console.log(colors.has(6));
console.log();
//console.log(colors.clear());
console.log(colors.size);
console.log();
colors.forEach((key,ans)=>console.log(key," : ",ans));
console.log();
console.log();
console.log();
console.log();


let bike={name:"TVS"};
let cycle={name:"electric"};
let map=new Map();

map.set(bike,"xl 100");
console.log(map.get(bike));
console.log();
bike=null;
console.log(map.get(bike));
console.log(bike);
console.log();
console.log();
console.log();

let animal={name:"dog"};
let bird={name:"crow"};

let weakmap1=new WeakMap();
weakmap1.set(animal,"bones");
console.log(weakmap1.get(animal));
console.log();
animal=null;
console.log(weakmap1.get(animal));
console.log(animal);console.log(bird);
console.log();
console.log();
//object can only be accessed with object.entries,keys values for using foreach method

Object.entries(colors1).forEach((key)=>console.log(key));
console.log();
for(let co of colors )//for of can only me used wiht map object,array
{
    console.log(co);

}
console.log();
for(let cos in colors1) //for in can only be used in objects
{
    console.log(cos);
}
console.log();
console.log();
//set concept
//set does not allow duplicate values

const dailycycle=["wakup","bath","eat","learn","eat","learn","home","eat","sleep"];
const dchabitset= new Set(dailycycle);
console.log(dailycycle);
console.log(dchabitset);
dchabitset.add("watch tv");
console.log(dchabitset);
dchabitset.delete("bath");
console.log(dchabitset);
console.log(dchabitset.has("drink"));
console.log(dchabitset.has("wakup"));
console.log(dchabitset.size);
console.log(dchabitset.keys());
console.log(dchabitset.values());
console.log(dchabitset.entries());
for (let dc of dchabitset)
{
    console.log(dc);
}
console.log();

dchabitset.forEach((key,value)=>console.log(key, " ; ",value));











