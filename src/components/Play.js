import Navbar from "./Navbar";
import Game from "./Game";

// HOW THIS WILL WORK
//Play page will display a list of PlayItem components
//PlayItem components will be generated from reading randomly from the database
//Play Item Components will have a title and a "Play" button
//When the play button is clicked, the list will be hidden, and the game component loaded
//the game components will be passed a prop "madlibobj" that contains the story and wordlist
// the game component will have an input requesting each word
//then it will replace all of the '#num' strings with the users new words.
//then it will display it to the user.


function Play(props){
    let storyObject = {
        wordList: [
            "(adjective)",
            "(Name)",
            "(verb)",
            "(food)",
            "(noun)"
        ],
        story: "I one had a #0 pony named #1. He loved to #2 all night long. He ate #3 every morning. He had a favorite toy #4 that he slept with every night. ",
        title: "My Little Pony"
    };

    let storyObject2=
    {
        wordList: [
          "(adjective)",
          "(noun)",
          "(verb)"
        ],
        story: "Rosa is a very #0 girl. She is my #1. I #2 her very much.",
        title: "Hello Rosa"
      }


    return(
        <div>
            <Navbar/>

            <p>This is play</p>
            <Game storyObject={storyObject2} />
        </div>
    )
}


/* example story obj

{
    "wordlist": [
        "(adjective)",
        "(Name)",
        "(verb)",
        "(food)",
        "(noun)"
    ],
    "story": "I one had a #0 pony named #1. He loved to #2 all night long. He ate #3 every morning. He had a very toy #4 that he slept with every night. ",
    "title": "My Little Pony"
}


{
  wordList: [
    "(adjective)",
    "(noun)",
    "(verb)"
  ],
  story: "Rosa is a very #0 girl. She is my #1. I #2 her very much.",
  title: "Hello Rosa"
}

*/

export default Play;