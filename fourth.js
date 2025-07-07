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
const marks = [85,97,44,37,76,60];
let result = 0;
for (let i in marks){
    result += marks[i];
}
let average = result / marks.length;
console.log(`The average marks is ${average}`);