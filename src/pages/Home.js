import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../css/Info.module.css';

const Home = () => (
    <>
        <h1 className={styles.header}>Notes about gdb are done!</h1>

        <Outlet />
    </>
);

export default Home;
