/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY
let i = 1;
let layer = "<code>";
let pounds='#';



while (true) {
  height = Number(prompt("Please enter a whole number between 1 and 23."));
  if (height >= 1 && height <= 23 && Number.isInteger(height)) {
    break;
  }
}
let spacesNumber = height-2;

while (i <= height) {
  let spacesActual='';
  for (let counter = 0; counter <= spacesNumber ; counter++){
    spacesActual += "&nbsp;";
  }
  spacesNumber--;
  pounds += "#";
  layer = layer + spacesActual + pounds + "</br>";
  i++;
}
layer=layer+"</code>"
pyramid = document.getElementById("mario-easy-output");
pyramid.innerHTML = layer;

/*for (rowCount = 1; rowCount <= height; rowCount++) {
  for (let i=1; spaceCoun>=0; spaceCount--) {
    layer += "&nbsp";
  }
  for (starCount = 1; starCount = rowCount; starCount++) {
    layer += "#";
  }
  Pyramid = document.getElementById("mario-easy-output");
  Pyramid.innerHTML = "spaceCount" + "starCount";
}
*/
  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY
 let i = 1;
let layer = "<code>";
let pounds='#';

while (true) {
  height = Number(prompt("Please enter a whole number between 1 and 23."));
  if (height >= 1 && height <= 23 && Number.isInteger(height)) {
    break;
  }
}

let spacesNumber = height - 2;

while (i <= height) {
  let spacesActual='';
  for (let counter = 0; counter <= spacesNumber ; counter++){
    spacesActual += "&nbsp;";
  }
  spacesNumber--;
  pounds += "#";
  layer = layer + spacesActual + pounds + "&nbsp;" + "&nbsp;" + pounds + "</br>";
  i++;
}
layer=layer+"</code>"
pyramid = document.getElementById("mario-hard-output");
pyramid.innerHTML = layer;
  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

while (true) {
  card = Number(prompt("Please enter a credit card number"));
  if (Number.isInteger(card)) {
    break;
  }
}

console.log("All good at the start");
let cardString = card.toString();
let luhnValid;
let luhnTotal=0;
let cardLength = cardString.length;
let luhnEvensum=0;
let luhnOddsum=0;
let evenSum = 0
let characterSum = 0;


for (let i = cardLength - 2; i >= 0; i -= 2) {
   evenSum = (2 * Number(cardString[i]));
   let character=String(evenSum)

  for (let j = 0; j <= character.length - 1; j++) {
      characterSum += Number(character[j])
      console.log("luhn pt 1 works" + characterSum);
    }


  luhnEvensum += characterSum

}

for (i = cardLength-1; i >= 0; i -= 2) {
  luhnOddsum += Number(cardString[i]);
  console.log("luhn pt 2 works" + luhnOddsum);
}
luhnTotal=luhnOddsum+luhnEvensum;

if (luhnTotal % 10 == 0){
  luhnValid = true;
  console.log("luhn valid");
}


