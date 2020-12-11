class Calc {
  constructor() {
    this.first = [];
    this.second = [];
  }

  creating(n) {
    this.first = [];
    this.second = [];
    for (let i = 1; i <= n; i++) {
      this.first.push(i);
    }
  }

  random() {
    return Math.ceil(Math.random()*(this.first.length - 1));
  }

  randomize() {
    if (this.first.length == 0) return 0;
    let n = this.random();
    this.second.push(this.first.splice(n, 1));
  }
}