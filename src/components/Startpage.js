import { Col, Row } from 'react-bootstrap';
import eric1 from '../img/eric1.png'
import eric2 from '../img/eric2.png'
import eric3 from '../img/eric3.png'

const Startpage = () => {
    const hidden = () => {
        setTimeout(function () {
            document.getElementById('startpage').classList.add("hidden")
        }, 9000);
    }


    return (
        <Row id="startpage" className="startpage" style={{ padding: 0 }} onLoad={hidden}>
            <Col className="startpage-up" xs={12}>
                <div className="eric">
                    <Row>
                        <Col xs={4}><img className="eric-img eric-first img-fluid" src={eric1} alt="" /></Col>
                        <Col xs={4}><img className="eric-img eric-second  img-fluid" src={eric2} alt="" /></Col>
                        <Col xs={4}><img className="eric-img eric-third img-fluid" src={eric3} alt="" /></Col>
                    </Row>
                </div>
            </Col>
            <Col className="startpage-down" xs={12}>
                <p className="loading" style={{ fontSize: 25, color: 'white', marginLeft: 50 }}>Loading...</p>
            </Col>
        </Row>
    )
}

export default Startpage