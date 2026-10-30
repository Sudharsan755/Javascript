console.log("arun");
console.log(10+5);
console.log("10"+5);

let name="sudharsan";
let username=name;
console.log(username);

//variable let const var

let age=18;
console.log(age);
age=10;
console.log(age);

const clg="KIOT";
console.log(clg);
console.log("if i reinitialize the clg='ABC' it show an error");
console.log();
console.log("global scope is var");
var age1=15;
function print()
{
    var age2=20;
    console.log(age1);
    console.log(age2);
}
print();
console.log();
console.log("global scope in let");
var age3=15;
function print1()
{
    let age4=25;
    console.log("inside fuction var "+age3);
    console.log("inside fuction let "+age4);
}
print1();
console.log("ouside function  var "+age3);
//  if i use this it show error console.log("ouside function  let "age4);
//data types and type of method
console.log();
console.log("data types");
let name1="ram";
let number=22;
let number2=22.03;
let isstudent=true;
let a=null;
let b;
console.log(name1+" data type is ",typeof name1);
console.log(number+" data type is ",typeof number);
console.log(number2+" data type is ",typeof number2);
console.log(isstudent+" data type is ",typeof isstudent);
console.log(a+" data type of a ='' ",typeof a);
console.log(b+" data type of b ",typeof b);
console.log();
//type conversion
let a1=5;
let a2="0";
let a3=509;
let change1=String(a1);
let change2=Boolean(a2);
let change3=Number(a2);
console.log(change1);
console.log(change2);
console.log(change3);
console.log(String(a3)+a2);
console.log(Number("hello"));

//operators

console.log();
console.log("operators");
let aop=10;
let bop=3;
console.log("add ",aop+bop);
console.log("sub ",aop-bop);
console.log("mul ",aop*bop);
console.log("div ",aop/bop);
console.log("remainder ",aop%bop);
console.log("power ",aop**bop);
console.log();
console.log("assignment operator");
console.log(aop+=10);
let x = 20;
x += 10; // 30
x -= 5;  // 25
x *= 2;  // 50
console.log(x);
console.log("increment or decrement operator");
let count=5;
console.log(count++);
console.log(++count);
console.log(count--);
console.log(--count);


