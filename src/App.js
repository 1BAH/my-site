import './css/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './elements/NavBar';
import NotFound from './pages/NotFound';
import GDB from './topics/gdb/GDB';

function App() {
    return (
        <>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/gdb" element={<GDB />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <span className="text-muted text-center">Powered by Ivan Kalinin.</span>
                </div>
            </footer>
        </>
    );
}

export default App;
