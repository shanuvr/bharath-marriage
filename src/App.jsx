import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLayout from '../layouts/userlayout';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <UserLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </UserLayout>
  );
}

export default App;
