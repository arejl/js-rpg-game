const Grace = new Fighter();
const Ulder = new Paladin();
const Moana = new Monk();
const Draven = new Berzerker();
const Carl = new Assassin();
const Hornibus = new Wizard();
const Shrek = new Ogre();

const Players = [Grace, Ulder, Moana, Draven, Carl, Hornibus, Shrek];

let currentTurn = new Turn();

new Game().newGame();