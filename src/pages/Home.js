import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../css/Text.module.css';

const Home = () => (
    <>
        <h1 className={styles.header}>Здесь можно оставить пожелания и замечания</h1>

        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScdRhdgYe8y_oWb7YVw9zyGIdI2Yvvz5QdZCyKFCveC9mxveA/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="form"
        >
            Загрузка…
        </iframe>
        <Outlet />
    </>
);

export default Home;
