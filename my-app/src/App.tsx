import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login';
import Home from './components/Home';

const App: React.FC = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
