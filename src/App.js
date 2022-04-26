import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
