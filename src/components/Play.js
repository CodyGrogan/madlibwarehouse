import Navbar from "./Navbar";
import Game from "./Game";
import PlayItem from "./PlayItem";
import { useState, useEffect } from "react";
import { Mongoose } from "mongoose";


// HOW THIS WILL WORK
//Play page will display a list of PlayItem components
//PlayItem components will be generated from reading randomly from the database
//Play Item Components will have a title and a "Play" button
//When the play button is clicked, the list will be hidden, and the game component loaded
//the game components will be passed a prop "madlibobj" that contains the story and wordlist
// the game component will have an input requesting each word
//then it will replace all of the '#num' strings with the users new words.
//then it will display it to the user.



// currently the included storyObjects are for testing and will later be drawn from a database
function Play(props){
    const [keyValue, setKeyValue] = useState(0);  //this is necessary to make the Game component reset when the reset button is clicked.
    const [storyArray, setStoryArray] = useState([]);
    let initialLoad = false;
    

function getStories(){
    console.log('get stories fired')

        if (initialLoad == false){
        initialLoad = true;
        console.log('getstories about to fetch')
        let pathstring = '/play/storylist'
        fetch(pathstring).then(response => response.json()).then(function (data){
            console.log(data);
            let length = data.length;
            let newArray = [];
            for (let i = 0; i<length;i++){

                let newjsx = <PlayItem storyObject = {data[i]} setStory={pickStory}/>
                newArray.push(newjsx);
                
            }
            setStoryArray(newArray);

            
        })
    }
    }

    var storypicked = false;
   


      let storyObjectNull=
      {
          wordList: [
           'null'
          ],
          story: "null",
          title: "null"
        }
  
        

      
    let frame = document.getElementById('gameFrame');
    let tablediv = document.getElementById('tableDiv');

    const [pickedStory, setPickedStory] = useState(storyObjectNull);


      let pickStory = (story) =>{

        console.log('pick story clicked')

        console.log(story);
        storypicked = true;
        setPickedStory(story)
        

    }

    let updatePlays = (story)=>{
        let pathstring = '/play/updateplays';


                    fetch(pathstring, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(story),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }

    let resetGame = () =>{
        setPickedStory(storyObjectNull);
        let newkeyvalue = keyValue + 1;
        setKeyValue(newkeyvalue);  //this causes the Game component to be remade
        tablediv.hidden = false;
        frame.hidden = true;
        
    }

    useEffect(()=>{


        if(pickedStory.title != 'null' && pickedStory.story != 'null' ){
        console.log(storypicked + "bool")
        updatePlays(pickedStory);
        tablediv.hidden = true;
        frame.hidden = false;
        }
        
        
    },[pickedStory]);

    useEffect(() => {
        console.log('component mounted')
        getStories();
      }, []);

    

    return(
        <div>
            <Navbar/>
            <div>

            <p>Pick a story and play!</p>

            <div id='tableDiv'>
            <table className="table">
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Plays</th>
                    <th></th>
                </tr>
        
           {storyArray}
            </table>
            </div>
        <div hidden id='gameFrame' className="pageCon">
            <Game key={keyValue} storyObject={pickedStory} resetGame={resetGame}/>
        </div>
        </div>

        </div>
    )
}




export default Play;