if ((cardLength == 15) && (luhnValid == true) && (cardString[0] == 3) && ((Number(cardString[1]) == 4) || (Number(cardString[1]) == 7))) {
  let imgOutput = document.getElementById("credit-output");
  imgOutput.innerHTML = "<img src='images/amex.png'>";
  console.log("amex works");
} else if ((cardLength == 16) && (luhnValid == true) && (cardString[0] == 5) && ((Number(cardString[1]) > 0)  && (Number(cardString[1]) < 6))) {
  let imgOutput = document.getElementById("credit-output");
  imgOutput.innerHTML = "<img src='images/mastercard.png'>";
} else if (((cardLength == 13) || (cardLength == 16)) && (luhnValid == true) && (Number(cardString[0]) == 4)) {
  let imgOutput = document.getElementById("credit-output");
  imgOutput.innerHTML = "<img src='images/visa.png'>";
} else {
  imgOutput = document.getElementById("credit-output");
  imgOutput.innerHTML = "<img src='images/invalid.png'>";
}


  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {
let target = Math.random() * 1000;
console.log(target)
let guessCount;
let guess;
let found;
let AllGuesses;
let hint;

  while (true) {
   guess = Number(prompt("Please guess a whole number between 1 and 1000"));
   if (Number.isInteger(guess) && guess >= 1 && guess <= 1000 && guess == target) {
     break;
   }
  }


while (found == false) {
  if (guess > target) {
    hint = "Guess was greater than target. Try again!";
  } else if  (guess < target) {
    hint = "Guess was less than target. Try again!";

  } else if (guess == target) {
    found = true;
    hint = "Congratulations, you've found the number!";
    break;
  }
  AllGuesses = AllGuesses + "guess";
  AllGuesses = document.getElementById("guess-output");
  AllGuesses.innerHTML = AllGuesses + "guessCount" + "hint";
}

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
  let Category;
while (true) {
  windspeed = Number(prompt("Please enter a whole windspeed 0 or greater"));
  if (windspeed >= 0 && Number.isInteger(windspeed)) {
    break;
  }
}
//Need to double check reprompt parameters; will come back to correct.
  if(windspeed < 39){
    Category = document.getElementById("hurricane-output");
    Category.innerHTML = "The skies are calm...";
  } else if ((windspeed >= 39) && (windspeed <= 73)) {
    Category = document.getElementById("hurricane-output");
    Category.innerHTML = "Tropical Storm.";
  } else if ((windspeed >= 74) && (windspeed <= 95)) {
    Category = document.getElementById("hurricane-output");
    Category.innerHTML = "Category 1 Hurricane.";
  } else if ((windspeed >= 96) && (windspeed <= 110)) {
    Category = document.getElementById("hurricane-output");
    Category.innerHTML = "Category 2 Hurricane.";
  } else if ((windspeed >= 111) && (windspeed <= 129)) {
    Category = document.getElementById("hurricane-output");
    Category.innerHTML = "Category 3 Hurricane.";
  } else if ((windspeed >= 130) && (windspeed <= 156)) {
    Category = document.getElementById("hurricane-output");
    Category.innerHTML = "Category 4 Hurricane.";
  } else {
    Category = document.getElementById("hurricane-output");
    Category.innerHTML = "Category 5 Hurricane.";
  }

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */
   let i;
   let score = -1;
   for ( i = 0; i < 5; i++) {
     while (score < 0 || score > 10) {
       score = Number(prompt("Please enter a score between 0.0 and 10.0  " +  "Input " + (i+1)  ));
     }
      scores.push(score);
      score = -1;
    }


   let scoresTotal = scores.reduce((a,b) => a + b , 0);
   let maxSI = scores.indexOf(Math.max(...scores));
   let minSI = scores.indexOf(Math.min(...scores));
   scoresTotal -= (scores[maxSI] + scores[minSI]);
   let scoreAvg = (scoresTotal/4).toFixed(2);

   endScores = document.getElementById("gymnastics-output");
   endScores.innerHTML =  "Discarded: " + scores[minSI] + ", " + scores[maxSI] + "<br/>Score: " + scoreAvg;
  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */
 function reportCard() {

   ///////////////////////// DO NOT MODIFY
   let testTotal = 0; ////// DO NOT MODIFY
   let quizTotal = 0; ////// DO NOT MODIFY
   let homeworkTotal = 0; // DO NOT MODIFY
   ///////////////////////// DO NOT MODIFY

   /*
    * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
    *       should be representative of the sum of the test scores, quiz
    *       scores, and homework scores the user enters, respectively.
    */

   ///////////////////// DO NOT MODIFY
   let tests = 0; ////// DO NOT MODIFY
   let quizzes = 0; //// DO NOT MODIFY
   let homeworks = 0; // DO NOT MODIFY
   ///////////////////// DO NOT MODIFY

      let testScoresDone = false;
       let testScoresInput;
       while (testScoresDone == false) {
        do {
         testScoresInput = prompt("Please enter either a test score between 1 and 100 or -1 to indicate that you have finished entering test scores");
       } while ((!Number(testScoresInput) > 0) || (Number(testScoresInput) > 100));
       //Probably will need to fix this with just "while" later, considering past failures with do whiles.
        if (testScoresInput != -1) {
         testTotal += testScoresInput;
         tests++;
        }else {
         testScoresDone = true;
       }
      }

       let testAvg = (testTotal/tests).toFixed(2);


       let quizScoresDone = false;
       let quizScoresInput;
       while (quizScoresDone == false) {
        do {
         quizScoresInput = prompt("Please enter either a quiz score between 1 and 100 or -1 to indicate that you have finished entering quiz scores");
       } while ((!Number(quizScoresInput) > 0) || (Number(quizScoresInput) > 100))
        if (quizScoresInput != -1) {
         quizTotal += quizScoresInput;
         quizzes++;
        }else {
         quizScoresDone = true;
        }
      }

       let quizAvg = (quizTotal/quizzes).toFixed(2);


       let hwScoresDone = false;
       let hwScoresInput;
       while (hwScoresDone == false) {
        do {
         hwScoresInput = prompt("Please enter either a homework score between 1 and 100 or -1 to indicate that you have finished entering homework scores");
       } while ((!Number(hwScoresInput) > 0) || (Number(hwScoresInput) > 100));

      if (hwScoresInput != -1) {
         homeworkTotal += hwScoresInput;
         homeworks++;
        }else {
         hwScoresDone = true;
        }
      }

       let hwAvg = (homeworkTotal/homeworks).toFixed(2);

       let oaAvg = ((testAvg * .6) + (quizAvg * .3) + (hwAvg * .1)).toFixed(2)

       let Averages = document.getElementById("report-card-output");
       Averages.innerHTML = "Tests: " + testAvg + "<br/>Quizzes: " + quizAvg + "<br/>Homework: " + hwAvg + "<br/>Grade: " + oaAvg;
      /////////////////////// DO NOT MODIFY
      check('report-card', // DO NOT MODIFY
        testTotal, ////////// DO NOT MODIFY
        tests, ////////////// DO NOT MODIFY
        quizTotal, ////////// DO NOT MODIFY
        quizzes, //////////// DO NOT MODIFY
        homeworkTotal, ////// DO NOT MODIFY
        homeworks /////////// DO NOT MODIFY
      ); //////////////////// DO NOT MODIFY
      /////////////////////// DO NOT MODIFY
    }
