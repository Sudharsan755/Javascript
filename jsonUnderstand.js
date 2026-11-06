let a={name:"ram", age:23,DOB:"10/05/2005"};
let result=JSON.stringify(a);
console.log(result);
console.log(typeof result);

let b='{"name":"ram","age":23,"DOB":"10/05/2005"}';
let result1=JSON.parse(b);
console.log(result1);
console.log(typeof result1);

const date=Date();//this tell the system time 
const crtdate= new Date();
console.log(date);
console.log(crtdate);
console.log(Date.now());//milliseconds from jan 1 1970
console  .log(crtdate.getDate());
const d = new Date("October 13, 2014 11:13:00");
const e= new Date(2013,11,35);
console.log(e);
console.log(d);
console.log(crtdate.getFullYear(),"getfullyear");
console.log(crtdate.getMonth(),"getmonth");
console.log(crtdate.getDate(),"getdate");
console.log(crtdate.getHours(),"gethours");
console.log(crtdate.getMinutes(),"getminutes");
console.log(crtdate.getSeconds(),"getseconds");
console.log(crtdate.getMilliseconds(),"getmilliseconds");
console.log(crtdate.getDay(),"getdate");
console.log(crtdate.getTime(),"gettime");
console.log(crtdate.getTimezoneOffset(),"gettimezoneOFFset");
console.log(crtdate.getFullYear(),"");
console.log(crtdate.getFullYear(),"");
console.log(crtdate.getFullYear());

