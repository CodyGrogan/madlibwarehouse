import react from 'react';
import Navbar from './Navbar';
import playimg from './img/play.PNG';
import createimg from './img/create.png';
import profileimg from './img/profile.PNG';
import shareimg from './img/share.PNG'
import { Link } from "react-router-dom";
import html5icon from './img/html5.png';
import cssicon from './img/css.png';
import jsicon from './img/javascript.png';
import nodeicon from './img/node.png';
import reacticon from './img/logo192.png';
import mongoicon from './img/mongo.png';
import expressicon from './img/Expressjs.png';
import Footer from './Footer';


function Home(props){

    return(

        <div>
            <Navbar/>
        <div className='pageCon'>
            <h2>Welcome to Madlib Warehouse</h2>
      <p>Play, Create, and Share Madlibs</p>
      


    <div id='carouselContainer' className='carouselCon'>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100 carouselImg"  src={playimg} alt="First slide"/>
                <div class="carousel-caption">
                <Link className="navbar-brand nav-link" to='/play'><h2 className='imgCap'>Play Madlibs</h2></Link>    
                     
                </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 carouselImg" src={createimg} alt="Second slide"/>
                <div class="carousel-caption">
                <Link className="navbar-brand nav-link" to='/create'><h2 className='imgCap'>Create your own Madlibs</h2></Link>
                     
                </div>

                </div>
                <div class="carousel-item">
                <img class="d-block w-100 carouselImg" src={shareimg} alt="Third slide"/>
                <div class="carousel-caption">
                    <Link className="navbar-brand nav-link" to='/play'> <h2 className='imgCap'>Share your Creation</h2></Link>  
                </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 carouselImg" src={profileimg} alt="Fourth slide"/>
                <div class="carousel-caption">
                    <Link className="navbar-brand nav-link" to='/profile'> <h2 className='imgCap'>Track their Popularity</h2></Link>  
                </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>

    </div>

    <div>
    <p>This project was made with:</p>
    <div id='about' className='aboutCon'>
        
        <img className='aboutIcon' src={html5icon} data-toggle="tooltip" data-placement="top" title="HTML5" />
        <img className='aboutIcon' src={cssicon} data-toggle="tooltip" data-placement="top" title="CSS" />
        <img className='aboutIcon' src={jsicon} data-toggle="tooltip" data-placement="top" title="JavaScript"/>
        <img className='aboutIcon' src={reacticon} data-toggle="tooltip" data-placement="top" title="React.js"/>
        <img className='aboutIcon' src={mongoicon} data-toggle="tooltip" data-placement="top" title="MongoDB"/>
        <img className='aboutIcon' src={nodeicon} data-toggle="tooltip" data-placement="top" title="Node.js"/>
        <img className='aboutIcon' src={expressicon} data-toggle="tooltip" data-placement="top" title="express.js"/>

    </div>

    </div>
    </div>

    <Footer/>
    </div>
        

    )

}

export default Home;