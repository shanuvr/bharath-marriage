import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import UserLayout from '../layouts/userlayout';
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/login';
import Dashboard from './pages/protected/DashBoard';
import ProfileDetails from './pages/protected/ProfileDetail';
import Porutham from './pages/Porutham';
import Muhurtham from './pages/Muhurtham';
import Contact from './pages/contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <UserLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:profileId" element={<ProfileDetails />} />
        <Route path="/porutham" element={<Porutham />} />
        <Route path="/muhurtham" element={<Muhurtham />} />
        <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
    </UserLayout>
  );
}

export default App;

