import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../css/Text.module.css';
import manuscript from './manuscript.png';
import basicStyles from '../css/Default.module.css';
import Template from './Template';

const Home = () => (
    <>
        <Template description="Notes by Iwan Kalinin" title="JKalinin">
            <h1 className={styles.header}>Сборник конспектов и прочего</h1>
            <Row className="justify-content-center" style={{ width: '100%' }}>
                <div style={{ textAlign: 'center', width: '90%' }}>
                    <img src={manuscript} alt="manuscript" className={basicStyles.picture} />
                </div>
            </Row>
        </Template>
    </>
);

export default Home;
