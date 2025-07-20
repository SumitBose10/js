// let languages = {
//     english : "Hello",
//     hindi : "Namaste",
//     bengali : "Nomoskar",
//     spainish : "Hola"
// };
// let languagepreference = prompt("Enter your language preference (english, hindi, bengali, spainish): ");

// switch(languagepreference) {
//     case "english":
//         console.log(`${languages.english},sumit`);
//         break;
//     case "hindi":
//         console.log(`${languages.hindi},sumit`);
//         break;
//     case "bengali":
//         console.log(`${languages.bengali},sumit`);
//         break;
//     case "spainish":
//         aconsole.log(`${languages.spainish},sumit`);
//         break;
//     default:
//         alert("Language not supported.");
// }
//array
// const marks = [85,97,44,37,76,60];
// let result = 0;
// for (let i in marks){
//     result += marks[i];
// }
// let average = result / marks.length;
// // console.log(`The average marks is ${average}`);
// let price = [250,645,300,900,50];
// for (let i in price){
//     price[i] = price[i] - (price[i] * 10 / 100); // 10% discount
// }
// console.log(`The price after discount is ${price}`);
// // use of this keyword
// function name (ki,khisti){
//     this.ki = ki;
//     this.khisti = khisti
//     this.describe = function(){
//         console.log(`${this.ki} ekta ${this.khisti}`);
//     }
// }
// let a = new name("pecha","lewra");
// console.log(a.describe());
// // protoype
// let player = {
//     forward : "Gullit"
// };
// let another = {
//     mid : "Lahm",
//     __proto__ : player
// }
// console.log(another.getPrototypeOf("forward"));
// // setting a prototype
// function player(name){
//     this.name = name ;
// }
// player.prototype.position = function(pos){
//     console.log(`${this.name} plays as a ${pos}`);
// }
// let name = new player("Sumit");
// console.log(name.position("DMF"));
// inheritence
// class details {
//     constructor (name,Studentcode){
//         this.name = name;
//         this.Studentcode = Studentcode;
//     }
// }
// class student extends details {
//     constructor(name, Studentcode) {
//         super(name, Studentcode);
//     }
// }
// let person = new student("Sumit","BWU/BCA/23/402");
// console.log(`Name: ${person.name}/n Student Code: ${person.Studentcode}`);
// document.getElementById("submit").addEventListener("click",function(event){
//     event.preventDefault();
//     let email = document.getElementById("email").value;
//     alert(`submitted email is ${email}`);
// });
//calculator
// let num1 = parseInt(document.querySelectorAll(".number").te
// );
// let num2 = parseInt(document.querySelectorAll(".number2").textContent);
// let operator = document.querySelectorAll(".operator").value;
// let result;
// switch(operator) {
//     case "+":
//         result = num1 + num2;
//         break;
//     case "-":
//         result = num1 - num2;
//         break;
//     case "*":
//         result = num1 * num2;
//         break;
//     case "/":
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             alert("Cannot divide by zero");
//             result = null;
//         }
//         break;
//     default:
//         alert("Invalid operator");
//         result = null;
// }
