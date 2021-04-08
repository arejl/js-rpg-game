class Monk extends Character {
  constructor(healthPoints = 8, damagePoints = 2, manaPoints = 200, description, state, humanPlayer) {
      super(healthPoints, damagePoints, manaPoints, state, humanPlayer);
      this.description = "Le Monk est un prêtre qui peut se guérir."
  }
  heal = () => {
    if(this.manaPoints >=25)
    {
      console.log(`${this.name} lance HEAL`);
      this.manaPoints -= 25;
      this.healthPoints += 8;
      console.log(`${this.name} se régénère de 8 PV !`);
    }
    else {console.log(`${this.name} n'a pas assez de points de mana`)}
  }
}