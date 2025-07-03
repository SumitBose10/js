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
let name = prompt("Enter your name");
let username =`@${name}${name.length}`;
console.log("username=",username);