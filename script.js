// //Selecting Elements
// var inputbox = document.getElementById("inputbox")
// var result = document.getElementById("result")
// var guesscount = document.getElementById("guesscount")
// var noofguess = 3

// //Generate Random Number From 1 to 5
// var randomnumber = Math.floor(Math.random()*10)+1 // 1 to 10
// if(randomnumber > 5)
// {
//     randomnumber=randomnumber-5
// }

// //Event Handler
// function checkthenumber(){
//     if(inputbox.value == randomnumber)
//     {
//         alert("You Got it Right, Congratulations")
//         result.textContent = "You are Right !"
//     }
//     else
//     {
//         noofguess = noofguess - 1
//         if(noofguess == 0)
//         {
//             alert("You Lost, Generated Random Number is : "+randomnumber)
//         }

//         guesscount.textContent = "Available Guessess : "+noofguess
//         result.textContent = "You are Wrong !"
//     }
// }

// Practice
var inputbox = document.getElementById("inputbox");
var result = document.getElementById("result");
var guesscount = document.getElementById("guesscount");

var noofguess = 3;
var randomnumber = Math.floor(Math.random() * 5) + 1;
console.log("Random Number:", randomnumber);

function checkthenumber() {
  if (inputbox.value == randomnumber) {
    alert("You Got it Right, Congratulations");
    result.textContent = "You are Right!";
    result.style.color = "green";
  } else {
    noofguess -= 1;
    if (noofguess == 0) {
      alert("You Lost, Generated Random Number is: " + randomnumber);
      result.textContent = "You are Wrong!";
      result.style.color = "red";
      guesscount.textContent = "No guesses left!";
      return;
    }
    guesscount.textContent = "Available Guesses: " + noofguess;
    result.textContent = "You are Wrong!";
    result.style.color = "red";
  }
}

