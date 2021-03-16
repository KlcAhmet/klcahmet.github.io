import Carousel from 'react-bootstrap/Carousel'
import { useState } from "react";


function Projeresim() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="projeresim">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://raw.githubusercontent.com/KlcAhmet/klcahmet.github.io/master-react/src/img/proje/covid1.png"
                        alt="Covid-19 Information"
                    />
                    <Carousel.Caption>
                        <h3>Covid-19 Information</h3>
                        <a href="https://klcahmet.github.io/kodluyoruz-final-proje/" target="_blank">Covid-19 bilgilendirme sitesi</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://raw.githubusercontent.com/KlcAhmet/klcahmet.github.io/master-react/src/img/proje/ulke%20bilgileri.png"
                        alt="Country Information"
                    />

                    <Carousel.Caption>
                        <h3>Country Information</h3>
                        <a href="https://klcahmet.github.io/datatable-test/" target="_blank">Aradığınız içeriğe göre ülkeleri gösteren site</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://raw.githubusercontent.com/KlcAhmet/klcahmet.github.io/master-react/src/img/proje/Sentiment-Analysis.png"
                        alt="Sentiment Analysis"
                    />
                    <Carousel.Caption>
                        <h3>Sentiment Analysis</h3>
                        <a href="https://github.com/KlcAhmet/Sentiment-Analysis" target="_blank">İngilizce metinden duygu çıkarımı yapan program</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://raw.githubusercontent.com/KlcAhmet/klcahmet.github.io/master-react/src/img/proje/datahouse.png"
                        alt="Sentiment Analysis"
                    />
                    <Carousel.Caption>
                        <h3>Data Warehouse</h3>
                        <a href="https://klcahmet.github.io/kodluyoruz-odev-V/" target="_blank">Data Warehouse Template</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Projeresim