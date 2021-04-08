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

const Players = [Grace, Ulder, Moana, Draven, Carl, Hornibus, Shrek];

let currentTurn = new Turn();

new Game().newGame();