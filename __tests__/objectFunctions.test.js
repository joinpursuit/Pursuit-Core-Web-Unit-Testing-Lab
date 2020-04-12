const { Dog, removeProperty } = require("../objectFunctions");

const testDog = () => {
  describe(`Dog`, () => {
    test(`is defined`, () => expect(Dog).toBeDefined());
    describe(`New Dog created`, () => {
      const name = `Milo`;
      const breed = `Pug`;
      const dog = new Dog(name, breed);
      test(`name matches`, () => expect(dog.name).toBe(name));
      test(`breed matches`, () => expect(dog.breed).toBe(breed));
      test(`bark method returns 'Woof!!'`, () =>
        expect(dog.bark()).toBe("Woof!!"));
    });
  });
};

const testRemoveProperty = () => {
  describe(`removeProperty`, () => {
    test(`is defined`, () => expect(removeProperty).toBeDefined());
    describe(`removes property`, () => {
      const input = {
        name: `Jon Snow`,
        email: `jon@snow.com`,
        password: `123`,
      };
      const output = {
        name: `Jon Snow`,
        email: `jon@snow.com`,
      };
      expect(removeProperty(input, `password`)).toStrictEqual(output);
    });
  });
};

describe(`Object Functions`, () => {
  testDog();
  testRemoveProperty();
});
