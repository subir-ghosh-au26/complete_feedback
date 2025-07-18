import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileValidation from './components/MobileValidation';
import FeedbackForm from './components/FeedbackForm';
import AdminLogin from './components/AdminLogin'; // Import AdminLogin
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MobileValidation />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/admin" element={<AdminLogin />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;