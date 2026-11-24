let student={};

Object.defineProperties(student,{
  name:{
    value:"ram",
    writable:true
  },
  age:{
    value:20,
    writable:false
  }
});
console.log(student.name);
console.log(student.age);
student.age=34;
student.name="ravi";
console.log(student.name);
console.log(student.age);

let user ={
  firstname:"Deva",
  lastname:"Chandran",
  get fullname()
  {
    return this.firstname+" "+this.lastname;
  },
  set fullname(value)
  {
    let parts=value.split(" ");
    this.firstname=parts[0];
    this.lastname=parts[1];
  }
};
console.log(user.fullname);
user.fullname="Vijay Kumar";
console.log(user.fullname);

//prototype inheritance and getter setter 
console.log("prototype inheritance");
let person={
  eat()
  {
    console.log("perosn is eating");
  }
};
let children={
  study()
  {
    console.log("child is studying");
  }
};
Object.setPrototypeOf(children,person);
children.study();
children.eat();

//f-prototype - aquzire the propert of another object
//array prototype
let fruits=["apple","orange","mango"];
console.log(fruits.length);
console.log(Object.getPrototypeOf(fruits));
console.log(Array.prototype);
//string prototype
let vegetable="Brinjal";
console.log(vegetable.toUpperCase());
console.log(String.prototype.toUpperCase);
//number prototype

let price=99.768;
console.log(price.toFixed(2));

//__proto__

//allows us tot get or set objects prototype
console.log();
console.log();
//class creation
class degree
{
  constructor(branch)
  {
    this.branch=branch;
  }
  show()
  {
    console.log(this.branch);
  }
}
let obj1= new degree("MCA");
let obj2=new degree("EEE");
obj1.show();
obj2.show();
console.log();
console.log();
//class expression- assigning a class in a variable

let program= class{
  run()
  {
    console.log("program execution");
  }
};
let runtime=new program();
runtime.run();
console.log();
console.log("class inheritance");
//class inheritance
class classinherit{
  header()
  {
    console.log("parent class is accessed");
  }}
  class childclass extends classinherit
  {
    nextchild()
    {
      console.log("child class is accessed")
    }
  }
  let objClassInherit= new childclass();
  objClassInherit.header();
  objClassInherit.nextchild();
  console.log();
//super class

  console.log("super class");
  console.log();
  class totalstu
  {
    constructor(name)
    {
      this.name=name;
    }
  }
  class rep extends totalstu
  {
   constructor(name,department)
   {
    super(name);   this.department=department;
  }
  display()
  {
    console.log(this.name);
    console.log(this.department);
  }
}
let objrep = new rep("Arun","computer Science");
objrep.display();

console.log();
//method overridding
//use super keyword to access the method overidding.

class chicken
{
  recipe()
  {
    console.log("chicken fry");
  }
}
class goat extends chicken
{
  recipe()
  {
    super.recipe();
    console.log("meat fry");
  }
}
let objover=new goat();
objover.recipe();
console.log();

//static class
//static can be called by class name not object is needed or called
console.log("static method");

class strike{
  constructor(salary){
    this.salary= salary;
  }
  displaysalary()
  {
    console.log(this.salary);
  }
  static disp(salary){
    this.salary=salary;
    console.log(this.salary);
  }
}
let objstatic= new strike(32000);
objstatic.displaysalary();
strike.disp(20000);
//private properties can only be acces inside it sown class
console.log();
console.log("private properties");
class bankaccount
{
  #balance=1000;
  deposit(cash)
  {
    this.#balance+=cash;
  }
  getbalance()
  {
    return this.#balance;
  }
}
let account=new bankaccount();
account.deposit(5000);
console.log(account.getbalance());
//private methods 
console.log();
console.log("private methods");
class game
{
  #checkpassword()
  {
    return false;
  }
  login()
  {
    if(this.#checkpassword())
    {
      console.log("login successful");
    }
    else
    {
      console.log("login failed");
    }
  }
}
let gamer=new game();
gamer.login();
console.log();
console.log("instance of means check whther the object come that  class or not");
console.log();
class Animal{
  
}
class cat extends Animal{
  
}
class rat extends Animal{
  
}
let bitrat=new rat();
let pussycat=new cat();
console.log(pussycat instanceof Animal);
console.log(pussycat instanceof cat);
console.log(pussycat instanceof rat);
console.log(pussycat instanceof Object);
console.log(bitrat instanceof Animal);
console.log(bitrat instanceof cat);
console.log(bitrat instanceof rat);
console.log(bitrat instanceof Object);
console.log();
console.log();
//mixin allows you to use same method with in two class that were needed(not class inheritance is needed)
console.log("mixin");
console.log("Object.assign(leader.prototype,mymixin); this used for mixin using in both classes")
let mymixin= {
  display()
  {
    console.log(this.name+" is walking");
  }};
  class leader
  {
    constructor(name)
    {
      this.name=name;
    }
  }
  class subleader
  {
    constructor(name)
    {
      this.name=name;
    }
  }
  Object.assign(leader.prototype,mymixin);
  Object.assign(subleader.prototype,mymixin);
  let l1= new leader("Deva");
  let l2 = new leader("Ranga");
  l1.display();
  l2.display();
  console.log();
  console.log();
//error handling
  setTimeout(()=>
  {
    try{
      throw new Error("error found");
      
    }
    catch(error)
    {
      console.log(error.message);
    }
  },1000);
