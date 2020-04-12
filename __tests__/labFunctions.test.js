const {
  isOdd,
  numberOfDigits,
  disemvowel,
  secondSmallest,
  getLocations,
  onlyOddStrings,
  linkedListToArray,
  Node,
} = require("../labFunctions");

const testIsOdd = () => {
  describe(`isOdd`, () => {
    test(`is defined`, () => expect(isOdd).toBeDefined());
    describe(`returns true`, () => {
      test(`3`, () => expect(isOdd(3)).toBe(true));
      test(`5`, () => expect(isOdd(5)).toBe(true));
      test(`7`, () => expect(isOdd(7)).toBe(true));
    });
    describe(`returns false`, () => {
      test(`'3'`, () => expect(isOdd("3")).toBe(false));
      test(`0`, () => expect(isOdd(0)).toBe(false));
      test(`2`, () => expect(isOdd(2)).toBe(false));
      test(`4`, () => expect(isOdd(4)).toBe(false));
      test(`10`, () => expect(isOdd(10)).toBe(false));
      test(`NaN`, () => expect(isOdd(NaN)).toBe(false));
      test(`'hi'`, () => expect(isOdd("hi")).toBe(false));
    });
  });
};

const testNumberOfDigits = () => {
  describe(`numberOfDigits`, () => {
    test(`is defined`, () => expect(isOdd).toBeDefined());
    describe(`returns number of digits`, () => {
      test(`digits for valid inputs`, () => {
        expect(numberOfDigits(0)).toBe(1);
        expect(numberOfDigits(1000)).toBe(4);
        expect(numberOfDigits(-10)).toBe(2);
      });
    });
    describe(`return null for invalid input`, () => {
      test(`[]`, () => expect(numberOfDigits([])).toBeNull())
      test(`{}`, () => expect(numberOfDigits({})).toBeNull())
      test(`'1'`, () => expect(numberOfDigits('1')).toBeNull())
      test(`null`, () => expect(numberOfDigits(null)).toBeNull())
    })
  });
};

const testDisemvowel = () => {
  describe(`disemvowel`, () => {
    test(`is defined`, () => expect(disemvowel).toBeDefined())
    describe(`removes vowels for valid inputs`, () => {
      test(`'hello wOrld'`, () => {
        expect(disemvowel("hello wOrld")).toBe(`hll wrld`)
      })
      test(`''`, () => {
        expect(disemvowel("")).toBe(``)
      })
      test(`'aAbBcCeE'`, () => {
        expect(disemvowel("aAbBcCeE")).toBe(`bBcC`)
      })
    })
    describe(`returns null for invalid input`, () => {
      test(`123`, () => expect(disemvowel(123)).toBeNull())
      test(`[]`, () => expect(disemvowel([])).toBeNull())
      test(`{}`, () => expect(disemvowel({})).toBeNull())
    })
  })
}

const testSecondSmallest = () => {
  describe(`secondSmallest`, () => {
    test(`is defined`, () => expect(secondSmallest).toBeDefined())
    describe(`tests if all array inputs are numbers`, () => {
      test(`[1, '2', 3]`, () => expect(secondSmallest([1, '2', 3])).toBeNull())
    })
    describe(`find second smallest for valid input`, () => {
      test(`[2, 3]`, () => expect(secondSmallest([2,3])).toBe(2))
      test(`[-1, 0, 0]`, () => expect(secondSmallest([-1,0,0])).toBe(-1))
      test(`[-100, -200, -300]`, () => expect(secondSmallest([-100,-200,-300])).toBe(-200))
    })
    describe(`returns null if input not array`, () => {
      test(`{}`, () => expect(secondSmallest({})).toBeNull())
      test(`[]`, () => expect(secondSmallest([])).toBeNull())
      test(`1`, () => expect(secondSmallest(1)).toBeNull())
      test(`'[1,2]'`, () => expect(secondSmallest('[1,2]')).toBeNull())
    })
  })
}

describe(`Lab Functions`, () => {
  testIsOdd();
  testNumberOfDigits();
  testDisemvowel();
  testSecondSmallest();
});
