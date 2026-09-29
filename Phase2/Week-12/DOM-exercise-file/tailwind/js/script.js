const cardWrapper = document.getElementById("card-wrapper");

class Cards {
  constructor(name, type, points) {
    this.name = name;
    this.type = type;
    this.points = points;

    this.image = `<img src="./images/${name}.jpg" class="h-28 w-auto object-contain rounded mx-auto" alt="${name}">`;
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
  if (cardWrapper) cardWrapper.classList.remove("hidden");

  const resultDiv = document.querySelector(".result");
  if (resultDiv) {
    resultDiv.textContent = `Pick ${MAX_PICKS} cards! Try to find the Jokers.`;
  }

  drawnCards = [...cardArray].sort(() => Math.random() - 0.5);
  pickedCards = [];

  document.querySelectorAll(".display-div").forEach((box, index) => {
    box.removeAttribute("data-flipped");

    // Face-down card template styled purely with Tailwind classes
    box.innerHTML = `
      <div class="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border-2 border-dashed border-[goldenrod] rounded-lg flex flex-col items-center justify-center p-2 transition-colors">
        <h2 class="m-0 text-red-500 font-extrabold text-3xl">❓</h2>
        <span class="text-amber-400 text-xs mt-2 font-semibold">Click to Pick</span>
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

      // Flipped card template with full flex alignment and crisp text badges
      box.innerHTML = `
        <div class="flex flex-col justify-between h-full p-2">
          <div class="bg-amber-50 text-slate-900 font-bold text-xs py-1 px-2 rounded text-center truncate shadow-sm">${card.name}</div>
          <div class="bg-amber-50 text-slate-900 font-bold text-xs py-1 px-2 rounded text-center truncate shadow-sm my-1">Type: ${card.type}</div>
          
          <div class="flex-1 flex items-center justify-center min-h-0 py-1">
            ${card.image}
          </div>
          
          <div class="bg-amber-50 text-slate-900 font-bold text-xs py-1 px-2 rounded text-center truncate shadow-sm">Points: ${card.points}</div>
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
