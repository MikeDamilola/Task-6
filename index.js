// alert("Welcome to todays onboarding")


// let firstName = "Damilola"; //const doesnt allow variable re-assignment

// firstName = "Michael";

// console.log(firstName)

// let bioData = {
//     firstName: "Damilola",
//     surName: "Dada",
//     middleName: "Michael",
//     age: 29,
//     gender: "male",
//     nationality: "Nigeria"
// }

// console.log('I am ${age} years old');

// let driveAge = 18;

// let dob = 1994;

// let jacobAge = 2024-dob;

// if( jacobAge >= driveAge){
//     console.log(" jacob can drive")
// } else {
//     console.log(" Jacob cant drive")
// }

// const driverLicense = 1 + Number("1");

// console.log(driverLicense)

// const random = "Jabob";

// console.log( driverLicense == random)

// const driveAge = 18;

// const dob = 1994;

// const jacobAge = 2024- dob;

// const driverLicense = false;

// if( jacobAge > driveAge || driverLicense === true){
//     console.log("Jacob can drive");
// }else {
//     console.log("Jacob can't drive");
// };

// const damiAge = 12;

// const wine = damiAge >= 18 ? "dami can drink" : "dami cant drink";
// console.log(wine)



// document.querySelector(".check").addEventListener("click", function() {
//     document.querySelector(".message").textContent = "My name is damilola";
//     document.querySelector("body").style.backgroundColor = "red";
//     console.log("button clicked");
// });

// const number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);

//FUNCTION

function greeting(name, greeter){
    return console.log(`hello ${name}, my name is ${greeter}`)
}

greeting("odunayomi", "damilola");
greeting("felix");
greeting("adelaja");
greeting("Adebayo");

//ARROW FUNCTIONS
const goodBye = (name)=> {
    return console.log(`Goodbye ${name}, do enjoy your weekend`);
}

goodBye ("Adebayo");

const foodProcess =(apple, orange, lemon) => {
    console.log(apple, orange, lemon)

    const juice = `Juice is made of ${apple} apples, ${orange} oranges, and ${lemon} lemon`;

    return juice;
}

const appleJuice = foodProcess(4,6,2);
const orangeJuice = foodProcess(9,7,3);
const lemonJuice = foodProcess(5,8,1);

console.log(appleJuice)
console.log(orangeJuice)
console.log(lemonJuice)

//FOR LOOP
// console.log("Press up 1");
// console.log("Press up 2");
// console.log("Press up 3");
// console.log("Press up 4");
// console.log("Press up 5");
// console.log("Press up 6");
// console.log("Press up 7");
// console.log("Press up 8");
// console.log("Press up 9");
// console.log("Press up 1");

for ( let pushUpcount = 1; pushUpcount <= 10; pushUpcount++){
    console.log(`press up ${pushUpcount}`);
} //This would help us check the pushupcount until it get to the limit that has been set

//FOR WHILE LOOP

let pressUp = 1;

while(pressUp <= 10){
    console.log(`while: ${pressUp}`);
    pressUp++;
}

