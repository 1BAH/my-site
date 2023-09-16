import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import styles from '../css/Card.module.css';

const AnchorCard = ({ img, title, description, url, anchor }) => (
    <Card className={styles.card}>
        <Card.Img src={img} style={{ maxHeight: '50%' }} />
        <Card.Body>
            <Card.Title style={{ color: '#fff' }}>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <HashLink to={`${url}#${anchor}`} style={{ textDecoration: 'none' }}>
                <Button className={styles.but}>Перейти</Button>
            </HashLink>
        </Card.Body>
    </Card>
);

export default AnchorCard;
