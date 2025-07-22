// let str = "sumit";
// for (let i of str){
//     console.log("i=",i);
// }
// for in loop
// let student ={
//     name: "sumit",
//     age: 20,
//     city: "Habra"
// };
// for (let key in student){
//     console.log("key=",key);
//     console.log("value=",student[key]);
// }
// for(let i = 0;i<=100;i++){
//     if(i%2==0){
//         console.log(i,"Even number");
//     }
// }
// let n = 47;
// while (true) {
//     let number = prompt("Enter a number");
//     if (number == n) {
//         console.log("You guessed the number correctly");
//         break;
//     }
// }
// template literals
// let obj ={
//     item:"pen",
//     price:10
// };
// alert(`The price of the ${obj.item} is ${obj.price}`);
//username
// let name = prompt("Enter your name");
// let username =`@${name}${name.length}`;
// console.log("username=",username);
// let arr = [1,2,3,4,5,6,7,8];
// for (let i = 0; i < arr.length; i++) {
//     setInterval(() => {
//         console.log(arr[i]);
//     },3000);
// }
// promises
// function iseven(){
//     return new Promise((resolve, reject) => {
//         let number = 9;
//         if(number%2==0){
//             resolve("The number is even");
//         }else{
//             reject("The number is odd");
//         }
//     });
// }
// let result = iseven();
// result.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// });

// another promise example
function fetchdata(){
    return new Promise((resolve,reject)=>{
       let fetch = true;
       if(fetch){
           console.log("data fetched");
       }else{
           console.warn("data is unavialable");
       }
    });
}
let response = fetchdata();
response.then((msg)=>{
    console.log(msg);
}).catch((error)=>{
    console.log(error);
});
// //prototypial inheritance
// function person(name){
//     this.name = name ;
// }
// person.prototype.greet = function(){
//    console.log(`hello, my name is ${this.name}`); 
// };
// let p =  new person("Sumit");
// p.greet();
// promise and promise all
function name(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Sumit");
        }, 5000);
    });
}
function age(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(20);
        }, 7000);
    });
}
async function userdata(params) {
    try {
        console.log("Fetching user data...");
        const [userName, userAge] = await Promise.all([name(), age()]);
        console.log(`User Name: ${userName}`);
        console.log(`User Age: ${userAge}`);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}
userdata();