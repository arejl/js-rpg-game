class Paladin extends Character {
  constructor(healthPoints = 16, damagePoints = 3, manaPoints = 200, description, state, humanPlayer) {
      super(healthPoints, damagePoints, manaPoints, state, humanPlayer);
      this.description = "Le Paladin est un chevalier puissant et défensif."
  }
  healingLighting = (enemy) => {
    if(this.manaPoints >=40)
    {
      console.log(`${this.name} lance HEALING LIGHTING`);
      this.manaPoints -= 40;
      this.healthPoints += 5;
      console.log(`${this.name} se régénère de 5 PV !`);
      this.dealDamage(enemy, 4);
    }
    else {console.log(`${this.name} n'a pas assez de points de mana`)}
  }
}