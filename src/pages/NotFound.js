import React from 'react';
import styles from '../css/Banner.module.css';
import textStyles from '../css/Text.module.css';

const NotFound = () => (
    <div style={{ height: '100%' }}>
        <h1 className={styles.banner}>Page is not found!</h1>

        <div className={textStyles.block} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            Go to{' '}
            <a style={{ color: '#fff' }} href="/tp-info/#/home">
                home page
            </a>
        </div>
    </div>
);

export default NotFound;
