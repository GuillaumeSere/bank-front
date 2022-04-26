import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
