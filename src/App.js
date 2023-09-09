import './css/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './elements/NavBar';
import NotFound from './pages/NotFound';
import GDB from './topics/gdb/GDB';
import IDE from './topics/ide/IDE';
import HotKeys from './topics/ide/hotkeys/HotKeys';
import Search from './search/Search';

function App() {
    return (
        <>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/gdb" element={<GDB />} />
                    <Route path="/ide" element={<IDE />} />
                    <Route path="/ide/hotkeys" element={<HotKeys />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <footer className="footer mt-auto py-3 App-footer">
                <div className="container">
                    <span className="text-center">Powered by Iwan Kalinin.</span>
                </div>
            </footer>
        </>
    );
}

export default App;
