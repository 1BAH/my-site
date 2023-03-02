import { Spinner } from 'react-bootstrap';
import React from 'react';
import NavBar from './NavBar';

const Home = () => (
    <>
        <NavBar />

        <div style={{ textAlign: 'center' }}>
            <Spinner
                animation="border"
                style={{
                    color: '#1A237E',
                    height: '25rem',
                    width: '25rem',
                    margin: '3rem',
                }}
            />
        </div>
    </>
);

export default Home;
