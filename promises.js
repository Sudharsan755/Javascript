
//callback function
console.log();
console.log("callback is used in promises to pass a function as a argument");

function calculate(a,b,callback)
{
  let result=a+b;
  callback(result);
  
}
function display(value)
{
  console.log(value);
}
calculate(10,45,display);
//callback asynchronous operation
console.log();
console.log("callback asynchronous operation");
console.log();
console.log("start");
setTimeout(()=>{console.log("processing");},2000);
console.log("End");

//callback hell
console.log();
console.log("callback hell");
console.log();
setTimeout(()=>{console.log("first run with 1 sec");
               setTimeout(()=>{console.log("second run with 1 sec");
                              setTimeout(()=>{console.log("third run with 1 sec");}
                                        ,1000);},1000);},1000);
console.log();
//promises
console.log("promises");
console.log()
let ticketbook=new Promise((resolve,reject)=>{let bookingstatus=true;
                          if(bookingstatus){
  resolve("Trained book successfully");
  
}
else
  {
    reject("Train booking failed");
  }
                                             });
ticketbook.then((success)=>{console.log(success);})
                         .catch((failure)=>{console.log(failure);});
console.log();
console.log();
//promise chaining
console.log("promise chaining");
let chaining=new Promise((resolve)=>{resolve(10);});
chaining.then((result)=>{console.log(result);
             return result*10})
.then((result)=>{console.log(result);
             return result*2})
.then((result)=>{console.log(result);});
console.log();
console.log();
//error handling in promises catch and finally

let errorcheck= new Promise((resolve,reject)=>{
  reject ("Network error");
});
errorcheck.then((result)=>{console.log("success");})
.catch((error)=>{console.log(error);})
.finally(()=>{console.log("Operation finished");});
console.log();


//promises api and its method

console.log("promise api and its methods");
console.log("Promise.all,Promise.allSettled, Promise.any(), Promise.race,Promise.resolve(),Promise.reject()");
console.log();
let p1=Promise.resolve(10);
let p2=Promise.resolve(20);
let p3=Promise.resolve(30);
let p4=Promise.reject(40);
let p5=Promise.reject(50);
//Promise.all= display resolve if all success if one fails or error display the reject value

Promise.all([p1,p2,p3])
.then((result)=>{console.log("Promise.all "+result);});

Promise.all([p1,p2,p3,p4])
.then((result)=>{console.log("Promise.all "+result)})
.catch((error)=>{console.log("Promise.all "+error)});

//Promise.allSettled("displays the sttus of every promise")

Promise.allSettled([p1,p4])
.then((result)=>{console.log(result)});

//Promise.race("returns the first processing wether it fullfills or rejects")

Promise.race([p3, p2])
    .then(result => console.log("Promise.race "+result));

//eg 2 for race
let s1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 1000);
});
let s2 = new Promise(resolve => {
    setTimeout(() => resolve("Second"), 2000);
});
Promise.race([s2, s1])
    .then(result => console.log("Promise.race "+result));
//end of eg2
//Promise.any("display the first fullfilled status ,if no error occurs ")
Promise.any([p1,p2,p4])
.then((result)=>console.log("Promise.any "+result));
// Promise.any([p4,p5])
// .then((result)=>console.log("Promise.any "+result));




