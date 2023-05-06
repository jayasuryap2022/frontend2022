 /*
 im learning javascript from the scratch 
 after completing javascript next i will  learn react
*/
// window.alert("welcome");
// alert("hai everyone ")
// console.log("welcome");
// varibales 

/*
let  msg ="hello  my name is " + name +" im learning javascript";
var name="surya";
console.log(msg)
*/
/*
let name ="surya";
console.log(name);
*/
let num1=5;
let num2=45;
let result =num1+num2;
console.log(result);

/*
variable names rules
1.variables name cannot be javascript 
keyword 
2.first character cannot be a number 
3.no space -
4.case sensitive 
5.name should be meaningful
*/

/*
var const let  
*/
const name="welcome";
const  msg="how are you";
console.log(name+ " " + msg);

let a ="new "
a="new beginning"
const dob="29-04-2001";
console.log(a + dob);

// data types - primitive data types - integer n=string booleam undefined null
// reference types - array objects function

let fname="surya"; // string
let age =22; // integer
let isyoung =true; // boolean
let lastname;//undefined
let job=null;
// statically typed , dynmaic typed language
// string name="surya";
// name="surya";


// objects
/*
 let username="latha";
 let userage="22"
 let gender="female"
 let address ="belur,tamilnadu"
 */

 let person={username:'latha',userage:22,gender:"female",address:"belur,tamilnadu,india",isSingle:"yes",siblings:{
    brother:'mathan kumar',sister:"none"
 }}; // key:value;
 console.log(person);

 person.age=23;
// dot notation 
console.log(person.siblings);
 console.log(person.username);
 console.log(person['gender']);
console.log(person['gender']);

// arrays 
let favcolors=['red','white','black']; //  empty array
//{}- object
//[] - object
console.log(favcolors);
console.log(favcolors.length);
favcolors[3]="orange";
favcolors[4]=12;
favcolors[5]="strawberry"
console.log(favcolors);
// function 

function greetUser(name,age)
{
    // set of statements 
    let msg =" hi " +" my "+ name +" is "+" im "+ age +" years old " +" welcome to javscript functions ";
    console.log(msg);
}
greetUser("surya",22);
greetUser("latha",22);

function add(num1,num2)
{
    console.log("sum of addition is :"+(num1+num2));
}
add(10,20);

// operators  
/* variable + operators =  expression  */
/* 
javascript operators
 1.arithmetic operators  + - / * ** % /=  ++ -- *= 
 2.comparison operators
 3.assignment operators
 4.logical operators
 5.bitwise operators 
*/

let x=5;
x=x+2;
console.log("value of x is :"+x);
x+=2;
console.log("value of y is :"+x);

// arithmertic operators
// increment and decrement
let number1=5;
let number2=10;
console.log("value of num1 and num2 is :"+(number1+number2));
console.log("value of num1 and num2 is :"+(number1-number2));

console.log("value of num1 and num2 is :"+(number1*number2));
console.log("value of num1 and num2 is :"+(number1/number2));
console.log("value of num1 and num2 is :"+(number1%number2));
console.log("value of num1 and num2 is :"+(number1**number2));

console.log(number1++);
console.log(++ number2+ " pre increment ");

console.log( number2-- +" post decrement  ")

// comparison operator 
let c=5;
console.log(c<5);

console.log((c<=5) +" less than or equal");

let d=4;
console.log((d==10) + " equal to ");

console.log((d!=4 )+ " not equal to ");

let e=10;
let f=12;
console.log((f>10) +" greater than");

//  comparison of different type

console.log('1'<5); // 

console.log(true==1);

// strict equality operator  (datatype + value )

console.log(1===1); 

console.log('1'===1)// string === number 

// lose equality operator 
console.log(1==1);

console.log('1'==1);  // string ==  number 

// ternary operator

/*if person age is more than 18 they are adult category else child category */

let myage=21;
let type=age>18 ? "adult":"child ticket";

console.log(type);

//  condtion ? value1:value2

// logical operators -c  && || !

// && -  return if operands are true
//|| -  return if any one of operands are true

// logical operators
/*
high income, cibilscore - loan eligible , ineligible
*/

let highincome=true;
let cibilscore =true;
console.log(highincome && cibilscore+" high")

let eligibleperson = highincome || cibilscore

console.log("status:"+eligibleperson);

// logical operators with non -boolean values
/*
falsy
undefined
null 
0 false 
'' " "
nan 
*/

// truty - anything that is not falsy is - truthy
/*
let usercolor="red";
let defaultcolor="blue";

let currentcolor= username || defaultcolor
console.log("selected color:"+currentcolor);
*/

//  bitwise operators
//  human code -- machine code (0,1)
//  1 -  0001
//  2  - 0010
//  3  -  0011
//  4 -    0100
//  5  -  0101
 

const readpermission = 4;
const  writepermission= 2;
const  executepermission =1;

let mypermission =0;

mypermission = mypermission | writepermission;



