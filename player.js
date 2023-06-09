document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("start-game-button").addEventListener("click", function() {
    var player1Name = document.getElementById("player1Name").value.trim();
    var player2Name = document.getElementById("player2Name").value.trim();

    if (player1Name === "" || player2Name === "") {
      alert("Sila masukkan nama sebelum bermain!");
      return;
    }

    // Pass the player names to the Hangman game HTML using URL parameters
    var startGameButton = document.getElementById("start-game-button");
    startGameButton.href = "Hangman Game.html?player1Name=" + encodeURIComponent(player1Name) + "&player2Name=" + encodeURIComponent(player2Name);
  });
});