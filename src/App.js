import './App.css';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import NavBar from './NavBar';

function App() {
    return (
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
}

export default App;
