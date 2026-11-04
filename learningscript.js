console.log("arun");
console.log(10+5);
console.log("10"+5);
console.log();
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
console.log("if i reinitialize the (const) clg='ABC' it show an error");
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
console.log();
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
console.log();

//developer console

console.log("developer console");
console.log();
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

//looping statements

console.log("Looping statements");
console.log("while loop");
let i=1;
while(i<=10)
{
    console.log(i);
    i++;
}
console.log();
console.log("difference between wihile and do while");

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
console.log("for loop");
for(let j=0;j<=20;j+=2)
{
    if(j==10)
    {
        continue;
    }
    console.log(j);
}
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
console.log();
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
console.log("function test(a,...vallues) but function test(...values,a)is worng");
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

//03/11/2026

console.log("optional Chaining '?.' is used to prevent error and display undefined if value not found.");
console.log("it is used to check undefined data with nullish coalescing operator ");
let school={name:"fazil", age:"21"};
console.log(school?.name);
console.log(school.address?.city);
console.log(school.address?.city ??"city not found");
console.log();
console.log("another method to check the object has its own property")
let student = {
    name: "Arun",
    age: 21
};
console.log(Object.hasOwn(student, "name"));
console.log(Object.hasOwn(student, "mark"));

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

console.log("object copying : shallow copy and deep copy ");
console.log("shallow copy mean share reference the same object object properties if we change the value value is update for both");
console.log();
let stu1 = {
    name: "Arun",
    marks: {
        maths: 90,
        science: 85
    }
};
let stu2={...stu1};
stu2.name="Kumar";
stu2.marks.maths=100;
console.log(stu1.name);
console.log(stu1.marks.maths);
console.log(stu2.name);
console.log(stu2.marks.maths);
console.log();
console.log("deep copy separeate value assigned");
let stu3=structuredClone(stu1);
stu3.name="chandran";
stu3.marks.maths=77;
console.log(stu1.name);
console.log(stu1.marks.maths);
console.log(stu3.name);
console.log(stu3.marks.maths);
console.log();
console.log();
console.log("error handling");

try{
    console.log(ape);
}
catch(errr)
{
    console.log("value not assigned");
}
finally
{
    console.log("this is a demo check");
}
console.log();

let ape=15;
try
{
    if(ape>14)
    {
        throw new Error ("Value is greater");
    }
    console.log("value is lesser");
}
catch(error)
{
    console.log(error.message);
}
finally
{
    console.log("error handled");
}
console.log();

//array adding or removing elements
console.log("array accesing elements");
let laptops=["Dell","Lenovo","Asus","MSI","Samsung"];
console.log("default Array");
console.log(laptops);
console.log();
laptops.push("HP");
console.log("After push");
console.log(laptops);
console.log();
laptops.unshift("ACER");
console.log("After unshift:add element at begining.");
console.log(laptops);
console.log();
laptops.pop();
console.log("After pop");
console.log(laptops);
console.log();
laptops.pop();
console.log("After shift:after removing the first element");
console.log(laptops);
console.log();
console.log("splice(start value, num of values,add item value1,add itemvalue2");
console.log("splice is used to add remove update values");
let removalue=laptops.splice(1,2);
console.log(removalue);
console.log(laptops);
laptops.splice(2,0,"Mac");
console.log("splice the second value 1 used to replace and 0 is to add at position without deleting");
console.log(laptops);
laptops.splice(2,1,"chromebook");
console.log(laptops);
console.log();
console.log("slice:is used to display(extract the array) the array based on (startindex,endindex) ");
let slicelaptops=laptops.slice(0,2);
console.log(slicelaptops);
console.log();
let slice2laptops=laptops.slice(-2);
console.log(slice2laptops);
console.log(laptops);
let mobiles=["Realme","Redmi","ROG","Vivo","Oppo"];
console.log("concat: to add")
let lapmob=laptops.concat(mobiles);
console.log(lapmob);
console.log();
console.log("indexOf:find index value");
console.log(lapmob.indexOf("Vivo"));
console.log("includes: is used to check whther the value is there are not");
console.log(lapmob.includes("Realme"));
console.log(lapmob.includes("Apple"));
console.log();
console.log("find():is used to get first achieved value");
let marrk=[45, 34,78,23,79,1];
let resmark=marrk.find(function(mk)
{
    return mk>70;
});
console.log(resmark);
console.log("findIndex():finds the index value based on condition");
let resmark1=marrk.findIndex(function(mk)
{
    return mk>40;
});
console.log(resmark1);
console.log();
console.log("array methods(create a new array):foreach() ");
marrk.forEach(function(mr,index){console.log(index,mr)});
console.log();
marrk.forEach(mr=>console.log(mr));
console.log();
console.log("map()");
marrk.map(function(mr){mr=mr+10;
    console.log(mr)});
let upmarrk=marrk.map(mr=>mr=mr+1);
console.log(upmarrk);
console.log();
console.log("filter");
let filmark=marrk.filter(mr=>mr>50);
console.log(filmark);
console.log();
console.log("reduce(),sort(),reverse(),join()");
console.log("reduce is to combine to single output");
let totalmarrk=marrk.reduce((sum2,mar)=>{return sum2+mar;},0);
console.log(totalmarrk);
let sortmarrk=marrk.sort();
console.log(sortmarrk);
let revmarrk=marrk.reverse();
console.log(revmarrk);
//calling the lapmob it use join()
console.log("join() is to print the array elemnt as string")
let lapmobjoiny=lapmob.join();
console.log(lapmobjoiny);
console.log(lapmob.join(" - "));//add symbols in between
console.log();
console.log("Array.isArray(sadf) is to check whether sadf is an array");
console.log(Array.isArray(sortmarrk));

