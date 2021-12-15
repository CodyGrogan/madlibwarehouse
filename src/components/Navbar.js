import { Link } from "react-router-dom";

function Navbar(props){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            

                    <Link className="navbar-brand nav-link" to='/'> Home</Link>
                 
                    <Link className="navbar-brand nav-link" to='/play'>Play</Link>
              
                    <Link className="navbar-brand nav-link" to='/create'>Create</Link>   
                    
                    <Link className="navbar-brand nav-link" to='/'>Profile</Link>   
                    
                    <button type="button" className='navbar-brand btn btn-outline-primary'  id="sign-in" onclick="signIn()" >
                    <i className="material-icons">account_circle</i>Sign-in with Google
                  </button>
                  
            </div>
            </nav>
        </div>
    )
}

export default Navbar;