import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';    
import MainPage from './pages/MainScreen'; 
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NetworkPage from './pages/NetworkPage';
import VacanciesPage from './pages/VacanciesPage';
import MessagesPage from './pages/MessagesPage';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/vacancies" element={<VacanciesPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
  );
}

export default App;