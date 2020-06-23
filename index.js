import { observable, reaction, computed, autorun } from "mobx";

const calculator = observable({
  a: 1,
  b: 2,
});

reaction(
  () => calculator.a,
  (value) => {
    console.log(`[reaction] a값이 ${value}로 바뀌었어요!`);
  }
);

reaction(
  () => calculator.b,
  (value) => {
    console.log(`[reaction] b값이 ${value}로 바뀌었어요!`);
  }
);

const sum = computed(() => {
  console.log("[computed] sum 계산중..");
  return calculator.a + calculator.b;
});

// **** autorun 은 함수 내에서 조회하는 값을 자동으로 주시함
autorun(() => console.log(`[autorun] a 값이 ${calculator.a} 로 바뀌었네요!`));
autorun(() => console.log(`[autorun] b 값이 ${calculator.b} 로 바뀌었네요!`));
autorun(() => sum.get()); // su

// sum.observe(() => calculator.a);
// sum.observe(() => calculator.b);

calculator.a = 10;
calculator.b = 20;
