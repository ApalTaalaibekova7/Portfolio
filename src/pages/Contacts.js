function Contacts() {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Turkey, Tunceli</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+905308273171">+90 (530) 827 31 71</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p> 
                            <a href="mailto:apaltaalaibekova7@gmail.com">
                            Apaltaalaibekova7@gmail.com</a> 
                        </p>
                    </li>
                </ul>

            </div>
        </main>
    )
}

export default Contacts;