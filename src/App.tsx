import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import FloatingButtons from "./components/FloatingButtons";
import SplashScreen from "./components/SplashScreen";

// Views
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ServicesView from "./views/ServicesView";
import TestimonialsView from "./views/TestimonialsView";
import ContactView from "./views/ContactView";
import SeoLandingView from "./views/SeoLandingView";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("hari_autos_theme");
    return saved ? saved === "dark" : true;
  });

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const newVal = !prev;
      localStorage.setItem("hari_autos_theme", newVal ? "dark" : "light");
      return newVal;
    });
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  // Map pathname to view ID for Header highlighting
  const currentView = location.pathname === "/" ? "home" : location.pathname.substring(1);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <div 
        id="app-root" 
        className={`min-h-screen flex flex-col overflow-x-clip selection:bg-[#e11d48] selection:text-white transition-colors duration-300 ${
          isDarkMode 
            ? "bg-slate-950 text-slate-100 dark-theme" 
            : "bg-white text-slate-900 light-theme"
        }`}
      >
        <Header 
          currentView={currentView} 
          onNavigate={() => {}} // Navigation handled by Links now
          onOpenBooking={() => setIsBookingOpen(true)} 
          isDarkMode={isDarkMode}
          onToggleTheme={handleToggleTheme}
        />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <HomeView 
                onNavigate={() => {}} 
                onOpenBooking={() => setIsBookingOpen(true)}
                onSelectService={handleSelectService}
              />
            } />
            <Route path="/about" element={<AboutView />} />
            <Route path="/services" element={
              <ServicesView 
                onOpenBooking={() => setIsBookingOpen(true)}
                selectedServiceId={selectedServiceId}
                setSelectedServiceId={setSelectedServiceId}
              />
            } />
            <Route path="/testimonials" element={<TestimonialsView />} />
            <Route path="/contact" element={
              <ContactView 
                onOpenBooking={() => setIsBookingOpen(true)}
              />
            } />
            <Route path="/seo-hub" element={
              <SeoLandingView 
                onOpenBooking={() => setIsBookingOpen(true)}
              />
            } />
            <Route path="/location/:slug" element={
              <SeoLandingView 
                onOpenBooking={() => setIsBookingOpen(true)}
              />
            } />
          </Routes>
        </main>

        <Footer 
          onNavigate={() => {}} 
          onOpenBooking={() => setIsBookingOpen(true)} 
          isDarkMode={isDarkMode}
        />

        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={() => {
            setIsBookingOpen(false);
            setSelectedServiceId(undefined);
          }} 
          selectedServiceId={selectedServiceId}
        />

        <FloatingButtons onOpenBooking={() => setIsBookingOpen(true)} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}
