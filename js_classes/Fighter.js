class Fighter extends Character {
  constructor(healthPoints = 12, damagePoints = 4, manaPoints = 40, state, activatedFighter = 0, humanPlayer) {
    super(healthPoints, damagePoints, manaPoints, state, humanPlayer);
    this.activatedFighter = activatedFighter;
    this.description = "Le Fighter est un combattant équilibré sous tous les bords."
  }
  darkVision = (enemy) => {
    if (this.manaPoints >= 20)
    {
      console.log(`${this.name} lance DARK VISION`);
      this.manaPoints -= 20;
      this.dealDamage(enemy, 5);
      this.activatedFighter = 1;
      //The character receives 2 dmg points less per attack for this turn
    }
    else {console.log(`${this.name} n'a pas assez de points de mana`)}
  }
}