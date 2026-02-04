import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AboutOverview from './pages/AboutOverview';
import AboutLeadership from './pages/AboutLeadership';
import AboutGlobal from './pages/AboutGlobal';
import AboutHistory from './pages/AboutHistory';
import AboutSustainability from './pages/AboutSustainability';
import HowWeWork from './pages/HowWeWork';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import DesignServices from './pages/DesignServices';
import ProductDevelopment from './pages/ProductDevelopment';
import Manufacturing from './pages/Manufacturing';
import QualityAssurance from './pages/QualityAssurance';
import LogisticsShipping from './pages/LogisticsShipping';
import GlobalPresence from './pages/GlobalPresence';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/overview" element={<AboutOverview />} />
            <Route path="/about/leadership" element={<AboutLeadership />} />
            <Route path="/about/global" element={<AboutGlobal />} />
            <Route path="/about/history" element={<AboutHistory />} />
            <Route path="/about/sustainability" element={<AboutSustainability />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/services/design" element={<DesignServices />} />
            <Route path="/services/development" element={<ProductDevelopment />} />
            <Route path="/services/manufacturing" element={<Manufacturing />} />
            <Route path="/services/quality" element={<QualityAssurance />} />
            <Route path="/services/logistics" element={<LogisticsShipping />} />
            <Route path="/global-presence" element={<GlobalPresence />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
