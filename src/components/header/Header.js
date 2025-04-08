import './style.css'


function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Apal</em></strong><br/>
                    a Web Designer
                </h1>
                <div className="header__text">
                    <p>With passion for learning and creating.</p>
                </div>
                <a href="https://drive.google.com/file/d/1Go8eJZMPKCuuHjLe4TFHlbrPAASPr_by/view?usp=sharing" className="btn">Open CV</a>
            </div>
        </header>
    )
}

export default Header;