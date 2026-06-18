import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLayout from '../layouts/userlayout';
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/login';
import Dashboard from './pages/protected/DashBoard';
import ProfileDetails from './pages/protected/ProfileDetail';
import Porutham from './pages/Porutham';
import Muhurtham from './pages/Muhurtham';

function App() {
  return (
    <UserLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:profileId" element={<ProfileDetails />} />
        <Route path="/porutham" element={<Porutham />} />
        <Route path="/muhurtham" element={<Muhurtham />} />
      </Routes>
    </UserLayout>
  );
}

export default App;
