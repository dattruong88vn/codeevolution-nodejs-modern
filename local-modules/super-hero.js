class SuperHero {
  constructor(name) {
    this.name = name;
  }

  get() {
    return this.name;
  }

  set(name) {
    this.name = name;
  }
}

module.exports = SuperHero;
