import React from 'react';
import { Row } from 'react-bootstrap';
import basicStyles from '../css/Default.module.css';

const Img = ({ img, width }) => (
    <Row className="justify-content-center" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', width: `${width}%`, marginTop: '5px' }}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={img} alt="image" className={basicStyles.picture} />
        </div>
    </Row>
);

export default Img;
