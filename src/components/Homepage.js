import Particle from "./Particle"
import { Col } from 'react-bootstrap';
import { Startpage } from '../components map/Map'
import Github from '../img/Github.svg'
import Envelope from '../img/Envelope.svg'
import Google from '../img/Google.svg'
import Instagram from '../img/Instagram.svg'
import Linkedin from '../img/Linkedin.svg'
import { useState } from "react";

function Homepage() {
    const [display, setDisplay] = useState("none")
    function hiddenRemove() {
        setTimeout(function () {
            setDisplay("flex")
        }, 5500);
    }

    return (
        <div onLoad={hiddenRemove} className="home">
            <Startpage />
            <div className="particle">
                <Particle />
            </div>
            <Col className="welcome" style={{ display: display }} xs={12}>
                <h1 className="welcome-title">Ahmet Batuhan Kılıç</h1>
                <p className="welcome-subtitle">Front-end Developer</p>
                <div className="welcome-socialmedia">
                    <a href="https://github.com/KlcAhmet" target="_blank" rel="noreferrer"><img className="welcome-socialmedia-github" src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/ahmet-batuhan-kılıç-b88975129/" target="_blank" rel="noreferrer"><img className="welcome-socialmedia-linkedin" src={Linkedin} alt="" /></a>
                    <a href="https://www.instagram.com/ahmetbatukilic/" target="_blank" rel="noreferrer"><img className="welcome-socialmedia-ins" src={Instagram} alt="" /></a>
                    <a href="https://g.page/AhmetBatuhanKilic?share" target="_blank" rel="noreferrer"><img className="welcome-socialmedia-google" src={Google} alt="" /></a>
                    <a href="mailto:ahmetbatukilic@gmail.com" rel="noreferrer"><img className="welcome-socialmedia-env" src={Envelope} alt="" /></a>
                </div>
                <div className="welcome-sup">
                    <a href="https://www.kodluyoruz.org/" target="_blank" rel="noreferrer"><img className="welcome-sup-kodluyoruz" src="https://omergulcicek.com/img/kodluyoruz.png" alt="" /></a>
                    <a href="http://www.bestbuddiesturkey.org/" target="_blank" rel="noreferrer"><img className="welcome-sup-buddies" src="https://www.bestbuddies.org/wp-content/uploads/2017/01/Best-Buddies-Logo-retina.png" alt="" /></a>
                </div>
            </Col>
        </div>
    )
}

export default Homepage