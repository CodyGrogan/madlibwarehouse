import {Create, parseStoryFunction} from "../src/components/Create";

test('Check if # in input will throw error1', () => {
    expect(parseStoryFunction('#','TitleTest', "12341234",'Cody')).toBe('error1');
  });
