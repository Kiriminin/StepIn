import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';    
import MainPage from './pages/MainScreen'; 
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>  
  );
}

export default App;