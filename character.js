class Character {
  constructor(healthPoints, damagePoints, manaPoints, state = "playing") {
      this.healthPoints = healthPoints;
      this.damagePoints = damagePoints;
      this.manaPoints = manaPoints;
      this.state = state;
  }

  takeDamage = (damageReceived) => {
    if (this.state == "playing")
    {
      this.healthPoints -= damageReceived;
      if (this.healthPoints <= 0) {
        this.state = "loser"
        console.log(`${this.constructor.name} a perdu !`)
        }
    }
    else {console.log(`${this.constructor.name} est hors jeu !`)}
  }

  dealDamage = (enemy, damageInflicted) => {
    if (enemy.state == "playing")
    {
      console.log(`${this.constructor.name} attaque ${enemy.constructor.name}`)
      enemy.takeDamage(damageInflicted);
      if (enemy.healthPoints <= 0) {
        this.manaPoints += 20;
      }
    }
    else {console.log("Vous ne pouvez pas attaquer un joueur qui n'a plus de PV !")}
  }
}

class Fighter extends Character {
  constructor(healthPoints = 12, damagePoints = 4, manaPoints = 40, state, activatedFighter = 0) {
    super(healthPoints, damagePoints, manaPoints, state);
    this.activatedFighter = activatedFighter;
  }
  darkVision = (enemy) => {
    if (this.manaPoints >= 20)
      { this.manaPoints -= 20;
      this.dealDamage(enemy, 5);
      this.activatedFighter = 1;
      //The character receives 2 dmg points less per attack for this turn
    }
    else {console.log("Vous n'avez pas assez de points de mana")}
  }
}

class Paladin extends Character {
  constructor(healthPoints = 16, damagePoints = 3, manaPoints = 200, state) {
      super(healthPoints, damagePoints, manaPoints, state);
  }
  healingLighting = (enemy) => {
    if(this.manaPoints >=40)
      {this.manaPoints -= 40;
      this.healthPoints += 5;
      this.dealDamage(enemy, 4);
    }
    else {console.log("Vous n'avez pas assez de points de mana")}
  }
}

class Monk extends Character {
  constructor(healthPoints = 8, damagePoints = 2, manaPoints = 200, state) {
      super(healthPoints, damagePoints, manaPoints, state);
  }
  heal = () => {
    if(this.manaPoints >=25)
      {this.manaPoints -= 25;
      this.healthPoints += 8;
    }
    else {console.log("Vous n'avez pas assez de points de mana")}
  }
}

class Berzerker extends Character {
  constructor(healthPoints = 8, damagePoints = 4, manaPoints = 0, state) {
      super(healthPoints, damagePoints, manaPoints, state);
  }
  rage = () => {
    this.damagePoints++;
    this.healthPoints--;
  }
}

class Assassin extends Character {
  constructor(healthPoints = 6, damagePoints = 6, manaPoints = 20, state, activatedAssassin = 0) {
    super(healthPoints, damagePoints, manaPoints, state);
    this.activatedAssassin = activatedAssassin;
  }
  shadowHit = (enemy) => {
    if(this.manaPoints>=20)
    {//The character will only attack next round.
    //The character will not take any damage next round.
    this.manaPoints -= 20;
    this.dealDamage(enemy, 7)
    if (enemy.state == "playing") {
      this.takeDamage(7);
      }
    }
    else {console.log("Vous n'avez pas assez de points de mana")}
  }
}