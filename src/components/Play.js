import Navbar from "./Navbar";

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
    return(
        <div>
            <Navbar/>

            <p>This is play</p>
        </div>
    )
}


/* example story obj

{
    "wordlist": [
        "(noun)",
        "(noun)"
    ],
    "story": "Hello #0. I am a #1."
}

*/

export default Play;