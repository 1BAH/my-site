import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Cards = ({ cards }) => (
    <Container>
        <Row xs={3} md={5} className="g-4 m-0 justify-content-md-center">
            {cards}
        </Row>
    </Container>
);

export default Cards;
