class Assassin extends Character {
  constructor(healthPoints = 6, damagePoints = 6, manaPoints = 20, description, state, activatedAssassin = 0, humanPlayer) {
    super(healthPoints, damagePoints, manaPoints, state, humanPlayer);
    this.activatedAssassin = activatedAssassin;
    this.description = "L'Assassin est rusé et fourbe, et fait ses attaques dans l'ombre."
  }
  shadowHit = (enemy) => {
    if(this.manaPoints>=20)
    {//The character will only attack next round.
    //The character will not take any damage next round.
    this.manaPoints -= 20;
    this.dealDamage(enemy, 7)
      if (enemy.state == "playing") {
      console.log(`${enemy.name} est toujours en vie !`)
      this.takeDamage(7);
      }
    }
    else {console.log(`${this.name} n'a pas assez de points de mana`)}
  }
}