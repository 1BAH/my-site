import { Spinner } from 'react-bootstrap';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => (
    <>
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

        <div
            style={{
                color: '#6c757d',
                height: '15px',
                textAlign: 'center',
                width: '100%',
                marginBottom: '35px',
            }}
        >
            gdb page is in progress
        </div>

        <Outlet />
    </>
);

export default Home;
