import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../css/Text.module.css';
import manuscript from './manuscript.png';
import basicStyles from '../css/Default.module.css';

const Home = () => (
    <>
        <h1 className={styles.header}>Сборник конспектов и прочего</h1>
        <div style={{ textAlign: 'center' }}>
            <img src={manuscript} alt="manuscript" className={basicStyles.picture} />
        </div>
        <Outlet />
    </>
);

export default Home;
