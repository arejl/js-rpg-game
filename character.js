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
        }
    }
    else {console.log("Vous n'avez plus de PV, vous êtes hors jeu !")}
  }

  dealDamage = (enemy, damageInflicted) => {
    if (enemy.state == "playing")
    {
      enemy.takeDamage(damageInflicted);
      if (enemy.healthPoints <= 0) {
        this.manaPoints += 20;
      }
    }
    else {console.log("Vous ne pouvez pas attaquer un joueur qui n'a plus de PV !")}
  }
}

class Fighter extends Character {
  constructor(healthPoints = 12, damagePoints = 4, manaPoints = 40, state) {
      super(healthPoints, damagePoints, manaPoints, state);
  }
  darkVision = (enemy) => {
    this.manaPoints -= 20;
    this.dealDamage(enemy, 5)
    // this.takeDamage(enemy.damagePoints-2)
    //The character receives 2 dmg points less for this turn
  }
}

class Paladin extends Character {
  constructor(healthPoints = 16, damagePoints = 3, manaPoints = 200, state) {
      super(healthPoints, damagePoints, manaPoints, state);
  }
  healingLighting = (enemy) => {
    this.manaPoints -= 40;
    this.healthPoints += 5;
    this.dealDamage(enemy, 4)
  }
}

class Monk extends Character {
  constructor(healthPoints = 8, damagePoints = 2, manaPoints = 200, state) {
      super(healthPoints, damagePoints, manaPoints, state);
  }
  heal = () => {
    this.manaPoints -= 25;
    this.healthPoints += 8;
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
  constructor(healthPoints = 6, damagePoints = 6, manaPoints = 20, state) {
      super(healthPoints, damagePoints, manaPoints, state);
  }
  shadowHit = (enemy) => {
    this.manaPoints -= 20;
    //The character only will attack next round?
    this.dealDamage(enemy, 7)
    if (enemy.state == "playing") {
      this.healthPoints -= 7;
    }
    //The character will not take any damage next round.
  }
}

const Grace = new Fighter();
const Ulder = new Paladin();
const Moana = new Monk();
const Draven = new Berzerker();
const Carl = new Assassin();

const Players = [Grace, Ulder, Moana, Draven, Carl]