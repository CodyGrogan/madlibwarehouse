import { Link } from "react-router-dom";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    EmailAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
  } from 'firebase/auth';

  



function Navbar(props){

    
  async function signIn() {
        console.log("sign in button pressed")
      
        var provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
          });
        await signInWithPopup(getAuth(), provider);
      
      }


    async function signInEmail() {
        console.log("sign in email button pressed")
        let email = document.getElementById('signInEmail').value;
        let password = document.getElementById('signInPassword').value;
        
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        console.log(email);
        alert("Wrong Email or Password")
      });
      
    }

  

  
  async function emailSignUp(){
    //this function needs to use firebase to determine if the user has already signed up with this email.
    //if yes, send on to signInPasswordModal, if no, send on to signUpFormModal

    let email = document.getElementById('signUpEmail').value;
    let name = document.getElementById('signUpName').value;
    let password = document.getElementById('signUpPassword').value;

    if (name.length < 1){
      alert("Name must have at least one character")
    }

    else{
    
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        updateProfile(getAuth().currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
          console.log('displayname set')
        }).catch((error) => {
          // An error occurred
          // ...
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        alert("Invalid Email, Password Less than 6 characters, or Already Exists")
      });
    }
  }


  function signOutUser() {
 
    signOut(getAuth());
  
  }

  function getUserName() {
    return getAuth().currentUser.displayName;
  
  }
  
  function isUserSignedIn() {
    return !!getAuth().currentUser;
  
  }
  
  

function navauthStateObserver(user) {
    if (user) {
      
var signInButtonElement = document.getElementById('sign-in');
var signOutButtonElement = document.getElementById('sign-out');
  signOutButtonElement.addEventListener('click', signOutUser);
      console.log("user is signed in")
      var userName = getUserName();
      signInButtonElement.hidden = true;
      signOutButtonElement.hidden = false;
      if (userName != "null" && userName != null){
      let profileLink = document.getElementById('profileLink');
      profileLink.innerText =  `${userName}'s Profile`
      }
  
    }

    else{
        
var signInButtonElement = document.getElementById('sign-in');
var signOutButtonElement = document.getElementById('sign-out');
  signOutButtonElement.addEventListener('click', signOutUser);
      signInButtonElement.hidden = false;
      signOutButtonElement.hidden = true;
      
      let profileLink = document.getElementById('profileLink');
      profileLink.innerText =  `Profile`
    }
  }  
  
onAuthStateChanged(getAuth(), navauthStateObserver);


    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <h2 className="madLogo">MadlibWarehouse</h2>
           

            <button type="button" data-toggle="modal" data-target="#logInModal" className='navbar-brand btn btn-outline-primary signBtn'  id="sign-in" onclick="signIn()" >
                    <i className="material-icons">account_circle</i>Sign In
            </button>
            <button hidden type="button" className="navbar-brand btn btn-warning signBtn" id='sign-out'>Sign Out</button>
               

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            

                    <Link className="navbar-brand nav-link" to='/'> Home</Link>
                 
                    <Link className="navbar-brand nav-link" to='/play'>Play</Link>
              
                    <Link className="navbar-brand nav-link" to='/create'>Create</Link>   
                    
                    <Link className="navbar-brand nav-link" to='/profile' id='profileLink'>Profile</Link>   
                    
                
            </div>

            

        
            </nav>

            <div class="modal fade" id="logInModal" tabindex="-1" aria-labelledby="logInModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="logInModalLabel">Log In</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                          <div id='signInButtons'>
                            <button  type="button" className="btn btn-primary" onClick={signIn} data-dismiss="modal">Log in with Google</button> <br/> <br/>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#emailSignInModal">Log in with Email</button><br/> <br/>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#signUpFormModal">Sign Up with Email</button>
                          
                          </div>

                         
                         






                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            
                        </div>
                        </div>
                    </div>
                    </div>


                    <div class="modal fade" id="emailSignInModal" tabindex="-1" aria-labelledby="logInModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="logInModalLabel">Log In</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                        
                          <div id='emailSignInCon'>

                          <form id='getEmail'>
                              <div class="form-group">
                                    <label for="signInEmail">Email address</label>
                                    <input type="email" class="form-control" id="signInEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                                  
                                  
                                  </div>

                                  
                              
                              <div class="form-group">
                                    <label for="signInPassword">Password</label>
                                    <input type="password" class="form-control" id="signInPassword" placeholder="Password"/>
                                    <button class="btn btn-primary" onClick={signInEmail} data-dismiss="modal">Submit</button>
                                </div>
                              
                            
                            </form>



                        
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            
                        </div>
                        </div>
                    </div>
                    </div>


        </div>


       



        <div class="modal fade" id="signUpFormModal" tabindex="-1" aria-labelledby="signUpFormModal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="logInModalLabel">Log In</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                        
                          
  
                        <form id='signUpForm'>
                              
                            
                              <div class="form-group">
                                      <h3>Sign Up</h3>
                                      <label for="signUpName">User Name</label>
                                      <input type="text" class="form-control" id="signUpName" placeholder="User Name"/>
                                    
                                    
                                    </div>

                                    <div class="form-group">
                                      <label for="signUpEmail">Email address</label>
                                      <input type="email" class="form-control" id="signUpEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    
                                  </div>


                                    
                                    
                                    <div class="form-group">
                                      <label for="signUpPassword">Password</label>
                                      <input type="password" class="form-control" id="signUpPassword" placeholder="Password"/>
                                    </div>
                                    
  
  
                                    <button class="btn btn-primary" onClick={emailSignUp} data-dismiss="modal">Submit</button>
                                  </form>


                            
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            
                        </div>
                        </div>
                    </div>
                    </div>


        </div>

        </div>
    )
}


export default Navbar;