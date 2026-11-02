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

console.error("try again later");
console.warn("warning");

console.time('timer1');
function loops() {
    for (let i = 0; i <= 10000; i++) {

    }
}
loops();
console.timeEnd('timer1');
console.info('%cThis is a styled info message!', 'color: blue; font-size: 16px; font-weight: bold;');
console.table([{name: "Amit", age: 30}, {name: "Jatin", age: 25}]);

console.group('User Information');
console.log('Name: Ritik');
console.log('Age: 30');
console.groupEnd();
console.count("ram");
console.count("ram");
console.count("ram");
console.count("ram");
console.count("ram");
console.count("ram");
console.count("ram");

// control statements

console.log();
let agee=20;
if(agee <18){
    console.log("Not valid");
}
else
{
    console.log("valid");
}

let output=agee<18?"success":"Not success";
console.log(output);

let add=5;
let sum=1;
if(sum==0)
{
    if(add>sum)
    {
        console.log (add+sum);
    }
    else
    {
        console.log(add-sum);
    }
}
else
{
    console.log(sum);
}

console.log();

console.log("logical operator concepts && || !");
console.log(true  && false);
console.log(true || false);
console.log(true);
console.log(10>5 && 20>15);
console.log(10>5 && 20<15);

console.log("Not always it should list true or false it also returns value");
console.log("if and operator always return 1st falsy value");
console.log("it always return last value when both are truthy")
console.log("if or operator always return 1st value if both values are true ")
console.log("if all values are falsy, it returns the last value");
console.log("Java"&&"JavaScript");
console.log("Java" && "");
console.log(""&& "Java");
console.log("1" && "jav");
console.log("Java"||"JavaScript");
console.log("Java" || "");
console.log("" || "Java");
console.log("j"|| "0");
console.log("1" || "jav");

let ag = 20;
let hasID = false;

console.log(ag >= 18 && hasID);
console.log(ag >= 18 || hasID);
console.log(!hasID);
console.log();
console.log("Nullish coalescing ?? since it check for null or undefined return right value");
console.log(null ?? "Guest");
console.log(undefined ?? "Guest");
console.log(false ?? "Guest");
console.log("" ?? "Guest");

console.log("Looping statements");
let i=1;
while(i<=10)
{
    console.log(i);
    i++;
}
for(let j=0;j<=20;j+=2)
{
    if(j==10)
    {
        continue;
    }
    console.log(j);
}

let k=1;
while(k<=2){
    console.log(k);
    k++;
}
console.log("value of k",k);
let l=10;
do{
    console.log(l);
    l++;
}while(l<=5);
console.log("value of l",l);
console.log();
console.log("Types of for loop");
console.log(" for of (used in array or string)");
let marks=[98,23,45,67];
for(let individualmark  of marks)
{
    console.log(individualmark);
}
console.log();
let lang="JAVA";
for(let character of lang)
{
    console.log(character);
}
console.log();

console.log(" for in (used in key value pairs)");
let studt={name:"ram",age:34,regno:12232,course:"MCA"};
for(let details in studt)
{
    console.log(details,studt[details]);
}

let month=10;
switch(month)
{
case 5:
    console.log("may");
    break;
case 10:
    console.log("October");
    break;
case 12:
    console.log("December");
    break;
case 1:
    console.log("January");
    break;
default:
    console.log("enter 5 10 12 1 ");
    break;

}
console.log();
console.log();

console.log("function concepts ");
console.log();
console.log("with parameter");

function printfunc(name)
{
 console.log(name); 
}

printfunc("sudharsan");
console.log();
console.log("without parameter");

function print1()
{
    console.log("Ravichandran");
}
print1();

console.log();
console.log("function without a return value retrurn undefined. ");
/*function show()
{
    console.log("hello");
}
let x=show();
console.log(x);*/
console.log("hence we must use return statemnt to process data in future ");
function show1()
{
    return "hello";
}
let apple=show1();
console.log(apple);
console.log();
console.log("Simple example for function");
function calculateDiscount(price, discount)
{
    return price-discount;
}
let final_amount=calculateDiscount(500,50);
console.log(final_amount);



//function declaration
console.log("function declaration");
let display=func1();
function func1()
{
    return "function declaration can called before function creation.";
}
console.log(display);

//function expression
console.log("function expression");
let display1=function()
{
    return "function expression can only be called after intialization or else refernce error occurs";
};
let ot=display1();
console.log(ot);

console.log("callback function");
function greet(callback) {
    console.log("Welcome");

    callback();
}
function sayHello() {
    console.log("Hello");
}
greet(sayHello);
console.log("callback function eg 2");
function test(callback) {
    console.log("A");
    callback();
    console.log("C");
}

test(function() {
    console.log("B");
});
console.log();
console.log();
console.log("Arrow function ");
let add2= function(az,sx){
    return az+sx;
}
console.log(add2(23,34));
let add1=(value1,value2)=>{return value1+value2};
console.log(add1(23,12));

console.log();
console.log("rest parameter Note: rest operator must always be last parameter");
console.log("funtion test(a,...vallues) but function test(...values,a)is worng");
function sum1(...numbers)
{
    let total=0;
    for(numb of numbers)
    {
        total=total+numb;
    }
    return total;
}
console.log(sum1(12,23,45));
console.log(sum1(12,23,45,89,34));
console.log(sum1(12,23,45,34));
console.log("spread operator is to separte the elements form array to indivial value");
let nummbers=[10,20,39,34];
function fix()
{
    console.log(...nummbers);
}
fix();

function recsum(n)
{
    if(n==0)
    {
        return 0;
    }
    return n+recsum(n-1);
}
let outtput=recsum(5);
console.log(outtput);
console.log();

console.log("array methods (forEach(),map(),reduce(),filter()");
console.log();


let prices=[299,499,699];

prices.forEach(function(p)
{
    console.log(p);
});
let updatedprices=prices.map(function(pr){
    return pr+50;
});
console.log(updatedprices);

let filteredprices=updatedprices.filter(function(pri)
{
    return pri>499;
});
console.log(filteredprices);

let total=updatedprices.reduce(function(sum,pric)
{
    return sum+pric;
},0);
console.log(total);
console.log();
console.log();


console.log("Object reperesentation");
let empdetails=
{name:["ram","raju"],age:[21,23],depart:["MCA","MBA"]
};
console.log(empdetails.name);
console.log(empdetails["age"]);
console.log("adding the city");
empdetails.city=["salem","chennai"];
console.log(empdetails);
console.log("deleting the depart");
delete empdetails.depart;
console.log(empdetails);

console.log("destructuring ");
let user21={name:"ajay",age:23,country:'US'};
console.log("This is traditional way ");
let name21=user21.name;
let age21= user21.age;
console.log(name21);
console.log(age21);
console.log("destructuring method");
let {name:name22,age:age22}=user21;
console.log(name22);
console.log(age22);







