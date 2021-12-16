import {useEffect, useState} from 'react';

function Game(props){
    let storyObject = props.storyObject;
    let title = storyObject.title;
    let wordList = storyObject.wordList;
    let story = storyObject.story;
    const [submittedWords, setSubmittedWords] = useState([]);

    const [currentWord, setCurrentWord] = useState(0); 

    let submitWord = () => {
        let input = document.getElementById('getWord');
        let newWord = input.value;
        let newwordarray = submittedWords;
        newwordarray.push(newWord);
        console.log(newwordarray);
        setSubmittedWords(newwordarray);
        input.value = '';
        console.log(submittedWords);
        setCurrentWord(currentWord + 1);
    }

    let createStory = () =>{

        let newstory = story;
        for (let i = 0; i < wordList.length; i++){
            let hash = '#' + i;
            newstory = newstory.replace(hash, submittedWords[i]);

        }
        return newstory;

    }

    useEffect(()=>{
        if(currentWord>wordList.length -1){
            let wordInputDiv = document.getElementById('wordInputDiv');
            wordInputDiv.hidden = true;
            let newstory = createStory();
            document.getElementById('storyP').innerText= newstory;
        }
    },[currentWord]);

   
  
    function enterKeyPressed(e){
     
    
        if (e.key === 'Enter'){
            submitWord();
        }
    }

    return(
        <div>
            <div id='wordInputDiv'>
                <p>Please enter a {wordList[currentWord]}</p><br/>
                <input type={'text'} onKeyDown={enterKeyPressed} id='getWord'></input><br/><br/>
                <button id='textBtn' onClick={submitWord} type="button" className="btn btn-primary">Submit</button>
            </div>
            <div id='storyDiv'>
                <p id='storyP'></p>
            </div>
        </div>
    )
}

export default Game;