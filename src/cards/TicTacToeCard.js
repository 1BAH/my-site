import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../css/Card.module.css';
import ttt from './img/tic-tac-toe.png';

export default function TicTacToeCard() {
    return (
        <Card className={styles.card}>
            <Card.Img src={ttt} style={{ maxHeight: '50%' }} />
            <Card.Body>
                <Card.Title>Крестики-нолики</Card.Title>
                <Card.Text>Простенькая реализация игры &quot;крестики-нолики&quot;</Card.Text>
                <Link to="https://1bah.github.io/oppo-tictactoe">
                    <Button className={styles.but} onClick={() => {}}>
                        Перейти
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}
