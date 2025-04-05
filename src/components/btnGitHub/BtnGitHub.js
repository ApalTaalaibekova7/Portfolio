import './style.css';
import img from "../../img/projects/Nike.jpg";
import gitHubIcon from "../../img/icons/gitHub-black.svg";

function BtnGitHub({link}) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHubIcon} alt="GitHub"/>
            GitHub repo
        </a>
    )
}

export default BtnGitHub;