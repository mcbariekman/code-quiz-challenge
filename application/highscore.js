function saveHighScore() {
    // Get the user's initials from the input field
    var initials = $("#initials").val();
    // Get the current high scores from local storage or set an empty array if none exists
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    // Add the new high score to the list
    highScores.push({
      initials: initials,
      score: timeLeft
    });
    // Sort the high scores in descending order by score
    highScores.sort(function(a, b) {
      return b.score - a.score;
    });
    // Only keep the top 5 high scores
    highScores = highScores.slice(0, 5);
    // Save the updated high scores to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }

  function gameOver() {
    // Hide the quiz container and show the game over container
    quizContainer.hide();
    $("#gameover-container").show();
  
    // Display the score
    $("#score").text(timeLeft);
  
    // Save the high score
    saveHighScore();
  }

  function showHighScores() {
    // Get the high scores from local storage
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    // Display the high scores in a list
    var list = "<ul>";
    for (var i = 0; i < highScores.length; i++) {
      list += "<li>" + highScores[i].initials + ": " + highScores[i].score + "</li>";
    }
    list += "</ul>";
    $("#high-scores").html(list);
  }
  