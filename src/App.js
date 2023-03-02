import './css/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './elements/NavBar';
import NotFound from './pages/NotFound';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/tp-info/home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
