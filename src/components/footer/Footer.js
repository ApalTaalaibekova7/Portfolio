import './style.css'


import instagram from '../../img/icons/instagram.svg'; 
import  telegram from '../../img/icons/tg.png';
import  linkedIn from '../../img/icons/linkedIn.svg';
import  gitHub from '../../img/icons/gitHub.svg';
import fiverr from '../../img/icons/fiverr-new';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://github.com/ApalTaalaibekova7"><img src={gitHub} alt="Link"/></a>
                        </li>
                        <li className="social__item"><a href="https://t.me/ApalTaalaibekova"><img src={telegram} alt="Link"/></a>
                        </li>
                        <li className="social__item"><a href="linkedin.com/in/apal-taalaibekova-815b70324"><img src={linkedIn} alt="Link"/></a>
                        </li>
                        <li className="social__item"><a href="https://www.fiverr.com/s/1qL4rA5"><img src={fiverr} alt="Link"/></a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2025 | Apal Taalaibekova </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;