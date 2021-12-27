import Navbar from "./Navbar";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';
  const parseStory = require('./CreateModules/createfunctions');

  function isUserSignedIn() {
    return !!getAuth().currentUser;
  
  }

 

function submitTemplate(){


    if (isUserSignedIn() == true){
    let input = document.getElementById('madlibtextarea').value;
    let title = document.getElementById('storytitle').value;
    console.log(input);
    
    let uid = getAuth().currentUser.uid;
    let name = getAuth().currentUser.displayName;

    let madlib = parseStory(input, title, uid, name);

    //check if madlib returned an error
    if (madlib == 'error1'){
        alert('Story cannot contain # character')
    }
    else if (madlib == 'error2'){
        alert('Story must have a title and one set of ()')
    }
    else{

    
        //This code resets the DOM
        document.getElementById('madlibtextarea').value = '';
        document.getElementById('storytitle').value = '';
        console.log(madlib);
        submitData(madlib);
        openModal();
    }
     

    }
    else{
        alert("please sign in");
    }
    
}


function submitData(data){
    let jsonstring = JSON.stringify(data);
    let postpath = '/create/post'           
 
        
    fetch(postpath, {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
        },
        body: jsonstring,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function openModal(){
    let modal = document.getElementById('openModal');
    modal.click();
}



function Create(props){


    return(
        <div>
            <Navbar/>
            <div className="pageCon">
            <p>In this section, write your own mad lib template</p>

            <p>When you write your story, request words by putting them in parenthesis.</p>
            <p>ex: Harold was a (adjective) (animal). He loves to (verb).</p>


            <div className="card game">

                <div className="card-header">
                    <input type='text' id='storytitle' placeholder={'Write Title Here'}></input>
                </div>

                <div className="card-body">

                    <textarea id='madlibtextarea' className="textareabox" rows="10" placeholder="Write story here"></textarea>
                    <br/><br/>
                    <button type="button" onClick={submitTemplate} className="btn btn-primary">Submit</button>
                </div>
        

                    <button hidden id='openModal' type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Your madlib template has been submitted.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
            </div>

       
        </div>
    )
}

export default Create;
