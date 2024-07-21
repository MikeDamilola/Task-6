// document.querySelector(".check").addEventListener("click", function(){
//     document.querySelector(".message").textContent = " You just checked ";
//     document.querySelector("body").style.backgroundColor = "purple";
//     console.log("Button Clicked");
// });

// document.querySelector(".check").addEventListener("click", function() {
//     const number = Math.trunc(Math.random() * 20) +1;
//     console.log(number);
// });

const number = Math.trunc(Math.random() *20) +1;
let score = 20;

document.querySelector(".check").addEventListener("click", 
     function() {
    const guess =Number(document.querySelector(".guess").value); 

    if(!guess){
        document.querySelector(".message").textContent = 
        "No number was inputed";
    } else if(guess === number){
        document.querySelector(".message").textContent = 
        "You guessed the correct number";
        document.querySelector(".number").textContent =
        number;
        document.querySelector("body").style.backgroundColor
        = "green";
    } else if (guess >= number){
        document.querySelector(".message").textContent = 
        "You guessed a higher number";
        score = score -1;
        document.querySelector(".score").textContent = score;
    } else if(guess <= number){
        document.querySelector(".message").textContent =
        "You guessed a lesser number";
        score = score -1;
        document.querySelector(".score").textContent = score;
    }

});