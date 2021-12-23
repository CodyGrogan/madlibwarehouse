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
        const [userStories, setUserStories] = useState([]);
        const [totalMadlibs, setTotalMadlibs] = useState(0);
        const [totalPlays, setTotalPlays] = useState(0);
        const [listLoaded, setListLoaded] = useState(false);
        var initialLoad = false;
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
                console.log('authstate changed')
                let name = getAuth().currentUser.displayName;
                setUserName(name);

              
                }
             

            else
            {
              
                setUserName("Please Sign In")
                setListLoaded(false);
                setTotalPlays(0);
                setTotalMadlibs(0);
            }
        }



    function getUserStories(){
        
        if (initialLoad == false){
            initialLoad = true;
            let uid = getAuth().currentUser.uid;
            
            let pathstring = '/profile/getstory/' + uid;   
        
            console.log('getstories about to fetch')
            console.log("pathstring is "+pathstring)
            
            fetch(pathstring).then(response => response.json()).then(function (data){
                console.log(data);
                let length = data.length;
                let newArray = [];
                let totalplays = 0;
                for (let i = 0; i<length;i++){
    
                    let newjsx = <ProfileItem storyObject = {data[i]} deleteStory={deleteStory}/>
                    newArray.push(newjsx);
                    totalplays = totalplays + data[i].plays;
                }
                setTotalMadlibs(length);
                setTotalPlays(totalplays);
                setUserStories(newArray);
                let loader = document.getElementById('profileLoader');
                loader.hidden = true;
    
                
            })
        }
    }

    function deleteStory(storyObject){
        console.log('delete button pressed')
        let id = storyObject._id;
        let postpath = '/profile/delete/' + id;
        fetch(postpath, {
            method: 'DELETE', 
            headers: {
            'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);

            //this only sometimes works immediately, fix this
            setUserStories([]);
            let loader = document.getElementById('profileLoader');
            loader.hidden = false;
            setListLoaded(false);
            
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    
    }
        

    useEffect(() => {
        console.log('component mounted');
        
        console.log('initial load' + initialLoad)
        if (initialLoad == false){
        if (isUserSignedIn()==true){
        getUserStories();
        }
        
        }}, []);

    useEffect(() => {
        if (userName != 'Please Sign In'){
            if (listLoaded == false){
            setListLoaded(true);
            getUserStories();
            

            
            }
        }
        else
        {
            setUserStories([]);
        }
    }, [userName, listLoaded]);
    
    onAuthStateChanged(getAuth(), authObserver);

    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="card col- profCard">
                    
                    <h2 className='card-header' id='userNameTitle'>{userName}</h2>
                            <div class="card-body">
                                <p>Total Madlibs Created: {totalMadlibs}</p>
                                <p>Your Madlib's total plays: {totalPlays}</p>
                            </div>


                    </div>
                    

                    <table className="table col-md">
                    
                                <tr>
                                <th>Title</th>
                                <th>Plays</th>
                                <th>Delete</th>
                                
                            </tr>
                            <tr hidden id='profileLoader'>
                                <td></td>
                                <td><div className="loaderCon"><div className='loader'/></div> </td>
                                <td></td>
                            </tr>
                            {userStories}

                    </table>

                    
                </div>        

            </div>
        </div>
    )
}


//<ProfileItem storyObject={storyObject} deleteStory={deleteStory}/>
                            

export default Profile;