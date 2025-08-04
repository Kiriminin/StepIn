import React from 'react';
<<<<<<< HEAD
import LandingHeader from './components/LandingHeader';
import WelcomeSection from './components/WelcomeSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <LandingHeader />
      <WelcomeSection />
    </div>
=======
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';    
import MainPage from './pages/MainScreen'; 
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<MainPage />} />
      </Routes> 
    </BrowserRouter>  
>>>>>>> 73d59c9 (Commit)
  );
}

export default App;