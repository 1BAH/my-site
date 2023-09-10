import React from 'react';
import styles from '../css/Banner.module.css';
import textStyles from '../css/Text.module.css';
import title from '../hooks/title';

const NotFound = () => {
    title('JK Page Not Found');

    return (
        <div style={{ height: '100%' }}>
            <h1 className={styles.banner}>Page was not found!</h1>

            <div className={textStyles.block} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                Go to{' '}
                <a style={{ color: '#fff' }} href="/my-site/#/home">
                    home page
                </a>
            </div>
        </div>
    );
};

export default NotFound;
