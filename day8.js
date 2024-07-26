//Activity 1 - Template Literals

//Task 1
let my_name="Nikhil Sharma";
let my_age=19;
let str= `My name is ${my_name} and my age is ${my_age}`;
console.log(str);
// Output
// My name is Nikhil Sharma and my age is 19


//Task2
let s2= `My name is Nikhil Sharma
My age is 19
I study at Nit Kurukshetra
My major is cs`
console.log(s2);            
//Output
// My name is Nikhil Sharma
// My age is 19
// I study at Nit Kurukshetra
// My major is cs

//Activity-2 - Destructuring

//Task-3

let arr = [1,2,3,4,5,6,7,8,9,10];
let [x,y,...rest] = arr;
console.log(x);
console.log(y);
//Output
// 1
// 2

//Task-4

const book = {
    title: "Life of Joy",
    author: "abc"
};
let {title,author} = book
console.log(title);
console.log(author);
//Output
// Life of Joy
// abc


//Activity-3 Spread and Rest Operators

//Task-5
let arr1=[1,2,3,4,5]
let arr2=[...arr1,6,7,8];
console.log(arr2);
//Output
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]

//Task-6

function allSum(...args){//Use of rest operator
    let sum=0;
    for(let arg of args){
        sum=sum+arg;
    }
    return sum;
}
let array=[1,2,3,4,5];
let sum = allSum(1,2,3,4,5,...array); // Use of spread in spreading the array
console.log(sum);
//Output
//30

//Activity-4 Deafault Parameters

//Task-7
let product=(num1,num2=1)=>{
    let ans=num1*num2;
    return ans;
}
console.log(product(5));
console.log(product(5,2));
//Output
// 5
// 10

// Activity-5 Enhanced Object Literals

//Task-8

let obj1 = {
    name : "Nikhil Sharma",
    species : "human",
    age : 19,
    talk(){
        console.log(`Hello my name is ${this.name} and my age is ${this.age}.I am a ${this.species}.`);
    }
}
obj1.talk()
//Output
//Hello my name is Nikhil Sharma and my age is 19.I am a human.

//Task-9
let age = 19 
let key1 = "ageIsMoreThan10"
let key2 = "ageIsMoreThan20"
const obj2 = {
    name : "Nikhil Sharma",
    [age>20 ? key2 : key1] : true
}
console.log(obj2);
//Output
//{ name: 'Nikhil Sharma', ageIsMoreThan10: true }