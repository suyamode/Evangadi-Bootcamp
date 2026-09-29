const cardWrapper = document.getElementById("card-wrapper");

class Cards {
  constructor(name, type, points) {
    this.name = name;
    this.type = type;
    this.points = points;
    this.image = `<img src="./images/${name}.jpg" class="img-fluid rounded" alt="${name}">`;
  }
}

const cardArray = [
  new Cards("jack", "spear", 3),
  new Cards("queen", "spear", 4),
  new Cards("king", "spear", 5),
  new Cards("jocker", "black", 10),
  new Cards("jocker2", "red", 10),
  new Cards("ace", "spear", 2),
];

let drawnCards = [];
let pickedCards = [];
const MAX_PICKS = 3;

document.getElementById("play").addEventListener("click", () => {
  if (cardWrapper) cardWrapper.classList.remove("d-none");

  const resultDiv = document.querySelector(".result");
  if (resultDiv) {
    resultDiv.textContent = `Pick ${MAX_PICKS} cards! Try to find the Jokers.`;
  }

  drawnCards = [...cardArray].sort(() => Math.random() - 0.5);
  pickedCards = [];

  document.querySelectorAll(".display-div").forEach((box, index) => {
    box.style.cursor = "pointer";
    box.removeAttribute("data-flipped");

    // Set face-down card layout
    box.innerHTML = `
      <div class="card-back d-flex flex-column justify-content-center align-items-center p-2 ">
        <h2 class=" text-danger fw-bold">❓</h2>
        <span class="text-warning small mt-2 fw-semibold">Click to Pick</span>
      </div>
    `;

    box.onclick = () => {
      if (
        box.getAttribute("data-flipped") === "true" ||
        pickedCards.length >= MAX_PICKS
      ) {
        return;
      }

      box.setAttribute("data-flipped", "true");
      const card = drawnCards[index];
      pickedCards.push(card);

      // Render clean flex layout to maximize card image area
      box.innerHTML = `
        <div class="d-flex flex-column justify-content-between h-100 p-1 gap-2">
          <div class="cards py-1 text-center">${card.name}</div>
          <div class="cards py-1 text-center">Type: ${card.type}</div>
          <div class="d-flex align-items-center justify-content-center flex-grow-1">
            ${card.image}
          </div>
          <div class="cards py-1 text-center">Points: ${card.points}</div>
        </div>
      `;

      if (resultDiv) {
        const remaining = MAX_PICKS - pickedCards.length;
        if (remaining > 0) {
          resultDiv.textContent = `Picks left: ${remaining}. Click 'Score' when ready!`;
        } else {
          resultDiv.textContent = `Max picks reached! Press 'Score' to calculate your total.`;
        }
      }
    };
  });
});

document.getElementById("score").addEventListener("click", () => {
  const resultDiv = document.querySelector(".result");
  if (pickedCards.length === 0) {
    if (resultDiv)
      resultDiv.textContent = "Pick at least 1 card before scoring!";
    return;
  }

  let baseScore = pickedCards.reduce((acc, card) => acc + card.points, 0);

  const jokerCount = pickedCards.filter(
    (card) => card.name === "jocker" || card.name === "jocker2",
  ).length;

  let finalScore = baseScore;
  let statusText = "";

  if (jokerCount === 2) {
    finalScore = baseScore * 3;
    statusText = "🔥 JACKPOT! Found Both Jokers! (3x Score!)";
  } else if (jokerCount === 1) {
    finalScore = baseScore * 2;
    statusText = "✨ Joker Found! (2x Score!)";
  } else {
    statusText = "No Jokers found! Regular Score.";
  }

  if (resultDiv) {
    resultDiv.innerHTML = `${statusText}<br>Total Score: <strong>${finalScore}</strong>`;
  }
});
