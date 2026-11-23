//stage 6: recursion
console.log("recursion");
function number(n)
{
    if(n==0)
    {
        return ;
    }
    console.log(n);
    number(n-1);
}
number(5);

// call stack
console.log("call stack");
function first()
{
    console.log("first started");
    second();
    console.log("first ended");
}
function second()
{
    console.log("second started");
    third();
    console.log("second ended");
}
function third()
{
    console.log("third started");
    console.log("third ended");
}
first();

function factorial(n)
{
    if(n===1 || n===0)
    {
        return 1;
    }
    return n* factorial(n-1);
}
console.log(factorial(5));

//rest parameter used to combine into single unit
console.log("rest parameter");

function add(...numbers)
{
    let total=0;
    for(let num of numbers)
    {
        total=total+num;
    }
    return total;
}
console.log(add(10,30,20,10));
//using arrow 
const addarrow=(...value)=>{
    let sum=0;
    for(const current of value)
    {
        sum=sum+current;
    }
    return sum;
};

console.log(addarrow(20,30,10,2));
console.log(addarrow(25,10,25,20));

console.log();
console.log("rest paramter");
let id = [10, 20, 30];
let id1 = [40, 50, 60];
let combine = [...id, ...id1];
console.log(combine);

//closure = a function which remembers and access variable from tje out function even after finishing executing.

function counter()
{
    let count=0;
    return function(){
        count++;
        console.log(count);
    };
}
let counting= counter();
counting();
counting();
counting();

//display bulit in functionality and gloabl prperties inglobal object in current environmnet
console.log("globalThis display objects")
console.log(globalThis);
console.log();
//creating a new function
console.log("new function");

let name= new Function("b"," a","return a+b");
console.log(name("P","Sudharsan "));
