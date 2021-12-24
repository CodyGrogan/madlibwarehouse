import github from './img/github.png'; 
import reacticon from './img/logo192.png';


function Footer(props){
    return(
        <footer>
            <p>Cody Grogan</p>
            <a href='https://github.com/CodyGrogan/madlibwarehouse' target="_blank"><img src={github} className='gitLink'  data-toggle="tooltip" data-placement="top" title="Github"/></a>

        </footer>
    )
}

export default Footer;