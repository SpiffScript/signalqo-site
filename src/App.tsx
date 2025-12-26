import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { RoutePath } from "./types";

import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/ui/BackToTop';

import LandingPage from './components/LandingPage';
import Services from './components/Services';
import Leadership from './components/Leadership';
import Solutions from './components/Solutions';
import NextSteps from './components/NextSteps';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './NotFound';

import Terms from './components/legal/Terms';
import Privacy from './components/legal/Privacy';
import AcceptableUse from './components/legal/AcceptableUse';

import Seo from "./components/Seo";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Seo />
      <Header />

      <main className="flex-grow pt-16">
        <Routes>
          <Route path={RoutePath.HOME} element={<LandingPage />} />
          <Route path={RoutePath.SERVICES} element={<Services />} />
          <Route path={RoutePath.LEADERSHIPQO} element={<Leadership />} />
          <Route path={RoutePath.SOLUTIONS} element={<Solutions />} />
          <Route path={RoutePath.NEXT_STEPS} element={<NextSteps />} />
          <Route path={RoutePath.ABOUT} element={<About />} />
          <Route path={RoutePath.CONTACT} element={<Contact />} />

          <Route path={RoutePath.TERMS} element={<Terms />} />
          <Route path={RoutePath.PRIVACY} element={<Privacy />} />
          <Route path={RoutePath.ACCEPTABLE_USE} element={<AcceptableUse />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
