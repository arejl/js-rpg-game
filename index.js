const Grace = new Fighter();
const Ulder = new Paladin();
const Moana = new Monk();
const Draven = new Berzerker();
const Carl = new Assassin();

const Players = [Grace, Ulder, Moana, Draven, Carl];

let currentTurn = new Turn();

new Game().newGame();