import {useEffect, useState} from 'react';

function Game(props){
    let storyObject = props.storyObject;
    let title = storyObject.title;
    let wordList = storyObject.wordList;
    let story = storyObject.story;
    let storyLength = wordList.length;
    const [submittedWords, setSubmittedWords] = useState([]);

    const [currentWord, setCurrentWord] = useState(0); 
    const [progress, setProgress] = useState(0);
    const [progressWidth, setProgressWidth] = useState('width:0')
    
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
        let sublength = submittedWords.length;
        let wordlength = wordList.length;
        let progressValue = (sublength/wordlength)*100;
        console.log('progess =' + progressValue);
        let progressString = `${progressValue}%`;
        setProgress(progressValue);
        setProgressWidth(progressString);
        
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
            document.getElementById('storyTitle').innerText = title;
        }
    },[currentWord]);

   
  
    function enterKeyPressed(e){
     
    
        if (e.key === 'Enter'){
            submitWord();
        }
    }

    return(
        <div>
            
            <div id='storyDiv' class='card'>
                <div class='card-header'>
                    <h2 id='storyTitle'>{title}</h2>
                </div>
                <div class='card-body'>

                <div id='wordInputDiv'>
                <p>Please enter a {wordList[currentWord]}</p><br/>
                <input type={'text'} onKeyDown={enterKeyPressed} id='getWord' autofocus></input><br/><br/>
                <button id='textBtn' onClick={submitWord} type="button" className="btn btn-primary">Submit</button><br/>
                <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{width: progressWidth}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"> {submittedWords.length} / {storyLength}</div>
                </div>
              
                </div>


                    <p id='storyP'></p>
                    <button onClick={props.resetGame} type='button' className='btn btn-warning btn-sm'>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Game;