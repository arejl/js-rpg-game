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
    Players.filter(player => player.state == "winner").forEach(player => console.log(`${player.name} a gagné !`));
    Players.filter(player => player.state == "playing").forEach(player => console.log(`${player.name} a ${player.healthPoints} PV, ${player.manaPoints} points de Mana et ${player.damagePoints} points de dommage.`));
    Players.filter(player => player.state == "loser").forEach(player => console.log(`${player.name} a perdu !`));
    console.log("\n");
  }

  choosePlayableCharacter = () => {
    console.log(`Voici les personnages qui seront dans cette partie :`);
    Players.forEach(player => {
      console.log(`${Players.indexOf(player) + 1} - ${player.constructor.name}`);
      console.log(player.description);
    });
    let characterChoice = prompt("Indique le numéro du personnage que tu souhaites incarner pour cette partie :");
    while (typeof(Players[Number(characterChoice)-1]) == "undefined") {
      alert("Choisis un joueur valide");
      characterChoice = prompt("Indique le numéro du personnage que tu souhaites incarner pour cette partie :");
    }
    Players[Number(characterChoice) - 1].humanPlayer = true;
    console.log(`Tu seras donc un ${Players[characterChoice - 1].constructor.name}.`);
    Players[Number(characterChoice) - 1].name = prompt("Comment t'appelles-tu ?");
    console.log("\n Le combat va commencer. Bonne chance à toi ! \n\n");

  }
}
