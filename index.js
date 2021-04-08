const Grace = new Fighter();
Grace.name = "Grace";
const Ulder = new Paladin();
Ulder.name = "Ulder";
const Moana = new Monk();
Moana.name = "Moana";
const Draven = new Berzerker();
Draven.name = "Draven";
const Carl = new Assassin();
Carl.name = "Carl";
const Hornibus = new Wizard();
Hornibus.name = "Hornibus";
const Shrek = new Ogre();
Shrek.name = "Shrek";

const definePlayers = (availablePlayers, n) => {
  let chosenPlayers = [];
  let randomIndex = 0;
  for (let i = 0; i < n; i++) {
    randomIndex = Math.floor(Math.random() * availablePlayers.length);
    chosenPlayers.push(availablePlayers[randomIndex]);
    availablePlayers.splice(randomIndex, 1);
  }
  return chosenPlayers;
}

const Players = definePlayers([Grace, Ulder, Moana, Draven, Carl, Hornibus, Shrek], 5)

let currentTurn = new Turn();

new Game().newGame();