//04/11/2026

console.log();
//string concepts
console.log("String Concepts");
//string creation and type of creation
console.log("types of string implemntation");
console.log("back ticks is used to write multiline string and used for print proceessing data");
let cm="Sivanayagi";
let cm2='ravi';
let aageeg=34;
let cm3=`My name is ${cm} and my age is ${age}.`;
let cm4="my name is "+cm+ " and my age is" +age;
console.log();

console.log(cm3);
console.log(cm4);
let mesage=`HI MADEM
HOW ARE YOU
HOW IS YOUR LIKE GOING`;
console.log();
console.log("Accessing Characters");
console.log(mesage);
console.log(mesage.length);
console.log(mesage[3]); //method 1
console.log(mesage.charAt(3));//method 2
console.log(mesage.at(-3)); // method 3 access negative from last element
console.log();
let cmupdate="C"+cm.slice(5);
console.log(cmupdate);
console.log("string case conversion and extraction:");
//sivanayagi
console.log(cm.toUpperCase());
console.log(cm.toLowerCase());
console.log(cm.toLocaleUpperCase("tr"));
console.log(cm.toLocaleLowerCase("tr"));
console.log(cm.slice(4,7));
console.log(cm.slice(4,5));// slice  start and end index, not second term is not of index
console.log(cm.slice(-4,-1));//slice can access from reversed way 
console.log(cm.slice(4));
console.log(cm.substring(4,7));
console.log(cm.substring(4,2));//substring only form forward not reversed with negative index
//substring treats the neagtive elements as 0th index. 
//note that start value and end value.
console.log();
console.log("Joining and Removing Spaces.(concat,trim,trimStart,trimEnd,repeat) ");
let nametest1="Maha";
let nametest2="Raja ";
console.log(nametest1.concat(nametest2));
console.log(nametest1.concat(" ",nametest2));
console.log(nametest2.concat(" ",nametest1," ",cm," ",cm2));//multiple string concat
let nametest3="      ranga raja lu   ";
console.log(nametest3.trim());//remove spaces at two ends of the string
console.log(nametest3.trimStart());
console.log(nametest3.trimEnd());
console.log(nametest2.repeat(5));
let sentence="Hello everyone what are you doing? everyone Hello";
console.log(sentence.indexOf("o",8));//"search the keyvalue and startindex"
console.log(sentence.indexOf("ver"));
console.log(sentence.lastIndexOf("everyone"));
console.log(sentence.includes("z"));
console.log(sentence.includes("doing"));
console.log(sentence.startsWith("Hello"));
console.log(sentence.startsWith("hello"));
console.log(sentence.endsWith("."));
console.log(sentence.replace("everyone Hello"," hi"));//does not change the original string.
console.log(sentence.replace("Hello","Guys"));
console.log(sentence.replaceAll("Hello","guys"));
//to replace all with case sensitive
let word="hello Hello HEllo hello";
console.log(word.replace("hello","hi"));
console.log(word.replaceAll("hello","hi"));
console.log(word.replace(/hello/g, "hi"));//global replace case sensitive
console.log(word.replace(/hello/gi,"hi"));//global replace without casesensitive
console.log(word.split(" "));//split into array
console.log(word.split());
console.log(word.split("",));
console.log(word.split("", 8)); //no of character to print
let sampletext="Javascript is Javascript easy Javascript 9984934898";
let resolve=sampletext.match("script");
console.log(resolve);
console.log(sampletext.match(/[0-9]+/));
console.log(sampletext.match(/Java/g));
console.log(sampletext.matchAll(/Javascript/g));
console.log(sampletext.search("script"));
console.log();
console.log("math concepts ");

console.log(parseInt(45));//enter the sirst coming interger value
console.log(parseInt(34.762));
console.log(parseInt("25px"));
console.log(parseInt("hello34"));
console.log();
console.log(parseFloat(34.762));
console.log(parseFloat("25px"));
console.log(parseFloat("hello34"));
//javascript math operation
console.log(Math.round(34.762));//round the number
console.log(Math.floor(34.762));//round the term downward
console.log(Math.ceil(34.762));//round the term upward
console.log(Math.trunc(34.762));//just remove the decimal
console.log(Math.max(10,40,50));
console.log(Math.min(10,40,50));
console.log(Math.abs(-10));
console.log(Math.sqrt(25));
console.log(Math.pow(2,3));
console.log(Math.random());

let numbar=299.34223
console.log(numbar.toFixed(2));//fix the decimal
console.log(numbar.toFixed(0));
console.log(Math.floor(Math.random() * 10) + 1);
console.log();

//Number Properties
console.log(Number.isInteger(-10));
console.log(Number.isFinite(10.4));
console.log(Number.isNaN(10.4));
console.log(Number.isNaN(NaN));
console.log((0.1+0.3).toFixed(7));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//date concepts
console.log();
console.log("new Date(); is the object used to acces the date");
let today= new Date();
console.log(today);//UTC time
const IndiaTime= new Date().toLocaleString('en-IN',{
    timeZone:'Asia/Kolkata'
});
console.log(IndiaTime);//Indian time
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toISOString());





























