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
      console.log(`${this.constructor.name} perd ${damageReceived} PV.`)
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
        console.log(`${this.constructor.name} reçoit 20 points de mana !`)
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
    {
      console.log(`${this.constructor.name} lance DARK VISION`);
      this.manaPoints -= 20;
      this.dealDamage(enemy, 5);
      this.activatedFighter = 1;
      //The character receives 2 dmg points less per attack for this turn
    }
    else {console.log(`${this.constructor.name} n'a pas assez de points de mana`)}
  }
}

class Paladin extends Character {
  constructor(healthPoints = 16, damagePoints = 3, manaPoints = 200, state) {
      super(healthPoints, damagePoints, manaPoints, state);
  }
  healingLighting = (enemy) => {
    if(this.manaPoints >=40)
    {
      console.log(`${this.constructor.name} lance HEALING LIGHTING`);
      this.manaPoints -= 40;
      this.healthPoints += 5;
      console.log(`${this.constructor.name} se régénère de 5 PV !`);
      this.dealDamage(enemy, 4);
    }
    else {console.log(`${this.constructor.name} n'a pas assez de points de mana`)}
  }
}

class Monk extends Character {
  constructor(healthPoints = 8, damagePoints = 2, manaPoints = 200, state) {
      super(healthPoints, damagePoints, manaPoints, state);
  }
  heal = () => {
    if(this.manaPoints >=25)
    {
      console.log(`${this.constructor.name} lance HEAL`);
      this.manaPoints -= 25;
      this.healthPoints += 8;
      console.log(`${this.constructor.name} se régénère de 8 PV !`);
    }
    else {console.log(`${this.constructor.name} n'a pas assez de points de mana`)}
  }
}

class Berzerker extends Character {
  constructor(healthPoints = 8, damagePoints = 4, manaPoints = 0, state) {
      super(healthPoints, damagePoints, manaPoints, state);
  }
  rage = () => {
    console.log(`${this.constructor.name} lance RAGE`);
    console.log(`${this.constructor.name} gagne un point de dommages.`);
    this.damagePoints++;
    this.takeDamage(1);
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
      console.log(`${enemy.constructor.name} est toujours en vie !`)
      this.takeDamage(7);
      }
    }
    else {console.log(`${this.constructor.name} n'a pas assez de points de mana`)}
  }
}

class Wizard extends Character {
    constructor(healthPoints = 10, damagePoints = 2, manaPoints = 200, state) {
      super(healthPoints, damagePoints, manaPoints, state);
  }
  fireBall = (enemy) => {
    if(this.manaPoints >=25)
    { console.log(`${this.constructor.name} lance FIREBALL`);
      this.manaPoints -= 25;
      this.dealDamage(enemy, 7);
    }
    else {console.log(`${this.constructor.name} n'a pas assez de points de mana`)}
  }
}

class Ogre extends Character {
  constructor(healthPoints = 9, damagePoints = 4, manaPoints = 10, state) {
    super(healthPoints, damagePoints, manaPoints, state);
  }
  skullCrusher = (enemy) => {
    if(this.manaPoints >=10)
    {
      if (this.damagePoints > 0)
      {
        console.log(`${this.constructor.name} lance SKULL CRUSHER`);
        this.manaPoints -= 10;
        this.dealDamage(enemy, 6);
        console.log(`SKULL CRUSHER fatigue ${this.constructor.name}, qui perd un point de dommages.`);
        this.damagePoints--;
      }
      else {console.log(`${this.constructor.name} n'a plus de points de dommages, il ne peut plus attaquer`)}
    }
    else {console.log(`${this.constructor.name} n'a pas assez de points de mana`)}
  }
}