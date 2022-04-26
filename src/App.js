import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Error from './pages/Error';
import SignIn from './pages/Login';
import UserProfile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={ <SignIn />} />
            <Route path="/profile" element={ <UserProfile/>} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
