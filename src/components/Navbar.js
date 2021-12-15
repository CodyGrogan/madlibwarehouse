import { Link } from "react-router-dom";

function Navbar(props){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <Link class="navbar-brand" to='/'>Home</Link>
                 
                    <Link class="navbar-brand" to='/play'>Play</Link>
              
                    <Link class="navbar-brand" to='/create'>Create</Link>   
                     
                  
            </nav>
        </div>
    )
}

export default Navbar;