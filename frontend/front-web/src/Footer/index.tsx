import './styles.css';
import {ReactComponent as InstagramImage} from './instagram.svg';

function Footer(){
  return(
    <footer className="main-footer">
        App desenvolvido para lhe trazer mais conforto na hora de beber
        <div className="footer-icons">
            <a href="teste" target="_new"> <InstagramImage/> </a>
            <a href="teste" target="_new"> <InstagramImage/> </a>
        </div>
    </footer>
  )
}


export default Footer;