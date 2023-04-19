import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../css/Text.module.css';

const Home = () => (
    <>
        <h1 className={styles.header}>Notes about gdb are done!</h1>

        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScdRhdgYe8y_oWb7YVw9zyGIdI2Yvvz5QdZCyKFCveC9mxveA/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
        >
            Загрузка…
        </iframe>
        <Outlet />
    </>
);

export default Home;
