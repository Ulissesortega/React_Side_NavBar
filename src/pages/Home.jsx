import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Row className="piclocation">
                <Col lg={6}>
                    <img className='picborderradius img-fluid picsize' src={require('../Assets/pictest.png')} alt="Logo" width={450} />
                </Col>

                <Col lg={6} className="d-flex align-items-center">
                    <p className='maintextloc'>HI THERE I'M</p>
                    <p className='titleloc'><span className='blue'>Ulises</span> Ortega</p>
                </Col>

                <Col>
                    <p className='summary'>Jr. Web Developer </p>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
