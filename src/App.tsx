import React, { Suspense, useEffect } from 'react';
import { HashRouter, Route, Routes, Navigate, Outlet, BrowserRouter } from 'react-router-dom';
import { BackToTop, ScrollProgress } from './action';
import { Footer, Header, BottomNavigations } from './components';

import "../src/assets/css/index.css"

import { useGlobal } from './context/GlobalContext';

const Home = React.lazy(() => import('./view/home'));
const About = React.lazy(() => import('./view/about'));
const Menu = React.lazy(() => import('./view/menu'));
const Service = React.lazy(() => import('./view/service'));
const Contact = React.lazy(() => import('./view/contact'));

const ProtectedRoute: React.FC = () => {
  const { isMobile } = useGlobal();
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <ScrollProgress />
      <BackToTop />
      {/* <!-- Header --> */}
      <Header />
      {isMobile == true && <BottomNavigations />}
      <Outlet />
      <Footer />
    </div>

  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  )
};

export default App
