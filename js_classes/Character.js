class Character {
  constructor(healthPoints, damagePoints, manaPoints, description, name = this.constructor.name, state = "playing", humanPlayer = false) {
    this.healthPoints = healthPoints;
    this.damagePoints = damagePoints;
    this.manaPoints = manaPoints;
    this.description = description;
    this.name = name;
    this.state = state;
    this.humanPlayer = humanPlayer;
  }

  takeDamage = (damageReceived) => {
    if (this.state == "playing")
    {
      this.healthPoints -= damageReceived;
      console.log(`${this.name} perd ${damageReceived} PV.`)
      if (this.healthPoints <= 0) {
        this.state = "loser"
        console.log(`${this.name} a perdu !`)
        }
    }
    else {console.log(`${this.name} est hors jeu !`)}
  }

  dealDamage = (enemy, damageInflicted) => {
    if (enemy.state == "playing")
    {
      console.log(`${this.name} attaque ${enemy.name}`)
      enemy.takeDamage(damageInflicted);
      if (enemy.healthPoints <= 0) {
        this.manaPoints += 20;
        console.log(`${this.name} reçoit 20 points de mana !`)
      }
    }
    else {console.log("Vous ne pouvez pas attaquer un joueur qui n'a plus de PV !")}
  }
}
