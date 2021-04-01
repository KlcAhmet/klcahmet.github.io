import Particle from "./Particle"
import { Col } from 'react-bootstrap';
import { Startpage } from '../components map/Map'

function Homepage() {
    return (
        <div className="home">
            <div className="particle">
                <Particle />
            </div>
            <Col className="welcome" xs={12}>
                <h1 className="welcome__title">Ahmet Batuhan Kılıç</h1>
                <p className="welcome__subtitle">Front-end Developer</p>
            </Col>
            <Startpage />
        </div>
    )
}

export default Homepage