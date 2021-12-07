import React from 'react'
import { Container,Carousel } from 'react-bootstrap'

const CorouselComponent = () => {
    return (
        <Container style={{ paddingTop: "10px"}} >
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.K61Ya5cCid-nHT0Ov-4nFgHaE8%26pid%3DApi&f=1"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Smart Irrigation System</h3>
                    <p>Soil moisture systems use sensors to monitor moisture content in the soil; watering is adjusted accordingly.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OUmeZkyCO70X4qUiNgzedAHaDt%26pid%3DApi&f=1"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Smart Irrigation System</h3>
                    <p>Soil moisture systems use sensors to monitor moisture content in the soil; watering is adjusted accordingly.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-hMM7liTVslytO6-xqBYlAHaEv%26pid%3DApi&f=1"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Smart Irrigation System</h3>
                    <p>Soil moisture systems use sensors to monitor moisture content in the soil; watering is adjusted accordingly.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default CorouselComponent
