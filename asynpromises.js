
//sychronous programming

console.log("Synchronous programming");
console.log("Start");
console.log("Processing");
console.log("Completed");
console.log();

//Asynchronous execution

console.log();
console.log("Order placed");
setTimeout(()=>{
  console.log("Food prepared");
},2000);
console.log("Customer can do other work");
console.log();

//student result processing program
//geting student deatils and printing proceesing and received

console.log();
console.log("Studnet details requested");

setTimeout(()=>{console.log("Student details received");},3000);
console.log("Other operations can continue");
console.log();
console.log();
//usage of setinterval and clearInterval

let timer=setInterval(()=>{console.log("running");},3000);
setTimeout(()=>{clearInterval(timer);
              console.log("process completed");},4000);
console.log();
console.log();
//task-5- online shopping order

console.log("orderplaced");
setTimeout(()=>{console.log("Payment successful");},2000);
setTimeout(()=>{console.log("Order shipped");},4000);
console.log("User can browse other products");
console.log();

//task-6 - repeated execution for 2 seconds and stop after 5 seconds

const task6=setInterval(()=>{
  console.log("Checking Server");},2000);
setTimeout(()=>{
  clearInterval(task6);console.log("server checked");
},4000);
console.log();
///callback practise
//task1
console.log();
function greet(callback)
{
  callback();
}
function process()
{
 console.log("hello student");
}
greet(process);
console.log();

//task 2-student marks calculator

function calculateMarks(a,b,callback)
{
  let total= a+b;
  callback(total);
}
function display(result)
{
  console.log(result);
}
calculateMarks(56,70,display);
console.log();
console.log();

//anonymous function callback

function process2(callback)
{
  callback();
}
process2(()=>{console.log("Hello");});
console.log();
console.log();

//arrow function callback

function process1(callback)
{
  callback();
}
process1(()=>{console.log("hello world");});

console.log();console.log();
//task 5- multiple callback operations

function marks(a,b,c,sumcallback,avgcallback)
{
  let total=a+b+c;
  let avg=total/3;
  sumcallback(total);
  avgcallback(avg);
}
function sum(result)
{
  console.log(result);
}
function average(rating)
{
  console.log(rating);
  
}
marks(95,85,90,sum,average);
console.log();
console.log();
//task 6
function welcome(callback)
{
  callback();
}
welcome(()=>{console.log("welcome to javascriot internship");});

console.log();
console.log();
//task -8 asynchronous callback
function greetUser(callback)
{
  console.log("Greeting started");
  setTimeout(()=>{
    callback();
  },2000);
}
function callback()
{
  console.log("welcome user");
}
greetUser(callback);

console.log();
console.log();
//task-9 Employee information

function getEmployee(callback) {
  setTimeout(() => {
    let details = {
      id: 21,
      name: "Ram",
      salary: 67000
    };

    callback(details);
  }, 3000);
}

function displayEmployee(data) {
  console.log(data);
}

getEmployee(displayEmployee);
console.log();
console.log();

//task 10 multilple process

function processOrder(callback)
{
  console.log("order Receiver");
setTimeout(()=>{callback();},2000);
  console.log("user can continue shopping");
}
function displayorder()
{
  console.log("order processed");
}
processOrder(displayorder);

console.log();
console.log();
//nested callback

function placeOrder(callback)
{
  setTimeout(()=>{console.log("order placed");
                 callback();
                 },1000);}
function payment(callback)
{
  setTimeout(()=>{console.log("Payment is successfull");
                 callback();
                 },1000);}
function shipping(callback)
{
  setTimeout(()=>{console.log("Shipping is done");
                 callback();
                 },1000);
}
placeOrder(()=>{
  payment(()=>{
    shipping(()=>{
      console.log("Order completed");
    });
  });
});

console.log();
console.log();
//call hell is multiple callbacks that is too much to progress, to overcome this we use promises to solve ub ckeaber structure.

// task-three asynchronous operation
function login(callback)
{
  setTimeout(()=>{
    
    console.log("Login successful");
  callback();},1000);
}
function getProfile(callback)
{
  setTimeout(()=>{
    console.log("Profile loaded");
  callback();
  },1000);
}
function getDashboard()
{
  setTimeout(()=>{
    console.log("Dashboard displayed");
  },1000);
}
login(()=>{
  getProfile(()=>{
    getDashboard();
  });
});
console.log();
console.log();
//promise learning
//task-1 - Login Promise
console.log();
let loginPromise= new Promise((resolve,reject)=>{
  let login=true;
if(login)
  {
    resolve("Login successful");
  }
  else
    {
      reject("Login failed");
    }
  
});
loginPromise
  .then((success)=>{console.log(success);})
  .catch((error)=>{console.log(error);});
console.log();
console.log();
//task-2 Electricity bill payment
//if amount greater or not

let EB= new Promise((resolve,reject)=>{
  let paymentAmount=500;
  if(paymentAmount>0)
    {
      resolve("Bill paid successfully");
    }
  else
  {
    reject("Invalid payment");
  }
  
});
EB.then((success)=>{console.log(success);})
  .catch((error)=>{console.log(error);});
console.log();
console.log();
//task-2 food order
let foodorder= new Promise((resolve,reject)=>{
  let foodAvailable=true;
  if(foodAvailable)
    {
      resolve("Food order confirmed");
    }
  else
    {
      reject("food unavailable");
    }
});
foodorder.then((success)=>{console.log(success);}).catch((failure)=>{console.log(failure);}).finally(()=>{console.log("order checking completed")});
console.log();
// task2- promise chaining
console.log("promise chaining");
console.log();
let marksprocess= new Promise((resolve,reject)=>{
  let num=80;
  if(num>0)
  {
    resolve(num);
  }
  else
  {
    reject();
  }
});

marksprocess.then((value)=>{
  console.log(value);
  return value+10;
})
.then((value)=>{console.log(value);
return value*2;})
.then((value)=>{console.log(value);
})
.catch(()=>{console.log("value is zero")});

///async concept
//-------------------------------------
async function getName()
{
  return "Ram";
}
getName().then((value)=>{
  console.log(value);
});//returns the value using then


//await allow the promise to settle.
//using awiat ot return the direct value
function getmarks()
{
  return Promise.resolve(90);
}
let result= await getmarks();
console.log(result);

//task 1 async program
function getCity()
{
  return Promise.resolve("Coimbatore");
}
async function displayCity()
{
  let output= await getCity();
  console.log(output);
}
displayCity();

//task 2 student marks
function getMarks()
{
  return Promise.resolve(95);
}
async function displayMarks()
{
  let mark = await getMarks();
  console.log("Student marks: "+mark);
}

displayMarks();


//realtime usage we get data from api hence we use setTimout()
function getStudent()
{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("student details loaded")
    },3000);
  });
}
async function displayStudent()
{
  console.log("loading student");
  let result= await getStudent();
  console.log(result);
  console.log("completed");
}
displayStudent();

//task payment checking using async await resolve reject and try catch

function checkPayment()
{
  return new Promise((resolve,reject)=>
                    {
let paid = false;
  if(paid)
  {
    resolve("Payment Syccessful");
  }
  else
  {
    reject("Payment failed");
  }
  });
}
async function displayPayment()
{
  try
    {
      let success=await checkPayment();
          console.log(success);
        }
  catch(error)
    {
      console.log(error);
    }
  finally
    {
      console.log("status updated");
    }
}
displayPayment();



