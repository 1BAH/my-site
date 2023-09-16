import React from 'react';
import { Button, Card } from 'react-bootstrap';
import styles from '../css/Card.module.css';

const BasicCard = ({ img, title, description, handler = () => {} }) => (
    <Card className={styles.card}>
        <Card.Img src={img} style={{ maxHeight: '50%' }} />
        <Card.Body>
            <Card.Title style={{ color: '#fff' }}>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button className={styles.but} onClick={handler}>
                Перейти
            </Button>
        </Card.Body>
    </Card>
);

export default BasicCard;
