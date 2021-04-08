class Berzerker extends Character {
  constructor(healthPoints = 8, damagePoints = 4, manaPoints = 0, description, state, humanPlayer) {
      super(healthPoints, damagePoints, manaPoints, state, humanPlayer);
      this.description = "Le Berzerker est juste un gros bourrin avec une attaque élevée."
  }
  rage = () => {
    console.log(`${this.name} lance RAGE`);
    console.log(`${this.name} gagne un point de dommages.`);
    this.damagePoints++;
    this.takeDamage(1);
  }
}