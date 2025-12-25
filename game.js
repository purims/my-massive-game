// --- GAME VARIABLES ---
let state = {
    population: 104,
    food: 500,
    wood: 100,
    morale: 100,
    day: 1
};

// --- START THE GAME ---
window.onload = function() {
    updateDisplay();
    loadScenario(1); // Start with Scenario ID 1
};

// --- CORE FUNCTIONS ---

// 1. Load a Scene
function loadScenario(scenarioId) {
    // Find the scenario in the database
    const scene = scenarios.find(s => s.id === scenarioId);
    
    if (!scene) {
        document.getElementById("story-text").innerText = "Game Over. (Or scenario missing!)";
        document.getElementById("choices-area").innerHTML = `<button class="choice-btn" onclick="location.reload()">Restart</button>`;
        return;
    }

    // Update Text
    document.getElementById("story-text").innerText = scene.text;

    // Update Image (if you upload one, otherwise it stays blank)
    // document.getElementById("scene-image").style.backgroundImage = `url('${scene.image}')`;

    // Create Buttons
    const choicesDiv = document.getElementById("choices-area");
    choicesDiv.innerHTML = ""; // Clear old buttons

    scene.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.innerText = choice.text;
        btn.onclick = () => makeChoice(choice);
        choicesDiv.appendChild(btn);
    });
}

// 2. Handle Player Choice
function makeChoice(choice) {
    // Apply changes (if the choice has them)
    if (choice.outcome.food) state.food += choice.outcome.food;
    if (choice.outcome.wood) state.wood += choice.outcome.wood;
    if (choice.outcome.morale) state.morale += choice.outcome.morale;
    if (choice.outcome.pop) state.population += choice.outcome.pop;

    // Passive Drain (People eat every turn)
    consumeResources();

    // Check for Death
    if (checkGameOver()) return;

    // Show Notification
    const notif = document.getElementById("notifications");
    notif.innerHTML = `<p>${choice.log}</p>`;

    // Update Screen Numbers
    updateDisplay();

    // Load Next Scene
    loadScenario(choice.outcome.nextId);
}

// 3. Passive Resource Drain
function consumeResources() {
    // Every turn, people eat. 
    // 100 people eat 10 food.
    const foodEaten = Math.floor(state.population / 10);
    state.food -= foodEaten;
    state.day += 7; // One turn = one week
}

// 4. Update the HTML Numbers
function updateDisplay() {
    document.getElementById("pop-count").innerText = state.population;
    document.getElementById("food-count").innerText = state.food;
    document.getElementById("wood-count").innerText = state.wood;
    document.getElementById("morale-count").innerText = state.morale + "%";
    document.getElementById("date-display").innerText = `Week ${Math.floor(state.day / 7)}, Year 1607`;
}

// 5. Check Game Over
function checkGameOver() {
    if (state.food <= 0) {
        state.food = 0;
        state.population -= 10; // Starvation
        document.getElementById("notifications").innerHTML += "<p style='color:red'>People are starving!</p>";
    }

    if (state.population <= 0) {
        document.getElementById("game-container").innerHTML = "<h1 style='text-align:center; padding-top:100px; color:red'>THE COLONY HAS FAILED.</h1>";
        return true;
    }
    return false;
}
