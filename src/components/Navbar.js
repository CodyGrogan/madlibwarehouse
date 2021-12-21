import { Link } from "react-router-dom";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
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
      let profileLink = document.getElementById('profileLink');
      profileLink.innerText =  `${userName}'s Profile`
      
  
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

            <button type="button" onClick={signIn} className='navbar-brand btn btn-outline-primary signBtn'  id="sign-in" onclick="signIn()" >
                    <i className="material-icons">account_circle</i>Sign-in with Google
                  </button>
                  <button hidden type="button" onclick={signOut} className="navbar-brand btn btn-warning signBtn" id='sign-out'>Sign Out</button>
                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            

                    <Link className="navbar-brand nav-link" to='/'> Home</Link>
                 
                    <Link className="navbar-brand nav-link" to='/play'>Play</Link>
              
                    <Link className="navbar-brand nav-link" to='/create'>Create</Link>   
                    
                    <Link className="navbar-brand nav-link" to='/profile' id='profileLink'>Profile</Link>   
                    
                
            </div>

            
            
           
            </nav>
        </div>
    )
}
export default Navbar;