import { Link } from "react-router-dom";

function Navbar(props){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <Link to='/'>Home</Link>
                   
                    <Link to='/play'>Play</Link>

                    <Link to='/create'>Create</Link>            </nav>
        </div>
    )
}

export default Navbar;