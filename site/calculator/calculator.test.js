const sum = (a, b) => a + b;

describe("Given the function sum", () => {
  describe("When receiving two numbers", () => {
    test("Then is should return the sum of those numbers", () => {
      const num1 = 2;
      const num2 = 2;
      const expectedResult = 4;

      const result = sum(num1, num2);

      expect(result).toBe(expectedResult);
    });
  });
});
