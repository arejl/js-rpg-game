class Game {
  constructor(turnsLeft = 10, status = "playing") {
    this.turnsLeft = turnsLeft;
    this.status = status;
  }
  newTurn = () => {
    if (this.turnsLeft == 0) {
      this.status = "ended";
      let finalPlayers = Players.filter(player => player.state == "playing").map(player => player.state = "winner");
    }
    else if (this.status == "playing") {
      const currentTurn = new Turn();
      currentTurn.startTurn(10 - this.turnsLeft + 1)
      this.turnsLeft--;
    }
  }
}