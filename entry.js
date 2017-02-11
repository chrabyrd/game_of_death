import Game from "./scripts/game";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const resetButton = document.getElementById("resetButton");
  const rulesButton = document.getElementById("rulesButton");
  const rulesModal = document.getElementById("rulesModal");

  const game = new Game(ctx);

  canvas.addEventListener('click', (e) => game.handleClickEvent(e), false);
  resetButton.addEventListener('click', () => game.handleResetEvent(), false);
  rulesButton.addEventListener('click', function() {
    rulesModal.style.display = "block";
  });

  window.onclick = function(event) {
    if (event.target === rulesModal) {
        rulesModal.style.display = "none";
    }
};
});
