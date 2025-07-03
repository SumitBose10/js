let languages = {
    english : "Hello",
    hindi : "Namaste",
    bengali : "Nomoskar",
    spainish : "Hola"
};
let languagepreference = prompt("Enter your language preference (english, hindi, bengali, spainish): ");

switch(languagepreference) {
    case "english":
        console.log(`${languages.english},sumit`);
        break;
    case "hindi":
        console.log(`${languages.hindi},sumit`);
        break;
    case "bengali":
        console.log(`${languages.bengali},sumit`);
        break;
    case "spainish":
        aconsole.log(`${languages.spainish},sumit`);
        break;
    default:
        alert("Language not supported.");
}
