import './style.css';
import img from "../../img/projects/Nike.jpg";
import gitHubIcon from "../../img/icons/fıgma.png";

function BtnGitHub({link}) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img className='figma-icon' src={gitHubIcon} alt="Figma"/>
            Open 
        </a>
    )
}

export default BtnGitHub;