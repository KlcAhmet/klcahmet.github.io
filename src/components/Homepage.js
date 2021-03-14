import Particle from "./Particle"

function Homepage() {
    return (
        <div className="home">
            <div className="particle">
                <Particle />
            </div>
            <div className="welcome">
                <h1 className="welcome__title">Ahmet Batuhan Kılıç</h1>
                <p className="welcome__subtitle">Front-end Developer</p>
            </div>
        </div>
    )
}

export default Homepage