import Header from "../components/header/Header";
import './Home.css'

function Home() {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
                <div id="services">
                    <h2 className="title-1" style={{ textAlign: 'center' }}>
                        My <span style={{ color: '#5C62EC' }}>Services</span>
                    </h2>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <img src="https://img.wazobia.tech/https://sytbuildr.s3.eu-west-2.amazonaws.com/0406191c-f351-4a58-b164-b9521b3d78c5/IssqiRoH1jG1PNZDhltkd1kPaEE6P7EmC8sdLt0L.jpg?tr=w-1500" alt="UX Design" className="service-img" />
                            <h3 className="service-title">UX Design</h3>
                        </div>
                        <div className="service-card">
                            <img src="https://amadine.com/assets/img/articles/ux-vs-ui/ui-design-field-of-operation@2x.png" alt="UI Design" className="service-img" />
                            <h3 className="service-title">UI Design</h3>
                        </div>
                        <div className="service-card">
                            <img src="https://t3.ftcdn.net/jpg/03/54/17/86/360_F_354178616_uSdqA6i1A1vkkskFPKOoxQOED0ZMIcn3.jpg" alt="Web Design" className="service-img" />
                            <h3 className="service-title">Web Design</h3>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;
