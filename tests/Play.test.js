const playmodules = require('../src/components/PlayModules/PlayModules');
const sortByPlays = playmodules.sortByPlays;
const sortByAlphabet = playmodules.sortByAlphabet;
const reverseSort = playmodules.reverseSort;


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
    let aftertest = sortByAlphabet(testarray, 'name');
    expect(aftertest[0].name).toBe('A');
  });

  test('reverseSort of [1,2,3] is 3 at index 0', () => {

    let testarray = [1,2,3];
    testarray = reverseSort(testarray);
    expect(testarray[0]).toBe(3);
  });
  test('reverseSort of [a,b,c] is c at index0', () => {

    let testarray = ['a','b','c'];
    testarray = reverseSort(testarray);
    expect(testarray[0]).toBe('c');
  });
