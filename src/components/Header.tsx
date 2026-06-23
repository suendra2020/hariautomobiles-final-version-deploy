import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, Calendar, Menu, X, Sun, Moon } from "lucide-react";
import { SEO_DATA } from "../data";
import HariLogo from "./HariLogo";
// Import Logos
import HariLightLogo from "../assets/images/hari-light.png";
import HariDarkLogo from "../assets/images/hari-dark.png";

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Header({ currentView, onOpenBooking, isDarkMode, onToggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About Us", path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "testimonials", label: "Testimonials", path: "/testimonials" },
    { id: "contact", label: "Contact Us", path: "/contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header id="site-header" className="sticky top-0 z-50 w-full border-b border-slate-900 bg-slate-950/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link 
          to="/"
          id="brand-logo" 
          className="flex cursor-pointer items-center gap-1"
          onClick={handleNavClick}
        >
                   <img
            src={isDarkMode ? HariLightLogo : HariDarkLogo}
            alt="Hari Automobiles Logo"
            className="h-20 w-auto transition-all duration-300"
          />

        </Link>

        {/* Desktop Navigation Link Items */}
        <nav id="desktop-nav" className="hidden md:flex md:items-center md:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              id={`nav-${item.id}`}
              className={`relative py-1.5 font-sans text-sm font-semibold tracking-wide transition-all duration-200 outline-none hover:text-[#e11d48] ${
                (currentView === item.id || (currentView === "" && item.id === "home"))
                  ? "text-[#e11d48] font-bold" 
                  : "text-slate-350"
              }`}
            >
              {item.label}
              {(currentView === item.id || (currentView === "" && item.id === "home")) && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#e11d48]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={onToggleTheme}
            id="theme-toggle-desktop"
            className="flex items-center justify-center p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun className="h-4.5 w-4.5 text-yellow-500" /> : <Moon className="h-4.5 w-4.5 text-[#e11d48]" />}
          </button>
          <a
            href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
            id="header-call-btn"
            className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3.5 py-1.5 font-sans text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-[#e11d48] transition-colors"
          >
            <Phone className="h-4 w-4 text-[#e11d48]" />
            <span>Call Workshop</span>
          </a>
          <button
            onClick={onOpenBooking}
            id="header-book-btn"
            className="flex items-center gap-1.5 rounded-lg bg-[#e11d48] px-4 py-2 font-sans text-xs font-bold text-white shadow-md shadow-rose-900/10 hover:bg-rose-700 transition-all cursor-pointer"
          >
            <Calendar className="h-4 w-4" />
            <span>Book Service</span>
          </button>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            id="theme-toggle-mobile"
            className="p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-350 hover:bg-slate-800 transition"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun className="h-4 w-4 text-yellow-500" /> : <Moon className="h-4 w-4 text-[#e11d48]" />}
          </button>
          <button
            onClick={onOpenBooking}
            id="mobile-action-book-btn"
            className="rounded-lg bg-[#e11d48] p-2 text-white hover:bg-rose-700"
            title="Book a Car Service"
          >
            <Calendar className="h-4 w-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-300 hover:bg-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay and Navigation Menu */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="absolute top-[100%] left-0 z-40 w-full border-b border-slate-900 bg-slate-950/98 py-5 px-6 shadow-2xl backdrop-blur-lg transition-transform duration-300 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                id={`mobile-nav-${item.id}`}
                onClick={handleNavClick}
                className={`py-2 text-left font-sans text-base font-bold tracking-wide border-b border-slate-900 ${
                  (currentView === item.id || (currentView === "" && item.id === "home")) ? "text-[#e11d48] font-extrabold" : "text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
                id="mobile-call-link"
                className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900 py-3 text-center font-sans text-sm font-semibold text-slate-300"
              >
                <Phone className="h-4 w-4 text-[#e11d48]" />
                <span>Call {SEO_DATA.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                id="mobile-book-link"
                className="flex items-center justify-center gap-2.5 rounded-xl bg-[#e11d48] py-3 text-center font-sans text-sm font-bold text-white shadow-lg shadow-rose-900/10 hover:bg-rose-700 transition"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Service Online</span>
              </button>
              <a
                href={`https://wa.me/${SEO_DATA.whatsapp.replace(/[+\s]/g, "")}?text=Hi%20Hari%20Automobiles,%20I%20would%20like%20to%20inquire%20about%20a%20car%20service.`}
                target="_blank"
                rel="noreferrer"
                id="mobile-whatsapp-link"
                className="flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 py-3 text-center font-sans text-sm font-bold text-white shadow-lg shadow-emerald-500/10"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
