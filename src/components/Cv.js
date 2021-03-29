const Cv = () => {
    return (
        <div className="row cv cv--divColor row-yazı--margin">
            <div className="col-6 --cover">
                <img className="cv-img" src="https://raw.githubusercontent.com/KlcAhmet/klcahmet.github.io/master-react/src/img/cv.png" alt="" />
            </div>
            <div className="col-6 --cover">
                <div className="col-12 cv-jop">
                    <div className="cv-jop">
                        <h6 className="cv-jop-title">-Best Buddies Türkiye</h6>
                        <p className="cv-jop-subtitle">Gönüllü Front-end Developer</p>
                    </div>
                    <div className="cv-jop">
                        <h6 className="cv-jop-title">-TC Sayıştay Başkanlığı</h6>
                        <p className="cv-jop-subtitle">Stajyer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cv