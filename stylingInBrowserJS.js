console.log("Hello World");

var a = 99;

var c = 8.324;

console.log((`The sum of the variables a & c is ` + (a + c)));

// String & string methods in JavaScript .

var string = `Hurray ! This is the first step in learning JavaScript`;
//var is a global variable
var string = `"But since var is global , we can easily overwrite the previous declared variable"`;

console.log(string);

// Various ways to concatenate or add strings .

var str1 = `fewljfrlk`, str2, str3, str4;

str2 = `dwndflk`;
str3 = `fmjlmf`;
str4 = `erefme;lfm`;

// Here's a constant , which if you try to update it shows error .
const j = `*`;
// let j = 4 ;  //Shows error .

var newStr = `${str1} is a string we add with other strings ${str2} ${str3} ${str4} `;
console.log(newStr);

// We can also do 
console.log(str1 + str2 + str3 + str4);
//Dynamically alloted string
var dynamicString = new String(" This is a dynamically alloted string\n ");

console.log(dynamicString);



//To add or change text/content in html we do the following 
document.getElementById('bask-2').innerHTML = `<h2>Hey! I used JS to change the content in the main html page . </h2>`

console.log(`dynamicString = ${dynamicString}`);
//String Functions  
//Gives First occurrence(position/index) of the substring .
var pos = dynamicString.indexOf(`is`);
console.log(`The first occurrence(1-based indexing) of the substring "is" in dynamicString is ${pos}\n`);

//Gives First occurrence(position/index) of the substring .
var pos2 = dynamicString.lastIndexOf(`is`);

console.log(`The last occurrence(1-based indexing) of the substring "is" in dynamicString is ${pos2}\n`);

// To slice out a substring from a string 
var substr = newStr.slice(1, 8);
//string.slice(index-1 , index-2)Slices out a string from index-1 to (index-2)-1 
// console.log(substr) ;
var substr2 = newStr.substring(1, 8);
//Works same as the slice() function but don't take negative arguments .
console.log(substr2);

//string.substr(start-index , length) results in a string with the argument length from the starting index of the actual string .
var substr3 = newStr.substr(1, 4);
console.log(substr3);

// This function is used to replace a substring with the new string .
var replacedString = newStr.replace(`is`, `are`); //str.replace("actual string" , "new string")
console.log(newStr);
console.log(replacedString);

//To make the whole string in upperCase 
strUpper = dynamicString.toUpperCase();
console.log(strUpper);
//To make the whole string in LowerCase
strLower = dynamicString.toLowerCase();
console.log(strLower);
// Function to concatenate strings .
var strConcat = str1.concat(` --> This is just a string of some random words \n `);
console.log(strConcat);

var strWithWhitespace = `It is a   string      with too    many whitespaces .       `
// The str.trim() can only trim whitespaces present at the start or end of the string .
console.log(strWithWhitespace.trim());

//To get the character at a particular index of a string , we use str.charAt(index)
var char = newStr.charAt(4);
console.log(char);

// to fetch the ASCII code of a character in the string we use str.charCodeAt(index)
var charCode = newStr.charCodeAt(4);
console.log(charCode);

// Next , we define an object in JS .

let varb = 34;

// Arrays & Objects in JavaScript .

// Infact array is also an object in JS .

// Object student
let student = {
    name: `Archi`,
    ID: `002011501086`,
    // SEM No. : `2nd` //Will Show error if we give spaces in keys .
    "SEM No.": `2nd`
}

// console.log(student) ;
//Write object.key in in-browser JS console to show output .

console.log(student.name);
console.log(student.ID);
console.log(student["SEM No."]); // console.log(student.SEM No.) shows error unlike others since it's a phrase

//Let's move to arrays .
// Unlike arrays in other programming languages , we can use various types of data in a single array itself .
let arr = [109, 23, 46, `edheu`, `rjfi`];
// console.log(arr);
// console.log(arr[2]) ;

// Dynamic allocation of array 
let arr2 = new Array(123678, 231, `hey`, `edheu`, `rjfi`);
// Sorting the array , we use method array.sort() ;
let arrSorted = arr.sort();
// console.log(arrSorted) ; 
// To push an element in the array we can perform the following :
arr2.push(`Pushed element`);
console.log(arr2.length);
console.log(arr2);

// Functions in JavaScript

function greet(name) {
    console.log("Namaste JavaScript to " + name);
}

let name1 = `name 1`;
let name2 = `name 2`;
let name3 = `name 3`;

greet(name1);
// greet(name2);
// greet(name3);

// Let's make a function which returns a value .

function min(a, b) {
    if (a > b) {
        return b;
    }

    else { return a; }
}

let val = min(18, 99.78);
console.log(val + ` is the minimum .`);

//Interaction using JS , this makes the web-page lively and allows user - server interaction 
// alert("Hey ! Welcome to the base :) ");
// let ans = confirm(`Click ok if you are above 18`) ;
// let res = prompt(`What's your age ?`, 18);
// if (res >= 18)
//     console.log(`Ok`);
// window.location = `http://127.0.0.1:5500/html+css.html` ;

// else {
//     console.log(`Sorry ! You don't have access to the site .`);
//     window.location = `https://www.google.com`;
// }

// Loops in JavaScript .
// First , we have For Loops .
let arr_1 = new Array(1, 2, 3, 4, 5, 6, 7);
// for (let index = 0 ; index < arr_1.length ; index++) 
// {  
//     const element = arr_1[index];
//     console.log(element) ;
// }

// Or we can also write 

// arr_1.forEach(f(ele))
// {
//     const element = arr_1[index];
//     console.log(element);
// }


for (element of arr_1) {
    console.log(element + ` is an element of the defined array .`);
}

