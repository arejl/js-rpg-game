class Game {
  constructor(turnsLeft = 10) {
    this.turnsLeft = turnsLeft;
  }

  newTurn = () => {
    currentTurn = new Turn();
    currentTurn.startTurn(10 - this.turnsLeft + 1);
    currentTurn.roundGameplay();
    Game.watchStats();
    this.turnsLeft--;
  }

  newGame = () => {
    console.log("💀💀💀 Bienvenue dans le Donjon de la Mort 💀💀💀");
    console.log("\n");
    this.choosePlayableCharacter();
    while (this.turnsLeft > 0 && Players.filter(player => player.state == "playing").length > 1) {
      this.newTurn()
    }
    Players.filter(player => player.state == "playing").map(player => player.state = "winner");
    Game.watchStats();
  }

  static watchStats = () => {
    Players.filter(player => player.state == "winner").forEach(player => console.log(`${player.constructor.name} a gagné !`));
    Players.filter(player => player.state == "playing").forEach(player => console.log(`${player.constructor.name} a ${player.healthPoints} PV, ${player.manaPoints} points de Mana et ${player.damagePoints} points de dommage.`));
    Players.filter(player => player.state == "loser").forEach(player => console.log(`${player.constructor.name} a perdu !`));
    console.log("\n");
  }

  choosePlayableCharacter = () => {
    console.log(`Voici les personnages qui seront dans cette partie :`);
    Players.forEach(player => {
      console.log(`${Players.indexOf(player) + 1} - ${player.constructor.name}`);
      console.log(player.description);
    });
    let characterChoice = prompt("Indiquez le numéro du personnage que vous souhaitez incarner pour cette partie :");
    while (typeof(Players[Number(characterChoice)-1]) == "undefined") {
      alert("Choisissez un joueur valide");
      characterChoice = prompt("Indiquez le numéro du personnage que vous souhaitez incarner pour cette partie :");
    }
    Players[Number(characterChoice) - 1].humanPlayer = true;
  }
}
