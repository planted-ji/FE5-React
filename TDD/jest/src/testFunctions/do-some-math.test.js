import { sum, substract, multiply, divide } from "../myFunctions/do-some-math";

test("Math functions test", () => {
  it("두 가지 값을 더합니다.", () => {
    //sum 함수를 실행했을 때(sum()) 2가 될 것임을(toBe) 기대한다.
    expect(sum(1, 1)).toBe(2);
  });
});
