import Navbar from "./Navbar";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {useState, useEffect} from 'react';
import ProfileItem from "./ProfileItem";


function Profile(props){


        const [userName, setUserName] = useState("Please Sign In");


        //temp obj for testing
        let storyObject = {
            wordList: [
                "(adjective)",
                "(Name)",
                "(verb)",
                "(food)",
                "(noun)"
            ],
            story: "I once had a #0 pony named #1. He loved to #2 all night long. He ate #3 every morning. He had a favorite toy #4 that he slept with every night. ",
            title: "My Little Pony",
            name: 'Tester',
            uid: 'testid',
            plays: 0
        };


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

            else
            {
                setUserName("Please Sign In")
            }
        }

        function deleteStory(){
            console.log('delete button pressed')
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
                                
                            </tr>
                          
                                <ProfileItem storyObject={storyObject} deleteStory={deleteStory}/>
                            

                    </table>
                </div>        

            </div>
        </div>
    )
}

export default Profile;