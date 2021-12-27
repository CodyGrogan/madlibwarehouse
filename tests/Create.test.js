
const parseStory = require("../src/components/CreateModules/createfunctions")

test('Check if # in input will throw error1', () => {
    expect(parseStory('#','TitleTest', "12341234",'Cody')).toBe('error1');
  });


test('Check if uneven () in input will throw error2', () => {
    expect(parseStory('Hello (()','TitleTest', "12341234",'Cody')).toBe('error2');
});

test('Check if no title will throw erro2', () => {
    expect(parseStory('Hello (world)','', "12341234",'Cody')).toBe('error2');
  });

test('check object properties title is Hello World' , () => {
    let story = parseStory('Hello (world)','Hello World', "12341234",'Cody');
    expect(story).toMatchObject({title: "Hello World", name: 'Cody'})

    });

