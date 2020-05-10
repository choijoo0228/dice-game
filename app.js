// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer;
// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores;
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;
// Шооны зургийг үзүүлэх эвентийг DOM -оос хайж олоод энд хадгална.
var diceDom = document.querySelector(".dice");
initGame();

// Тоглоомыг шинээр эхлэхэд бэлдэнэ.
function initGame() {
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  document.querySelector(".btn-roll").style.display = "block";
  document.querySelector(".btn-hold").style.display = "block";
}

// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 доторх санамсаргүй тоог гаргаж авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Шооны зургийг вэб дээр гаргаж ирнэ
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  // Тоглогчийн ээлжийн оноог өөрчилнө.
  if (diceNumber !== 1) {
    diceDom.style.display = "block";
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      "" + scores[activePlayer];
    swithToNextPlayer();
  }
});

// Hold товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Уг тоглогчийн цуглуулсан ээлжийн ороог глобал оноон дээр нэмж өгнө.
  scores[activePlayer] += roundScore;

  document.getElementById("score-" + activePlayer).textContent =
    "" + scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    document.querySelector(".btn-roll").style.display = "none";
    document.querySelector(".btn-hold").style.display = "none";
  } else {
    swithToNextPlayer();
  }
});

function swithToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}

function thisPlayerIsWon() {}

document.querySelector(".btn-new").addEventListener("click", initGame);
