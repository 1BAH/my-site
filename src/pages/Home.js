import React from 'react';
import styles from '../css/Text.module.css';
import manuscript from './manuscript.png';
import basicStyles from '../css/Default.module.css';
import title from '../hooks/title';

const Home = () => {
    title('JKalinin');

    return (
        <>
            <h1 className={styles.header}>Сборник конспектов и прочего</h1>
            <div style={{ textAlign: 'center', width: '90%' }}>
                <img src={manuscript} alt="manuscript" className={basicStyles.picture} />
            </div>
        </>
    );
};

export default Home;
