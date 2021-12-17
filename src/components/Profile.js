import Navbar from "./Navbar";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

function Profile(props){
    return(
        <div>
            <Navbar/>
            Profile Page Under Construction
        </div>
    )
}

export default Profile;