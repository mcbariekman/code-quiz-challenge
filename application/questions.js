// Quiz Questions and Answers
var quiz = [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
          answer: "Hyper Text Markup Language"
        },
        {
          question: "What does CSS stand for?",
          options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
          answer: "Cascading Style Sheets"
        },
        {
          question: "What does JS stand for?",
          options: ["JavaScript", "JavaSource", "JavaSockets", "JavaServer"],
          answer: "JavaScript"
        }
      ];
 
  // Define the start button and quiz container
  var startBtn = $("#start-btn");
  var quizContainer = $("#quiz-container");
 
  // Define variables for the quiz
  var timeLeft = 30;
  var currentQuestion = 0;
 
  // Define the click event listener for the start button
startBtn.click(function() {
    // Hide the start button and show the quiz container
    startBtn.hide();
    quizContainer.show();
    // Start the quiz
    startQuiz();
  });
 
  // Function to start the quiz
  function startQuiz() {
    // Define the variables for the timer and current question
    var timeLeft = 30;
    var currentQuestion = 0;
 
    // Display the first question
    displayQuestion(currentQuestion);
 
    // Attach click event listener for the option buttons
    $("#options").on("click", ".option-btn", function() {
      var question = quiz[currentQuestion];
      if ($(this).text() === question.answer) {
        // Answer is correct, move to the next question
        currentQuestion++;
      } else {
        // Answer is incorrect, subtract 10 seconds from the timer and move to the next question
        timeLeft -= 10;
        currentQuestion++;
      }
      if (currentQuestion < quiz.length) {
        // Display the next question
        displayQuestion(currentQuestion);
      } else {
        // Game over
        gameOver();
      }
    });
 
    // Start the timer
    var timer = setInterval(function() {
      timeLeft--;
      $("#time").text(timeLeft);
      if (timeLeft <= 0 || currentQuestion >= quiz.length) {
        clearInterval(timer);
        gameOver();
      }
    }, 1000);
  }
 
  // Function to display a question
  function displayQuestion(questionIndex) {
    var question = quiz[questionIndex];
    $("#question").text(question.question);
    var options = "";
    for (var i = 0; i < question.options.length; i++) {
      options += "<button class='btn btn-primary option-btn'>" + question.options[i] + "</button>";
    }
    $("#options").html(options);
  }
 
// Function to show the game over screen
function gameOver() {
  // Hide the quiz container and show the game over container
  quizContainer.hide();
  $("#gameover-container").show();

  // Display the score
  $("#score").text(timeLeft);
}