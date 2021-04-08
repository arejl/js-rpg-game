class Wizard extends Character {
  constructor(healthPoints = 10, damagePoints = 2, manaPoints = 200, description, state, humanPlayer) {
    super(healthPoints, damagePoints, manaPoints, state);
    this.description = "Tu connais Gandalf ? Et bien c'est Gandalf."
}
fireBall = (enemy) => {
  if(this.manaPoints >=25)
  { console.log(`${this.name} lance FIREBALL`);
    this.manaPoints -= 25;
    this.dealDamage(enemy, 7);
  }
  else {console.log(`${this.name} n'a pas assez de points de mana`)}
}
}