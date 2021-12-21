import react from 'react';
import Navbar from './Navbar';
import playimg from './img/play.PNG';
import createimg from './img/create.png';
import profileimg from './img/profile.PNG';
import shareimg from './img/share.PNG'


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
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 carouselImg" src={createimg} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 carouselImg" src={shareimg} alt="Third slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 carouselImg" src={profileimg} alt="Fourth slide"/>
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