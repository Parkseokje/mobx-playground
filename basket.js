import {
  decorate,
  observable,
  computed,
  autorun,
  action,
  transaction,
} from "mobx";

class GS25 {
  basket = [];

  get total() {
    console.log("[total] 계산중입니다..");
    return this.basket.reduce((p, c) => p + c.price, 0);
  }

  select(name, price) {
    this.basket.push({ name, price });
  }
}

decorate(GS25, {
  basket: observable,
  total: computed,
  select: action,
});

const gs25 = new GS25();
autorun(() => gs25.total);
autorun(() => {
  if (gs25.basket.length > 0) {
    console.log(gs25.basket[gs25.basket.length - 1]);
  }
});

transaction(() => {
  gs25.select("물", 800);
  gs25.select("커피", 2500);
  gs25.select("담배", 4500);
});

console.log(gs25.total);

// console.log(gs25.total);
// gs25.select("커피", 2500);
// console.log(gs25.total);
// gs25.select("담배", 4500);
// console.log(gs25.total);
