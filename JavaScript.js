
let ladder = {
    num: 0,
  
    up() {
      this.num++;
      console.log("Вызов up(), возращаю:", this);
      return this;
    },
  
    down() {
      this.num--;
      console.log("Вызов down(), возращаю:", this);
      return this;
    },
  
    showStep() {
      console.log("Текущий num:", this.num);
      console.log("Вызов showStep(), возращаю:", this);
      return this;
    }
  };
  ladder.up().up().down().showStep();
