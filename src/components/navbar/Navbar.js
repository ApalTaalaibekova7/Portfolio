import { useNavigate, useLocation, NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import './style.css';

function Navbar () {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToServices = () => {
        if (location.pathname !== "/") {
            navigate("/");

            // после перехода подождём и потом прокрутим
            setTimeout(() => {
                const section = document.getElementById("services");
                section?.scrollIntoView({ behavior: "smooth" });
            }, 100); // можно увеличить до 200 при медленной загрузке
        } else {
            const section = document.getElementById("services");
            section?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to='/' className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>
                                Home
                            </NavLink>    
                        </li>
                        <li className="nav-list__item">
                            <button className={normalLink} onClick={scrollToServices}>
                                My Services
                            </button>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/projects' className={({isActive}) => isActive ? activeLink : normalLink}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/contacts' className={({isActive}) => isActive ? activeLink : normalLink}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
