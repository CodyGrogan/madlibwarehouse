import Navbar from "./Navbar";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';

  function isUserSignedIn() {
    return !!getAuth().currentUser;
  
  }

function submitTemplate(){


    if (isUserSignedIn() == true){
    let input = document.getElementById('madlibtextarea').value;
    let title = document.getElementById('storytitle').value;
    console.log(input);

    let parenthesesArray1 = [];
    let parenthesesArray2 = []
    let wordArray = [];
    let slicedString = '';

    for (let i = 0; i < input.length; i++){

        let letter = input.charAt(i);
        if (letter == '#'){
            alert('invlaid character #')
            break;
        }

        
       else if (letter == '('){
            parenthesesArray1.push(i);
        }
        else if (letter == ')'){
            parenthesesArray2.push(i);
        }


    }

    if (parenthesesArray1.length != parenthesesArray2.length || parenthesesArray2.length == 0 || title.length < 1){

        alert('Your story needs a title must have at least one word request in ( ). ')

        
    }
    else{
 
    for (let i = 0; i < parenthesesArray1.length; i++){

        let index = parenthesesArray1[i];
        //the second index number needs to be higher by one to include ')'
        let secondindex = parenthesesArray2[i] + 1;
        let removed = input.slice(index, secondindex);
        wordArray.push(removed);
        
        console.log(removed)
        console.log(wordArray);
      


        

    }

    for (let i = 0; i < wordArray.length; i++){

        let hashstring = '#' + i;
        input = input.replace(wordArray[i], hashstring);

        //later when reading a madlib from the database, the words
        //given by the player will be inserted at the index of each #
    }

    // get the indecies of each ( and )


        console.log(parenthesesArray1);
        console.log(input);

        let madlib = {
            wordList: wordArray,
            story: input,
            title: title
        }

        console.log(madlib);

     }

    }
    else{
        alert("please sign in");
    }
    
}


function Create(props){
    return(
        <div>
            <Navbar/>
            <p>This is Create</p>


            <p>In this section, write your own mad lib template</p>

            <p>When you write your story, request words by putting them in parenthesis.</p>
            <p>ex: Harold was a (adjective) (animal). He loves to (verb).</p>
            <input type='text' id='storytitle' placeholder={'Write Title Here'}></input> <br/>

            <textarea id='madlibtextarea' cols='50' rows="10" placeholder="Write story here"></textarea>
            <br/>
            <button type="button" onClick={submitTemplate} className="btn btn-primary">Submit</button>
        </div>
    )
}

export default Create;