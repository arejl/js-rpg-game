class Ogre extends Character {
  constructor(healthPoints = 9, damagePoints = 4, manaPoints = 10, description, state, humanPlayer) {
    super(healthPoints, damagePoints, manaPoints, state);
    this.description = "L'Ogre est une créature des marais qui mange des cerveaux. Sa force réside dans sa brutalité et son manque total d'intelligence."
  }
  skullCrusher = (enemy) => {
    if(this.manaPoints >=10)
    {
      if (this.damagePoints > 0)
      {
        console.log(`${this.name} lance SKULL CRUSHER`);
        this.manaPoints -= 10;
        this.dealDamage(enemy, 6);
        console.log(`SKULL CRUSHER fatigue ${this.name}, qui perd un point de dommages.`);
        this.damagePoints--;
      }
      else {console.log(`${this.name} n'a plus de points de dommages, il ne peut plus attaquer`)}
    }
    else {console.log(`${this.name} n'a pas assez de points de mana`)}
  }
}