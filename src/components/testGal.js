/* eslint-disable array-callback-return */

import GalImages from './GalImages'
import { Col, Row } from 'react-bootstrap';


const theGal = () => {

    return (
        GalImages.map((src, description, id) => {
            <Row>
                    <Col className="lg-4 mb-4 mb-lg-0">
                    <img
                    key={id}
                    src={src}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt={description}
                    />
                    </Col>
                    
            </Row>
        })

    )

}

export default theGal;