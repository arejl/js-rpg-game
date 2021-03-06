class Turn {

  startTurn = (round) => {
    console.log(`------ Round numéro ${round} ------`);
  }

  chooseEnemy = (player) => {
    let index = Players.indexOf(player);
    let attackablePlayers = Players.filter(player => Players.indexOf(player) != index && player.state == "playing");
    console.log("Voici les joueurs encore en jeu :");
    attackablePlayers.forEach(player => console.log(`${attackablePlayers.indexOf(player) + 1}. ${player.name} (${player.constructor.name} avec ${player.healthPoints} PV restants)`));
    let enemyChoice = prompt(`Qui veux-tu attaquer ?`);
    while (typeof(attackablePlayers[Number(enemyChoice)-1]) == "undefined") {
      alert("Choisis un joueur valide");
      enemyChoice = prompt(`Qui veux-tu attaquer ?`);
    }
    return attackablePlayers[Number(enemyChoice) - 1];
  }

  chooseAttack = (player) => {
    let enemy = "";
    let index = "";
    let enemies = [];
    console.log(`${player.name}, à ton tour de jouer`);
    if (player.constructor.name == "Assassin" && player.activatedAssassin > 0) {
      this.assassinAttack(player);
    }
    else {

      let attackChoice = 0;
      if(player.humanPlayer == true) {
        attackChoice = prompt("Choisis ton attaque : 1. attaque normale 2. attaque spéciale");
        while (!["1", "2"].includes(attackChoice)) {
          alert("Ecris 1 ou 2");
          attackChoice = prompt("Choisis ton attaque : 1. attaque normale 2. attaque spéciale");
        };
      } else {
        attackChoice = Math.floor(Math.random() * 2 + 1);
      };

      if (Number(attackChoice) == 1) {
        if (player.humanPlayer == true) {
          enemy = this.chooseEnemy(player);
        } else {
          index = Players.indexOf(player);
          enemies = Players.filter(player => Players.indexOf(player) != index && player.state == "playing");
          enemies.sort((enemy1, enemy2) => {
            return enemy1.healthPoints - enemy2.healthPoints
          });
          if(enemies.length > 1) {
            enemy = enemies[Math.round(Math.random())];
          } else {
            enemy = enemies[0]
          };
        };
        if (enemy.constructor.name == "Fighter" && enemy.activatedFighter == 1)
        {
          console.log(`${enemy.name} esquive en partie l'attaque grâce à son attaque spéciale.`);
          player.dealDamage(enemy, player.damagePoints - 2)
        }
        else if (enemy.constructor.name == "Assassin" && enemy.activatedAssassin == 1)
        {
          console.log("L'assassin évite l'attaque grâce à son attaque spéciale !")
        }
        else { player.dealDamage(enemy, player.damagePoints) }
      }
      else if (Number(attackChoice) == 2) {
        switch (player.constructor.name) {
          case "Fighter":
            if (player.humanPlayer == true) {
              enemy = this.chooseEnemy(player);
            } else {
              index = Players.indexOf(player);
              enemies = Players.filter(player => Players.indexOf(player) != index && player.state == "playing");
              enemies.sort((enemy1, enemy2) => {
                return enemy1.healthPoints - enemy2.healthPoints
              });
              if(enemies.length > 1) {
                enemy = enemies[Math.round(Math.random())];
              } else {
                enemy = enemies[0]
              };
          };
            if (enemy.constructor.name == "Fighter" && enemy.activatedFighter == 1) {
              enemy.healthPoints += 2;
              console.log(`${enemy.name} esquive en partie l'attaque grâce à son attaque spéciale.`);
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
            if (player.humanPlayer == true) {
              enemy = this.chooseEnemy(player);
            } else {
              index = Players.indexOf(player);
              enemies = Players.filter(player => Players.indexOf(player) != index && player.state == "playing");
              enemies.sort((enemy1, enemy2) => {
                return enemy1.healthPoints - enemy2.healthPoints
              });
              if(enemies.length > 1) {
                enemy = enemies[Math.round(Math.random())];
              } else {
                enemy = enemies[0]
              };
            };
            if (enemy.constructor.name == "Fighter" && enemy.activatedFighter == 1) {
              enemy.healthPoints += 2;
              console.log(`${enemy.name} esquive en partie l'attaque grâce à son attaque spéciale.`);
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
          case "Wizard":
            if (player.humanPlayer == true) {
              enemy = this.chooseEnemy(player);
            } else {
              index = Players.indexOf(player);
              enemies = Players.filter(player => Players.indexOf(player) != index && player.state == "playing");
              enemies.sort((enemy1, enemy2) => {
                return enemy1.healthPoints - enemy2.healthPoints
              });
              if(enemies.length > 1) {
                enemy = enemies[Math.round(Math.random())];
              } else {
                enemy = enemies[0]
              };
            };
            if (enemy.constructor.name == "Fighter" && enemy.activatedFighter == 1) {
              enemy.healthPoints += 2;
              console.log(`${enemy.name} esquive en partie l'attaque grâce à son attaque spéciale.`);
              player.fireBall(enemy);
            }
            else if (enemy.constructor.name == "Assassin" && enemy.activatedAssassin == 1)
            {
              enemy.healthPoints += 4;
              player.fireBall(enemy);
              console.log("L'assassin évite l'attaque grâce à son attaque spéciale !")
            }
            else { player.fireBall(enemy); };
            break;
          case "Ogre":
            if (player.humanPlayer == true) {
              enemy = this.chooseEnemy(player);
            } else {
              index = Players.indexOf(player);
              enemies = Players.filter(player => Players.indexOf(player) != index && player.state == "playing");
              enemies.sort((enemy1, enemy2) => {
                return enemy1.healthPoints - enemy2.healthPoints
              });
              if(enemies.length > 1) {
                enemy = enemies[Math.round(Math.random())];
              } else {
                enemy = enemies[0]
              };
            };
            if (enemy.constructor.name == "Fighter" && enemy.activatedFighter == 1) {
              enemy.healthPoints += 2;
              console.log(`${enemy.name} esquive en partie l'attaque grâce à son attaque spéciale.`);
              player.skullCrusher(enemy);
            }
            else if (enemy.constructor.name == "Assassin" && enemy.activatedAssassin == 1)
            {
              enemy.healthPoints += 4;
              player.skullCrusher(enemy);
              console.log("L'assassin évite l'attaque grâce à son attaque spéciale !")
            }
            else { player.skullCrusher(enemy); };
            break;
        }
      }
    }
  }

  assassinAttack = (player) => {
    console.log("L'assassin lance son attaque spéciale !");
    let enemy = "";
    if (player.humanPlayer == true) {
      enemy = this.chooseEnemy(player);
    } else {
      let index = Players.indexOf(player);
      let enemies = Players.filter(player => Players.indexOf(player) != index && player.state == "playing");
      enemies.sort((enemy1, enemy2) => {
        return enemy1.healthPoints - enemy2.healthPoints
      });
      if(enemies.length > 1) {
        enemy = enemies[Math.round(Math.random())];
      } else {
        enemy = enemies[0]
      };
    };
    if (enemy.constructor.name == "Assassin" && enemy.activatedAssassin == 1) {
      enemy.healthPoints += 7;
      player.shadowHit(enemy);
      console.log("L'assassin évite l'attaque grâce à son attaque spéciale !")
    }
    else { player.shadowHit(enemy);}
  }

  roundGameplay = () => {
     let sleep =  (ms) => {
       var now = new Date().getTime();
       while(new Date().getTime() < now + ms){ }
     };

     Players.forEach((player) => {
       if (player.state == "playing") {
         this.chooseAttack(player);
         sleep(1000);
        };
      });

     Players.filter(player => player.constructor.name == "Fighter").map(player => player.activatedFighter = 0);
     Players.filter(player => player.constructor.name == "Assassin").map(player => player.activatedAssassin -= 1);
   }
}
