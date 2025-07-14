import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/analytics';

import Topheader from './components/assets/Topheader';
import Header from './components/assets/Header';
import SignIn from './components/account/SignIn';
import SignUp from './components/account/SignUp';
import Herosection from './components/Custom/Herosection';
import HomePage from './components/assets/HomePage';
import AboutUs from './components/assets/AboutUs';
import Developments from './components/assets/Developments';
import Community from './components/assets/Community';
import Support from './components/assets/Support';
import Company from './components/assets/Company';
import Footer from './components/assets/Footer';
import LastFooter from './components/assets/Lastfooter';

function ModalRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCloseSignIn = () => navigate('/', { replace: true });
  const handleCloseSignUp = () => navigate('/', { replace: true });

  const handleToggleSignUp = () => navigate('/signup', { replace: true });
  const handleToggleSignIn = () => navigate('/signin', { replace: true });

  return (
    <>
      {location.pathname === '/signin' && (
        <SignIn show={true} onClose={handleCloseSignIn} toggleSignUp={handleToggleSignUp} />
      )}
      {location.pathname === '/signup' && (
        <SignUp show={true} onClose={handleCloseSignUp} toggleSignIn={handleToggleSignIn} />
      )}
    </>
  );
}

function AppContent() {
  return (
    <>
      <Topheader />
      <Header />
      <Herosection />
      <HomePage />
      <main className="main-container">
        <div className="content container py-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/developments/project1" element={<Developments />} />
              <Route path="/developments/project2" element={<Developments />} />
              <Route path="/community/event1" element={<Community />} />
              <Route path="/community/event2" element={<Community />} />
              <Route path="/support/faq" element={<Support />} />
              <Route path="/support/contact" element={<Support />} />
              <Route path="/company/about" element={<Company />} />
              <Route path="/company/careers" element={<Company />} />
              <Route path="/company/privacy" element={<Company />} />
              {/* SignIn and SignUp are handled outside of Routes via ModalRoutes */}
            </Routes>
          </Suspense>
        </div>
      </main>
      <Footer />
      <LastFooter />
    </>
  );
}

function App() {
  return (
    <Router>
      <ModalRoutes />
      <AppContent />
    </Router>
  );
}

export default App;