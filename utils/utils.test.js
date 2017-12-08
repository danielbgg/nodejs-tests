const expect = require('expect');;
const utils = require('./utils');

it('should add two numbers', () => {
  expect(utils.add(33, 11)).toBe(44).toBeA('number');
});

it('should square a number', () => {
  expect(utils.square(9)).toBe(81).toBeA('number');
});

it('should expect some values', () => {
  expect(12).toNotBe(11);
  expect({name: 'Daniel'}).toEqual({name: 'Daniel'});
  expect({name: 'daniel'}).toNotEqual({name: 'Daniel'});
  expect([2,3,4]).toInclude(4);
  expect([2,3,4]).toExclude(5);
  expect({
    name: 'Daniel',
    age: 38,
    location: 'Sao Paulo'
  }).toInclude({
    age: 38
  });
  expect({
    name: 'Daniel',
    age: 38,
    location: 'Sao Paulo'
  }).toExclude({
    age: 30
  });
});

it('should set firstName and lastName', () => {
  var user = {age: 38, location: 'Sao Paulo'};
  user = utils.setName(user, 'Daniel Goncalves');
  expect(user).toInclude({
    firstName: 'Daniel',
    lastName: 'Goncalves'
  });
  expect("Daniel").toEqual(user.firstName);
  expect("Goncalves").toEqual(user.lastName);
  expect(user).toBeA('object');
});
