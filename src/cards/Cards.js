import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Cards = ({ cards }) => (
    <Container fluid>
        <Row xs={1} sm={2} lg={4} md={3} className=" justify-content-md-center">
            {cards}
        </Row>
    </Container>
);

export default Cards;
