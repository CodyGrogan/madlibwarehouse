import react from 'react';
import Navbar from './Navbar';
import playimg from './img/play.PNG';
import createimg from './img/create.png';
import profileimg from './img/profile.PNG';
import shareimg from './img/share.PNG'
import { Link } from "react-router-dom";


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
                    <Link className="navbar-brand nav-link" to='/play'> <h2 className='imgCap'>Share your Creation with the World</h2></Link>  
                </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 carouselImg" src={profileimg} alt="Fourth slide"/>
                <div class="carousel-caption">
                    <Link className="navbar-brand nav-link" to='/profile'> <h2 className='imgCap'>Track the popularity of your Madlibs</h2></Link>  
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

    </div>
        </div>

    )

}

export default Home;