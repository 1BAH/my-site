import './App.css';
import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from "./Home";

function App() {
    return (
        <>
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        </>
    );
}

export default App;
