import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/analytics';


import Header from './components/assets/Header';
import Footer from './components/assets/Footer';
import Herosection from './components/Custom/Herosection';
import Topheader from './components/assets/Topheader';


import HomePage from './components/assets/HomePage';
import AboutUs from './components/assets/AboutUs';
import Developments from './components/assets/Developments';
import Community from './components/assets/Community';
import Support from './components/assets/Support';
import Company from './components/assets/Company';
import SignIn from './components/account/SignIn';
import SignUp from './components/account/SignUp';
import ContactUs from './components/account/ContactUs';
import LastFooter from './components/assets/Lastfooter';

function App() {
  return (
    <Router>
      <div className="App">
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
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/contactus" element={<ContactUs />} />
              </Routes>
            </Suspense>
          </div>
        </main>

        <Footer />
        <LastFooter />
      </div>
    </Router>
  );
}

export default App;