// There are also for in loops & for of loop as well but we shall show for in loop as of now .

let object = {
    name: `Kane`,
    "Enrollment ID": ` 002011501086`,
    Address: `FLorida`,
    PIN: 345609

}

// For in Loop is generally used in fetching values in an object .
for (key in object) {
    console.log(`The value of ${key} is ${object[key]}`);
}

// Let's checkout the while & do-while loop in JS .
let i = 9;
// while(i < 15)
// {
//     console.log("I am here , can you see me ?") ;
//     i++ ;
// }

// Tip : We can output a wrong code using the loophole in do-while loop , let's see how .

do {
    console.log(`${i} is less than ` + 5);
} while (i < 5);

// Navigating The DOM 

let bask = document.getElementById('bask-3'); // This fetches us the element by ID alongwith all codes in it on our console .
console.log(bask);

let class_Element = document.getElementsByClassName('gridItems');
console.log(class_Element);
// console.log(class_Element[2]) ; --> use it to target any single class .
// Since there can be many items with the same class assigned to them , it shows all those elements in the console .

// There can be other selectors too .
let select = document.querySelector('p'); // Returns only the initial element . 
console.log(`Selector returns `, select);

let select_2 = document.querySelectorAll('p');
// Returns a NodeList of all elements of the respective query .
console.log(select_2);
// More functions in JavaScript 

// setTimeout --> Runs a function once after a set Time
// setInterval --> Runs a function repeatedly after a set interval .
function fcuk() {
    console.log(`Hey Bitch ! How dare you open Console , fcuk off`);
}

// timeout = setTimeout(fcuk , 5000) ;
// console.log(timeout) ;
setTimeout(fcuk, 5000);
// If for any reason , you want that the function stops use clearTimeout() function .
// clearTimeout(timeout) ;

intervalId = setInterval(fcuk, 1000);
// console.log(intervalId) ;
// setInterval(fcuk , 1000) ;
clearInterval(intervalId);

// Now we'll see using Date & Time in JS.

let timeis = new Date();
console.log(timeis);
// As Date() is a constructor , we can also assign any custom date to it .

// let newDt = new Date(2040 , 10 , 10) // (year , month , date , hour , min,..) or
let newDt = new Date("2040-10-10");
console.log(newDt);

// We can also fetch the date , time using getDate() functions .
let day = newDt.getDay();
console.log(day);

let month = newDt.getUTCMonth();// in UTC
console.log(month);
// Similarly , we can use time , min , hours etc . 

function displayTime() {
    //  time.innerHTML= new Date().toLocaleTimeString(); // It gives day , date , time
    time.innerHTML = new Date().toLocaleString(); // It gives only the date & time .
    //  timeNow.innerHTML = getHours() ;

}
setInterval(displayTime, 1000);
displayTime();
// Arrow functions in JS. This is a shorthand for writing functions .

// let sum = (a, b) => (a+b) ;

// let f , b ;

let sum = (f, b) => {

    console.log(`The sum of the numbers `, +f, ` & `, +b, ` is ` + (f + b));
    // return a+b ;
    return;
}

let half = a => a / 2;

// Now we move to the events & event-listener in JavaScript .

function showOrNot() {
    let respo = document.getElementById('boxmodel');
    if (respo.style.display != 'none')
        alert(`Hey Thanks !! You can fcuk off now :)`);

    else
        respo.style.display = 'block';
}

let box = document.getElementById('bask-2');
box.addEventListener('mouseover', function run() {
    console.log(`Mouse pointer inside`);
});

box.addEventListener('mouseout', function run() {
    console.log(`Mouse went outside`);
});

// let tanhj = document.getElementsByClassName(`container[0]`) ;
// tanhj.addEventListener('keydown' , function run()
// {
//     console.log(`Hey there , you might have pressed a key .`) ;
// }) ;

let lul = document.getElementById(`lol`);
lul.addEventListener(`onclick`, function run() {
    console.log(`LOL XD`);

});

// Here we get to learn about the Math Object & its functions in JS .
let maths = Math;
let math_pi = Math.PI;
console.log(maths);
console.log(`The value of pi is `, Math.PI);
console.log(`The value of sin(30) is `, Math.sin((30 * math_pi) / 180));
console.log(`The truncated value of 50.924 `, Math.trunc(50.924));
console.log(`Any random number between 2 & 3 is `, (2 + Math.random()));
console.log(`Euler's constant equals `, Math.E);
console.log(`The number of leading bits in 43 in 32-bit binary number `, Math.clz32(43));

// JavaScript Object Notation or JSON.
let bus = {
    agenda: "Solve real world issues",
    base: " On tech",
    year: "2022"
}
// Here we created an object . Suppose we need to transport this over the network , we can do it one by one but that is a hectic work when the object is larger & complexer .

// Then comes the JSON which proves to be handy .

let myObj = JSON.stringify(bus);
// JSON helps in stringifying a valid object when then becomes easier for transportation .
// We can also edit the string as per our wishes .
console.log(bus);
let edit = myObj.concat(`fkoprfkpo , oisdfdop`);
console.log(myObj);
console.log(edit); // As it isn't a valid object we can't objectify .
// let editObj = JSON.parse(edit) ;  --> Shows error

let h = JSON.parse(myObj); // That is JSON can also parse(objectify) a valid string as shown 
console.log(h);

// Learning about custom modules in Node.JS 


const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("section");

const animateProgressBar = () => {
    let scrollDistance = - section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight));
    let value = Math.floor(progressWidth);

    progressBar.style.width = value + "%";

    if (value < 0) {
        progressBar.style.width = "0%";
    }
}

window.addEventListener("scroll", animateProgressBar);