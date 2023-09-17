import React from 'react';
import styles from '../css/Banner.module.css';
import textStyles from '../css/Text.module.css';
import Template from './Template';

const NotFound = () => (
    <Template title="JK Page Not Found" description="Page does not exist">
        <div style={{ height: '100%' }}>
            <h1 className={styles.banner}>Page was not found!</h1>

            <div className={textStyles.block} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                Go to{' '}
                <a style={{ color: '#fff' }} href="/my-site/#/home">
                    home page
                </a>
            </div>
        </div>
    </Template>
);

export default NotFound;
