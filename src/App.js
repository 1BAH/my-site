import './css/App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Home from './pages/Home';
import NavBar from './elements/NavBar';
import NotFound from './pages/NotFound';
import GDB from './topics/gdb/GDB';
import IDE from './topics/ide/IDE';
import HotKeys from './topics/ide/hotkeys/HotKeys';
import Search from './search/Search';
import MLTA from './topics/mlta/MLTA';
import Copyright from './pages/Copyright';

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
                    <Route path="/mlta" element={<MLTA />} />
                    <Route path="/copyright" element={<Copyright />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <footer className="footer mt-auto py-3 App-footer">
                <Row style={{ width: '100%' }}>
                    <Col>
                        <div className="ms-4">
                            <span className="text-center">Powered by Iwan Kalinin.</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-end">
                            <Link to="/copyright" style={{ color: 'white', fontSize: 'smaller' }}>
                                Copyright
                            </Link>
                        </div>
                    </Col>
                </Row>
            </footer>
        </>
    );
}

export default App;
