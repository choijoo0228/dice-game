// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж хадгална.

//document.querySelector("#score-0").textContent = dice;

//document.querySelector("#score-1").textContent = dice;
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

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

    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
  }
});
