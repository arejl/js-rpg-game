class Game {
  constructor(turnsLeft = 10) {
    this.turnsLeft = turnsLeft;
  }
  newTurn = () => {
      currentTurn = new Turn();
      currentTurn.startTurn(10 - this.turnsLeft + 1);
      currentTurn.roundGameplay();
      this.turnsLeft--;
  }
  newGame = () => {
    while (this.turnsLeft != 0 && Players.filter(player => player.state == "playing").length != 1) {
      this.newTurn()
    }
    Players.filter(player => player.state == "playing").map(player => player.state = "winner");
    Players.filter(player => player.state == "winner").forEach(console.log(`${player.constructor.name} a gagné !`))
  }
}
let currentTurn = new Turn();
new Game(10).newGame();