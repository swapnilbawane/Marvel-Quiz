// this is from lesson one
// https://neog.camp/guide/lesson-one
//use question list
// and function to put together a quiz
// all programs are made up of mini functions and data structures
// learning to break a program into parts and then sewing them together is the real learning

var readlineSync = require("readline-sync");
var score = 0;
var userName;
//declaring question answers for quiz and then database of scores. 

var questionsDatabase = 
[
  {
    question:"First Iron man movie was released? ",
    answer: "2008"
  },

  {
    question:"How many  Captain America movies are released? ",
    answer:"3"
  },

  {
    question:"Which year was Black Panther released? ",
    answer:"2018"
  },

  {
    question:"Name of Black Panther actor? ",
    answer:"Chadwick Boseman"
  },

  {
    question:"How many Iron Man movies released? ",
    answer:"3"
  },

  {
    question:"How many Avengers Movies released? ",
    answer:"4"
  },
];

// Mistakes made: did not put comma after one key value added, did not end string with a ""
// there is comma after every key:value and there is comma after each such object. 
// declaring functions 

function welcome() 
{
var userName = readlineSync.question("What is your name? ");
console.log("Welcome "  + userName + " to the Marvel Quiz!");

console.log("-------------------");
console.log("-------------------");

console.log("Here are the rules. Enter numbers or characters as asked in the question. If an actors name is asked, use proper case eg. if actor name is john doe enter as John Doe since the answer is case sensitive");
console.log("This quiz consists of 6 questions and for each answer one point is added");
console.log("All the best. Let the Marvel action begin! ");

console.log("-------------------");
console.log("-------------------");
}

function quiz (questionAsked,answerToQuestion)
  {
    //input
    var userAnswer = readlineSync.question(questionAsked);
// processing
if ( userAnswer === answerToQuestion)
      { // output 
        // console.log("You entered " + answerGiven);
        console.log("You are right");
        score = score + 1;
      }
else 
      { 
        console.log("You entered " + userAnswer);
        console.log("You are wrong");
        console.log("The right answer is" + answerToQuestion);
      }

console.log("The current score is " + score);

    }


function game ()
{
for ( var i=0; i<questionsDatabase.length; i++)
  {
  var currentQuestion = questionsDatabase[i];
  quiz(currentQuestion.question,currentQuestion.answer);
  }

}

function checkScores ()
{
  if ( score<questionsDatabase.length ) 
    { 
      console.log("You answered "+ score + " questions correctly.");
    }

else
    {
    console.log("Congratulations. You completed the game. Your total score is " + score);
    }

}

// running the functions 

welcome();
game();
checkScores();

// final message
console.log("Thank you for playing the game!");

// Note
// The issue here is since we are using separate arrays, we need to know how many entries are there. If we use objects, a function called object.length can automatically fetch the number available currently. So what is the use? the use is if we want to add one more question we need not bother about it since the function takes the length of the object. whereas in using separate arrays we need to update the number again and again. so it is like a fixed quiz. 

// Understanding logic
// Here we declared scores, question and answers
// Then we had a welcome message for rules regulations and taking name as input
// Then we wrote lines to ask quiz question, take user answer and update score value 
// At last we print the total score of user. 