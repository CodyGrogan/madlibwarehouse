import Navbar from "./Navbar";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {useState, useEffect} from 'react';


function Profile(props){


        const [userName, setUserName] = useState("User Name");
        function getUserName() {
            return getAuth().currentUser.displayName;
        
        }
        
        function isUserSignedIn() {
            return !!getAuth().currentUser;
        
        }
        
        function authObserver(user){
            if (user){
                let name = getAuth().currentUser.displayName;
                setUserName(name);
                
            }
        }
        onAuthStateChanged(getAuth(), authObserver);

    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="card col-">
                    
                    <h2 className='card-header' id='userNameTitle'>{userName}</h2>
                            <div class="card-body">
                                <p>Total Madlibs Created: </p>
                                <p>Your Madlib's total plays: </p>
                            </div>

                    Profile Page Under Construction

                    </div>

                    <table className="table col-md">
                                <tr>
                                <th>Title</th>
                                <th>Plays</th>
                                <th>Delete</th>
                                <th></th>
                            </tr>

                    </table>
                </div>        

            </div>
        </div>
    )
}

export default Profile;