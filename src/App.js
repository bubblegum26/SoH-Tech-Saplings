import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Login, Volunteer, Store, About, Dashboard, Home2 } from './components';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/store" element={<Store />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;