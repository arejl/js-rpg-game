class Turn {

  startTurn = (round) => {
    console.log(`Round numéro ${round}`);
  }

  chooseEnemy = (player) => {
    let index = Players.indexOf(player);
    let attackablePlayers = Players.filter(player => Players.indexOf(player) != index && player.state == "playing");
    console.log("Voici les joueurs encore en jeu :");
    attackablePlayers.forEach(player => console.log(`${attackablePlayers.indexOf(player) + 1} -- ${player.constructor.name}`));
    let enemyChoice = prompt(`Qui veux-tu attaquer ?`);
    return attackablePlayers[Number(enemyChoice) - 1];
  }

  chooseAttack = (player) => {
    let enemy = "";
    console.log(`${player.constructor.name}, à ton tour de jouer`);
    let attackChoice = prompt("Choisis ton attaque : 1. attaque normale 2. attaque spéciale");
    if (Number(attackChoice) == 1) {
      enemy = this.chooseEnemy(player);
      if (enemy.constructor.name == "Fighter" && enemy.activatedFighter == 1)
      { player.dealDamage(enemy, player.damagePoints - 2) }
      else { player.dealDamage(enemy, player.damagePoints) }
    }
    else if (Number(attackChoice) == 2) {
      switch (player.constructor.name) {
        case "Fighter":
          enemy = this.chooseEnemy(player);
          if (enemy.constructor.name == "Fighter" && enemy.activatedFighter == 1)
          { enemy.healthPoints += 2 };
          player.darkVision(enemy);
          break;
        case "Paladin":
          enemy = this.chooseEnemy(player);
          if (enemy.constructor.name == "Fighter" && enemy.activatedFighter == 1)
          { enemy.healthPoints += 2 };
          player.healingLighting(enemy);
          break;
        case "Monk":
          player.heal();
          break;
        case "Berzerker":
          player.rage();
          break;
        case "Assassin":
          enemy = this.chooseEnemy(player);
          player.shadowHit(enemy);
          break;
      }
    }
  }

  roundGameplay = () => {
    Players.filter(player => player.state == "playing").forEach(player => this.chooseAttack(player));
    Players.filter(player => player.state == "playing").forEach(player => console.log(`${player.constructor.name} a ${player.healthPoints} PV, ${player.manaPoints} points de Mana et ${player.damagePoints} points de dommage.`));
    Players.filter(player => player.state == "loser").forEach(player => console.log(`${player.constructor.name} a perdu !`));
  }
}