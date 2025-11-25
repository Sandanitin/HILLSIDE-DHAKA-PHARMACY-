import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Prescriptions from './pages/Prescriptions';
import Immunizations from './pages/Immunizations';
import ClinicalServices from './pages/ClinicalServices';
import SpecialtyServices from './pages/SpecialtyServices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './pages/ScrollToTop';

function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/prescriptions" element={<Prescriptions />} />
          <Route path="/services/immunizations" element={<Immunizations />} />
          <Route path="/services/clinical-services" element={<ClinicalServices />} />
          <Route path="/services/specialty-services" element={<SpecialtyServices />} />
          <Route path="/health-resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}

export default App;