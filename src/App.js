import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Play from './components/Play';
import Notfound from './components/Notfound';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import Profile from './components/Profile';
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "AIzaSyBD62sH1z9-cksAFFiRTXZmrhK3cKtV7nA",

  authDomain: "madlibwarehouse.firebaseapp.com",

  projectId: "madlibwarehouse",

  storageBucket: "madlibwarehouse.appspot.com",

  messagingSenderId: "675941850696",

  appId: "1:675941850696:web:3bfcb52b7a1536aca9827d",

  measurementId: "G-WMLDV4WNMT"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


async function signIn() {
  console.log("sign in button pressed")

  var provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
    });
  await signInWithPopup(getAuth(), provider);

}

window.signIn = signIn;

function signOutUser() {

  signOut(getAuth());

}



  function authStateObserver(user) {
    if (user) {
      console.log("user is signed in")
      var userName = getUserName();
  
    }
  }

function initFirebaseAuth() {
  onAuthStateChanged(getAuth(), authStateObserver);

}

function getUserName() {
  return getAuth().currentUser.displayName;

}

function isUserSignedIn() {
  return !!getAuth().currentUser;

}



function App() {
  initFirebaseAuth();
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/index.html' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/play' element={<Play/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='*' element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
