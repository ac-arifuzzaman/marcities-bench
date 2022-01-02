import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContuctUs from './Pages/Home/ContuctUs/ContuctUs';
import Home from './Pages/Home/Home/Home';
import Service from './Pages/Home/Service/Service';
import Login from './Pages/Login/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contuctus" element={<ContuctUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;