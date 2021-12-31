import Navbar from "./Navbar";
import Game from "./Game";
import PlayItem from "./PlayItem";
import { useState, useEffect } from "react";
import { reverseSort, sortByPlays, sortByAlphabet } from "./PlayModules/PlayModules";
const playmodules = require('./PlayModules/PlayModules');



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
    const [titleSorted, setTitleSorted] = useState(false);
    const [nameSorted, setNameSorted] = useState(false);
    const [playSorted, setPlaysorted] = useState(false);
    
    const [storyObjArray, setStoryObjectArray] = useState([]);
    let initialLoad = false;
    var storypicked = false;
    let storyObjectNull=
    {
        wordList: [
         'null'
        ],
        story: "null",
        title: "null"
      }  
    const [pickedStory, setPickedStory] = useState(storyObjectNull);
    let frame = document.getElementById('gameFrame');
    let tablediv = document.getElementById('tableDiv');


function getStories(){
    console.log('get stories fired')

        if (initialLoad == false){
        initialLoad = true;
        console.log('getstories about to fetch')
        let pathstring = '/play/storylist'
        fetch(pathstring).then(response => response.json()).then(function (data){
            console.log(data);
            setStoryObjectArray(data);
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



let sortByPlaysBtn = ()=>{
    let array = storyObjArray.slice(0);
    let sortedArray = sortByPlays(array);
    let length = sortedArray.length;
    //check if button already pressed, if yes, sortby reverse
    if (playSorted == true){
        console.log('already sorted, reversing');
        
        sortedArray = reverseSort(sortedArray);
        setPlaysorted(false);
    }
    else{
        setPlaysorted(true);
    }
    let newArray = [];
    for (let i = 0; i<length;i++){

        let newjsx = <PlayItem storyObject = {sortedArray[i]} setStory={pickStory}/>
        newArray.push(newjsx);
        
    }
    setStoryArray(newArray);
    


}

let sortByNameBtn = ()=>{
    let array = storyObjArray.slice(0);
    let sortedArray = sortByAlphabet(array, 'name');
    let length = sortedArray.length;
    let newArray = [];
    if (nameSorted == true){
        console.log('already sorted, reversing');
        
        sortedArray = reverseSort(sortedArray);
        setNameSorted(false);
    }
    else{
        setNameSorted(true);
    }
    for (let i = 0; i<length;i++){

        let newjsx = <PlayItem storyObject = {sortedArray[i]} setStory={pickStory}/>
        newArray.push(newjsx);
        
    }
    setStoryArray(newArray);


}
let sortByTitleBtn = ()=>{
    let array = storyObjArray.slice(0);
    let sortedArray = sortByAlphabet(array, 'title');
    let length = sortedArray.length;
    let newArray = [];
    if (titleSorted == true){
        console.log('already sorted, reversing');
        
        sortedArray = reverseSort(sortedArray);
        setTitleSorted(false);
    }
    else{
        setTitleSorted(true);
    }
    for (let i = 0; i<length;i++){

        let newjsx = <PlayItem storyObject = {sortedArray[i]} setStory={pickStory}/>
        newArray.push(newjsx);
        
    }
    setStoryArray(newArray);


}




 


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
                    <th><button className="btn btn-outline-info" onClick={sortByTitleBtn}>Title</button></th>
                    <th><button className="btn btn-outline-info" onClick={sortByNameBtn}>Author</button></th>
                    <th><button className="btn btn-outline-info" onClick={sortByPlaysBtn}>Plays</button></th>
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