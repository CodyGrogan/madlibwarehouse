const playmodules = require('../src/components/PlayModules/PlayModules');
const sortByPlays = playmodules.sortByPlays;
const sortByAlphabet = playmodules.sortByAlphabet;


let testarray = [{plays: 0}, {plays: 4}]

test('Check if testarray [0].plays is 4 ', () => {

    let testarray = [{plays: 0}, {plays: 4}];
    let aftertest = sortByPlays(testarray);
    expect(aftertest[0].plays).toBe(4);
  });
test('Check if testarray [1].plays is 0 ', () => {

    let testarray = [{plays: 0}, {plays: 4}];
    let aftertest = sortByPlays(testarray);
    expect(aftertest[1].plays).toBe(0);
  });

  test('Check if testarray [0].name is A', () => {

    let testarray = [{name: 'B'}, {name: 'A'}];
    let aftertest = sortByPlays(testarray);
    expect(aftertest[1].name).toBe('A');
  });
