class Turn {

  startTurn = (round) => {
    console.log(`Round numéro ${round}`);
  }

  chooseEnemy = (player) => {
    let index = Players.indexOf(player);
    let attackablePlayers = Players.filter(player => Players.indexOf(player) != index && player.state == "playing");
    console.log("Voici les joueurs encore en jeu :");
    attackablePlayers.forEach(player => console.log(`${attackablePlayers.indexOf(player) + 1} -- ${player.constructor.name} -- ${player.healthPoints} PV`));
    let enemyChoice = prompt(`Qui veux-tu attaquer ?`);
    return attackablePlayers[Number(enemyChoice) - 1];
  }

  chooseAttack = (player) => {
    let enemy = "";
    console.log(`${player.constructor.name}, à ton tour de jouer`);
    if (player.constructor.name == "Assassin" && player.activatedAssassin > 0) {
      this.assassinAttack(player);
    }
    else {
      let attackChoice = prompt("Choisis ton attaque : 1. attaque normale 2. attaque spéciale");
      if (Number(attackChoice) == 1) {
        enemy = this.chooseEnemy(player);
        if (enemy.constructor.name == "Fighter" && enemy.activatedFighter == 1)
          { player.dealDamage(enemy, player.damagePoints - 2) }
        else if (enemy.constructor.name == "Assassin" && enemy.activatedAssassin == 1)
        {
          console.log("L'assassin évite l'attaque grâce à son attaque spéciale !")
        }
        else { player.dealDamage(enemy, player.damagePoints) }
      }
      else if (Number(attackChoice) == 2) {
        switch (player.constructor.name) {
          case "Fighter":
            enemy = this.chooseEnemy(player);
            if (enemy.constructor.name == "Fighter" && enemy.activatedFighter == 1) {
              enemy.healthPoints += 2;
              player.darkVision(enemy);
            }
            else if (enemy.constructor.name == "Assassin" && enemy.activatedAssassin == 1) {
              enemy.healthPoints += 5;
              player.darkVision(enemy);
              console.log("L'assassin évite l'attaque grâce à son attaque spéciale !")
            }
            else { player.darkVision(enemy); };
            break;
          case "Paladin":
            enemy = this.chooseEnemy(player);
            if (enemy.constructor.name == "Fighter" && enemy.activatedFighter == 1) {
              enemy.healthPoints += 2
              player.healingLighting(enemy);
            }
            else if (enemy.constructor.name == "Assassin" && enemy.activatedAssassin == 1)
            {
              enemy.healthPoints += 4;
              player.healingLighting(enemy); 
              console.log("L'assassin évite l'attaque grâce à son attaque spéciale !")
            }
            else { player.healingLighting(enemy); };
            break;
          case "Monk":
            player.heal();
            break;
          case "Berzerker":
            player.rage();
            break;
          case "Assassin":
            player.activatedAssassin = 2;
            console.log("L'assassin prépare son attaque !");
            break;
        }
      }
    }
  }

  assassinAttack = (player) => {
    console.log("L'assassin lance son attaque spéciale !");
    let enemy = this.chooseEnemy(player);
    if (enemy.constructor.name == "Assassin" && enemy.activatedAssassin == 1) {
      enemy.healthPoints += 7;
      player.shadowHit(enemy); 
      console.log("L'assassin évite l'attaque grâce à son attaque spéciale !")
    }
    else { player.shadowHit(enemy);}
  }

  roundGameplay = () => {
    Players.forEach(player => { if (player.state == "playing") { this.chooseAttack(player) }; });
    Players.filter(player => player.constructor.name == "Fighter").map(player => player.activatedFighter = 0);
    Players.filter(player => player.constructor.name == "Assassin").map(player => player.activatedAssassin -= 1);
  }
}