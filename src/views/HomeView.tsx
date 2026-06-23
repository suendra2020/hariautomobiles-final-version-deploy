/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Wrench, Check, ShieldCheck, UserCheck, Settings, Tag, Clock, 
  MapPin, Star, MessageSquare, Calendar, Sparkles, ChevronRight, Phone,
  Truck, Compass, Paintbrush, Award, Activity, CheckSquare, ThumbsUp
} from "lucide-react";
import { SERVICES, BRANDS, REVIEWS, SEO_DATA, BANGALORE_AREAS } from "../data";
import HariLogo from "../components/HariLogo";
import InstagramReelsSection from "../components/InstagramReelsSection";
import Hls from "hls.js";
import fiat from "../assets/images/fiat-1.jpg";
 import bodypaint from "../assets/images/body_paint_restoration_1782130820315.jpg";
import harivideo from "../assets/images/hari.mp4";
import values from "../assets/images/value_parts_partner_1782126542459.jpg";
import shell from "../assets/images/shell_oil_partner_1782126558723.jpg";

import batteries from "../assets/images/batteries.png";

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
  onSelectService: (serviceId: string) => void;
}

// ----------------------------------------------------
// HIGH FIDELITY BRAND LOGO VECTOR SVGs FOR REAL LOOK
// ----------------------------------------------------
function BrandLogo({ name, className = "h-8 w-8" }: { name: string; className?: string }) {
  switch (name.toLowerCase()) {
    case "fiat":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" fill="#991b1b" stroke="#e2e8f0" strokeWidth="3" />
          <text x="50" y="58" fontFamily="system-ui, sans-serif" fontWeight="950" fontSize="22" fill="#ffffff" textAnchor="middle" letterSpacing="1">FIAT</text>
        </svg>
      );
    case "jeep":
      return (
        <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="60" y="29" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="27" fill="#ffffff" textAnchor="middle" letterSpacing="3">JEEP</text>
        </svg>
      );
    case "maruti suzuki":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 74 L46 26 H78 L54 74 Z" fill="#3b82f6" />
          <path d="M42 74 L66 26 H78 L54 74 Z" fill="#60a5fa" opacity="0.3" />
          <path d="M22 26 L46 74 H78 L54 26 Z" fill="#1d4ed8" />
        </svg>
      );
    case "hyundai":
      return (
        <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="40" rx="44" ry="24" stroke="#3b82f6" strokeWidth="4" />
          <path d="M46 26 L55 54 M55 40 L65 40 M65 26 L74 54" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "tata":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#2563eb" strokeWidth="5" />
          <path d="M32 40 Q50 25 68 40 M50 26 V74" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "mahindra":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 74 L50 26 L80 74" stroke="#ef4444" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M36 74 L50 46 L64 74" stroke="#f87171" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case "honda":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="18" width="64" height="64" rx="14" stroke="#94a3b8" strokeWidth="4" />
          <path d="M34 32 V68 M66 32 V68 M34 50 H66" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );
    case "toyota":
      return (
        <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="40" rx="46" ry="26" stroke="#94a3b8" strokeWidth="3" />
          <ellipse cx="60" cy="40" rx="32" ry="12" stroke="#e2e8f0" strokeWidth="3.5" />
          <line x1="60" y1="14" x2="60" y2="66" stroke="#ffffff" strokeWidth="5.5" />
        </svg>
      );
    case "kia":
      return (
        <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="60" y="28" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="25" fill="#f43f5e" textAnchor="middle" letterSpacing="0.5">K I A</text>
        </svg>
      );
    case "volkswagen":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#1d4ed8" strokeWidth="5.5" fill="none" />
          <path d="M28 32 L44 72 H56 L72 32 M38 32 L50 60 L62 32" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case "skoda":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#10b981" strokeWidth="4.5" />
          <path d="M40 54 L52 38 L65 54 H40" fill="#ffffff" />
          <path d="M40 50 Q50 35 60 50 L50 72 Z" fill="#10b981" opacity="0.8" />
        </svg>
      );
    case "ford":
      return (
        <svg className={className} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="30" rx="46" ry="23" fill="#1d4ed8" stroke="#cbd5e1" strokeWidth="2.5" />
          <text x="60" y="38" fontFamily="serif" fontStyle="italic" fontWeight="950" fontSize="23" fill="#ffffff" textAnchor="middle">Ford</text>
        </svg>
      );
    case "renault":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 14 L78 45 L50 86 L22 45 Z" stroke="#e2e8f0" strokeWidth="5" strokeLinejoin="round" fill="none" />
          <path d="M50 26 L68 45 L50 74 L32 45 Z" stroke="#94a3b8" strokeWidth="2.5" fill="none" />
        </svg>
      );
    case "nissan":
      return (
        <svg className={className} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="30" r="21" stroke="#94a3b8" strokeWidth="4" />
          <rect x="25" y="21" width="70" height="18" fill="#1e293b" stroke="#ffffff" strokeWidth="2.5" rx="3" />
          <text x="60" y="33" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="10" fill="#ffffff" textAnchor="middle" letterSpacing="0.5">NISSAN</text>
        </svg>
      );
    default:
      return (
        <div className="text-amber-500 font-mono font-black text-xs uppercase bg-slate-900 border border-slate-800 rounded px-2.5 py-1">
          {name.substring(0, 3)}
        </div>
      );
  }
}

const CATEGORY_ITEMS = [
  {
    id: "car-services",
    title: "Car Services",
    serviceId: "periodic-maintenance",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="8" width="36" height="32" rx="4" fill="#0f172a" stroke="#e11d48" strokeWidth="2.5" />
        <rect x="22" y="4" width="4" height="8" rx="2" fill="#ef4444" />
        <rect x="38" y="4" width="4" height="8" rx="2" fill="#ef4444" />
        <line x1="16" y1="20" x2="52" y2="20" stroke="#e11d48" strokeWidth="2" />
        <circle cx="24" cy="28" r="2" fill="#94a3b8" />
        <circle cx="32" cy="28" r="2" fill="#e11d48" />
        <circle cx="40" cy="28" r="2" fill="#94a3b8" />
        <circle cx="48" cy="28" r="2" fill="#94a3b8" />
        <circle cx="24" cy="34" r="2" fill="#94a3b8" />
        <circle cx="32" cy="34" r="2" fill="#94a3b8" />
        <circle cx="40" cy="34" r="2" fill="#94a3b8" />
        <rect x="8" y="44" width="48" height="10" rx="3" fill="#e11d48" />
        <circle cx="20" cy="54" r="6" fill="#090d16" stroke="#ffffff" strokeWidth="2" />
        <circle cx="44" cy="54" r="6" fill="#090d16" stroke="#ffffff" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: "ac-repair",
    title: "AC Service & Repair",
    serviceId: "ac-service",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 40 C12 30 20 22 28 22 C36 22 40 28 44 32 C48 36 50 38 56 38" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
        <rect x="16" y="8" width="8" height="34" rx="4" fill="#0f172a" stroke="#e11d48" strokeWidth="2.5" />
        <circle cx="20" cy="40" r="8" fill="#e11d48" />
        <rect x="19" y="16" width="2" height="20" rx="1" fill="#e11d48" />
        <path d="M42 14 L50 22 M50 14 L42 22 M46 12 V24 M40 18 H52" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 28 H54 L58 38 H22 Z" fill="#b91c1c" opacity="0.2" />
      </svg>
    )
  },
  {
    id: "batteries",
    title: "Batteries",
    serviceId: "battery-replacement",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="44" height="30" rx="4" fill="#0f172a" stroke="#e11d48" strokeWidth="3" />
        <rect x="16" y="12" width="10" height="8" rx="2" fill="#ef4444" />
        <rect x="38" y="12" width="10" height="8" rx="2" fill="#475569" />
        <path d="M32 26 L24 38 H32 L30 44 L38 32 H30 Z" fill="#ee1d48" />
        <text x="21" y="32" fontFamily="monospace" fontWeight="bold" fontSize="11" fill="#ef4444" textAnchor="middle">+</text>
        <text x="43" y="31" fontFamily="monospace" fontWeight="bold" fontSize="14" fill="#94a3b8" textAnchor="middle">-</text>
      </svg>
    )
  },
  {
    id: "tyres-wheel",
    title: "Tyres & Wheel Care",
    serviceId: "wheel-alignment",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="26" r="20" fill="#0f172a" stroke="#e11d48" strokeWidth="4.5" />
        <circle cx="32" cy="26" r="12" fill="#1e293b" stroke="#94a3b8" strokeWidth="2.5" />
        <circle cx="32" cy="26" r="5" fill="#e11d48" />
        <line x1="32" y1="6" x2="32" y2="46" stroke="#475569" strokeWidth="2" />
        <line x1="12" y1="26" x2="52" y2="26" stroke="#475569" strokeWidth="2" />
        <line x1="18.5" y1="12.5" x2="45.5" y2="39.5" stroke="#475569" strokeWidth="2" />
        <line x1="13.5" y1="40" x2="50" y2="12" stroke="#475569" strokeWidth="1.5" />
        <path d="M12 48 Q20 54 32 54 Q44 54 52 48 Q54 50 48 54 Q32 58 16 54 Q10 50 12 48 Z" fill="#ef4444" />
      </svg>
    )
  },
  {
    id: "denting-painting",
    title: "Denting & Painting",
    serviceId: "multibrand-car-repair",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="10" width="12" height="18" rx="2" fill="#ef4444" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M22 24 L38 24 L35 34 H25 Z" fill="#0f172a" stroke="#e11d48" strokeWidth="2" />
        <rect x="23" y="34" width="6" height="15" rx="1" fill="#475569" transform="rotate(-15 23 34)" />
        <line x1="38" y1="18" x2="48" y2="10" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 3" />
        <line x1="39" y1="21" x2="52" y2="16" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="24" x2="50" y2="26" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" />
        <path d="M48 30 H58 Q60 30 60 34 V52 Q60 54 56 54 H42 Q40 54 40 50 V34 Q40 30 48 30 Z" fill="#b91c1c" opacity="0.25" />
        <path d="M45 42 H55" stroke="#ef4444" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: "detailing-services",
    title: "Detailing Services",
    serviceId: "fiat-specialist",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="14" width="28" height="14" rx="4" fill="#0f172a" stroke="#e11d48" strokeWidth="2.5" />
        <rect x="12" y="17" width="10" height="6" rx="1" fill="#475569" />
        <rect x="26" y="28" width="12" height="6" fill="#e11d48" />
        <ellipse cx="32" cy="36" rx="20" ry="5" fill="#ef4444" opacity="0.8" />
        <path d="M12 40 L15 45 L20 42 L17 38 Z" fill="#f59e0b" />
        <path d="M48 38 L54 44 M52 36 L46 42" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="12" r="3" fill="#ffffff" />
        <circle cx="48" cy="14" r="2" fill="#ef4444" />
      </svg>
    )
  },
  {
    id: "car-spa",
    title: "Car Spa & Cleaning",
    serviceId: "periodic-maintenance",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="24" width="36" height="20" rx="6" fill="#ef4444" stroke="#e11d48" strokeWidth="2.5" />
        <circle cx="20" cy="30" r="3" fill="#1e293b" />
        <circle cx="28" cy="36" r="4.5" fill="#1e293b" />
        <circle cx="36" cy="28" r="3.5" fill="#1e293b" />
        <circle cx="44" cy="34" r="4" fill="#1e293b" />
        <circle cx="14" cy="12" r="4.5" fill="#60a5fa" opacity="0.7" />
        <circle cx="46" cy="10" r="3" fill="#ffffff" />
        <circle cx="30" cy="12" r="6" fill="#3b82f6" opacity="0.4" />
        <circle cx="52" cy="22" r="4" fill="#60a5fa" opacity="0.6" />
        <circle cx="10" cy="34" r="3" fill="#ffffff" />
      </svg>
    )
  },
  {
    id: "car-inspections",
    title: "Car Inspections",
    serviceId: "engine-diagnostics",
    isNew: true,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="14" width="28" height="38" rx="4" fill="#0f172a" stroke="#e11d48" strokeWidth="3" />
        <rect x="26" y="8" width="12" height="8" rx="2" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M24 26 L27 29 L34 22" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 36 L27 39 L34 32" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="38" y1="26" x2="42" y2="26" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        <line x1="38" y1="36" x2="42" y2="36" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="44" x2="40" y2="44" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "windshield-lights",
    title: "Windshields & Lights",
    serviceId: "electrical-diagnostics",
    isNew: true,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 32 C12 24 24 16 32 16 C40 16 52 24 54 32 Z" fill="#0f172a" stroke="#e11d48" strokeWidth="2.5" />
        <path d="M14 36 L4 44" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 36 L60 44" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="38" x2="18" y2="24" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="18" y1="24" x2="26" y2="22" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "suspension-fitments",
    title: "Suspension & Fitments",
    serviceId: "suspension-repair",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(25)" style={{ transform: "rotate(25deg)" }}>
        <rect x="30" y="8" width="6" height="48" rx="2" fill="#ef4444" />
        <rect x="26" y="6" width="14" height="6" rx="1.5" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="26" y="50" width="14" height="8" rx="2" fill="#0f172a" stroke="#e11d48" strokeWidth="2" />
        <path d="M22 18 Q32 20 42 22 Q32 24 22 26 Q32 28 42 30 Q32 32 22 34 Q32 36 42 38 Q32 40 22 42 Q32 44 42 46" stroke="#94a3b8" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <circle cx="33" cy="54" r="2.5" fill="#ffffff" />
      </svg>
    )
  },
  {
    id: "clutch-body",
    title: "Clutch & Body Parts",
    serviceId: "clutch-repair",
    isNew: true,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="20" fill="#0f172a" stroke="#e11d48" strokeWidth="3" />
        <circle cx="32" cy="32" r="14" fill="#0f172a" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="32" cy="32" r="6" fill="#475569" />
        <circle cx="32" cy="17" r="2" fill="#ffffff" />
        <circle cx="32" cy="47" r="2" fill="#ffffff" />
        <circle cx="17" cy="32" r="2" fill="#ffffff" />
        <circle cx="47" cy="32" r="2" fill="#ffffff" />
        <rect x="6" y="27" width="6" height="10" rx="1" fill="#475569" />
        <rect x="52" y="27" width="6" height="10" rx="1" fill="#475569" />
      </svg>
    )
  },
  {
    id: "insurance-claims",
    title: "Insurance Claims",
    serviceId: "insurance-repairs",
    isNew: false,
    icon: (
      <svg className="w-10 h-10 text-[#e11d48]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 12 Q32 6 50 12 V30 C50 44 32 54 32 54 C32 54 14 44 14 30 Z" fill="#0f172a" stroke="#e11d48" strokeWidth="3" />
        <path d="M24 28 L30 34 L40 22" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 28 L30 34 L40 22" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

export const TRUSTED_PARTNERS = [
  {
    id: "amaron",
    name: "Amaron Batteries",
    type: "OES Battery Partner",
    benefit: "Ultra Long-Life & Maintenance Free",
    desc: "India's highest rated green automotive battery supplier with legendary durability. High cranking power engineered for severe climate fluctuations and stop-start traffic.",
    image: "/src/assets/images/amaron_battery_partner_1782126604843.jpg",
    warranty: "Up to 72 Months Comprehensive Warranty",
    rating: "4.9 ★★★★★"
  },
  {
    id: "value-parts",
    name: "Value Parts",
    type: "Premium Spare Partner",
    benefit: "Certified OEM Quality Spares",
    desc: "OES Certified mechanical spare parts ranging from carbon-metallic brake pads to precision piston rings, designed for direct fitment active performance.",
    image: "/src/assets/images/value_parts_partner_1782126542459.jpg",
    warranty: "Guaranteed Fitment & OES Warranty",
    rating: "4.8 ★★★★★"
  },
  {
    id: "shell",
    name: "Shell Engine Oil",
    type: "OES Lubricants Partner",
    benefit: "Advanced Synthetic PurePlus Formula",
    desc: "Active cleansing technology protecting critical valve gears and cylinder linings. Enhances thermal performance, extends engine intervals, and improves fuel mileage up to 15%.",
    image: "/src/assets/images/shell_oil_partner_1782126558723.jpg",
    warranty: "Pure Synthetic Performance",
    rating: "4.9 ★★★★★"
  },
  {
    id: "gabriel",
    name: "Gabriel Suspension",
    type: "Ride Control Partner",
    benefit: "Elite Heavy-Duty Struts",
    desc: "Market leader in high-performance automotive shock absorbers. Exceptional dampening force, nitrogen-gas charged stability, and premium comfort over heavy Bangalore aberrations.",
    image: "/src/assets/images/gabriel_suspension_partner_1782126575417.jpg",
    warranty: "Premium Road-Control Class",
    rating: "4.8 ★★★★★"
  },
  {
    id: "potauto",
    name: "Potauto Accessories",
    type: "Interior & Filter Partner",
    benefit: "High-grade Filters & Premium Wipers",
    desc: "Expertly calibrated premium cabin air filters, dust protectors, anti-odor carbon nets, and high-visibility wiper blades for elite passenger salon protection.",
    image: "/src/assets/images/potauto_accessories_partner_1782126591196.jpg",
    warranty: "All-Weather Active Safety",
    rating: "4.7 ★★★★★"
  }
];

export default function HomeView({ onNavigate, onOpenBooking, onSelectService }: HomeViewProps) {
  
  // Dynamic Real-Time Incrementing counter milestones on mount
  const [happyClients, setHappyClients] = useState(0);
  const [googleReviews, setGoogleReviews] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  // Carousel State for Trusted Partners
  const [currentPartnerIdx, setCurrentPartnerIdx] = useState(0);
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);

  useEffect(() => {
    if (!isCarouselPlaying) return;
    const interval = setInterval(() => {
      setCurrentPartnerIdx((prev) => (prev + 1) % TRUSTED_PARTNERS.length);
    }, 4500); // 4.5s autoplay intervals
    return () => clearInterval(interval);
  }, [isCarouselPlaying]);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1600; // 1.6 seconds animation duration

    const targetClients = 15240;
    const targetReviews = 1280;
    const targetSuccess = 99; // 99%

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Quadratic ease out
      const easeProgress = 1 - (1 - progress) * (1 - progress); 
      
      setHappyClients(Math.floor(easeProgress * targetClients));
      setGoogleReviews(Math.floor(easeProgress * targetReviews));
      setSuccessRate(Math.floor(easeProgress * targetSuccess));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  // Media Mode switcher: showcase (images only) vs video (YouTube walkthrough)
  const [mediaMode, setMediaMode] = useState<"showcase" | "video">("showcase");
  
  // Interactive Custom Specialty Divisions Tab State
  const [activeDivisionTab, setActiveDivisionTab] = useState<"tata" | "brakes-transmission" | "emergency" | "body" | "paint" | "qa">("tata");

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const streamUrl = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";
    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 5,
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      hls.on(Hls.Events.ERROR, (event: any, data: any) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls?.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls?.recoverMediaError();
              break;
            default:
              break;
          }
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // Dynamic Animated Specialist Questions
  const [qIndex, setQIndex] = useState(0);

  const questionsList = [
    {
      q: "When should I change my Fiat T-Jet or Multijet timing belt?",
      a: "Fiat engines require timing kits and belt swaps every 4 years or 40,000 km. We align this with precise factory-spec spacing jigs to protect pistons."
    },
    {
      q: "What causes regular keyless lock glitches on Jeep SUVs?",
      a: "It's typically key-fob receiver signal attenuation or BCM low-voltage drop. We debug these with deep Magneti Marelli OBD-II system resets."
    },
    {
      q: "Why does my VW/Skoda DSG feel jerky during low-speed crawls?",
      a: "This points to mechatronics solenoid wear or heavy dual clutch friction. Our specialists calibrate clutches to smooth out gearshifts."
    },
    {
      q: "How do I fix weak AC cooling in heavy bumper-to-bumper traffic?",
      a: "Usually due to low refrigerant density or condenser fan relays burning out. Our workshop executes 31-point comprehensive thermal cooling flushes."
    },
    {
      q: "Does my Maruti or Hyundai need high-performance synthetic oil?",
      a: "Yes! High-torque engines benefit massively from 5W-40 fully synthetics, keeping timing chains lubricated and increasing fuel economy by up to 12%."
    }
  ];

  useEffect(() => {
    const qInterval = setInterval(() => {
      setQIndex((prev) => (prev + 1) % questionsList.length);
    }, 5500);
    return () => clearInterval(qInterval);
  }, [questionsList.length]);

  // Carousel State & Logic
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselCars = [
    {
      
      tag: "Engine Cabin Diagnostics",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80",
      desc: "Full performance diagnostics, authentic spark timing calibration, and expert mechanical tuning for raw Italian power."
    },
    {
      
      tag: "Engine Overhauls",
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Dedicated 4x4 transmission diagnostics, complete suspension checking, electrical control, and original parts mapping."
    },
    {
     
      tag: "Precision Gear Calibration",
      image: fiat,
      desc: "Our passion is keeping complex gearboxes and classics alive. Active sensor diagnostics and clutch calibration."
    },
    {
      
      tag: "Cooling & Synthetics",
      image: bodypaint,
      desc: "Full service center solutions for heavy-duty drive shafts, high torque engines, and multi-point safety testing."
    },
    {
     
      tag: "Engine Overhauls",
      image: "https://images.unsplash.com/photo-1611441176369-b6c14e67a8b7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Dedicated 4x4 transmission diagnostics, complete suspension checking, electrical control, and original parts mapping."
    },
    {
     
      tag: "Precision Gear Calibration",
      image: "https://images.unsplash.com/photo-1602438061588-4c0dd7b67f8e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Our passion is keeping complex gearboxes and classics alive. Active sensor diagnostics and clutch calibration."
    },
    {
      
      tag: "Cooling & Synthetics",
      image: values,
      desc: "Full service center solutions for heavy-duty drive shafts, high torque engines, and multi-point safety testing."
    },
    {
      
      tag: "Cooling & Synthetics",
      image: shell,
      desc: "Full service center solutions for heavy-duty drive shafts, high torque engines, and multi-point safety testing."
    },
        {
      
      tag: "Cooling & Synthetics",
      image: batteries,
      desc: "Full service center solutions for heavy-duty drive shafts, high torque engines, and multi-point safety testing."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselCars.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [carouselCars.length]);

  // Handlers
  const handleServiceClick = (serviceId: string) => {
    onSelectService(serviceId);
    onNavigate("services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookNow = () => {
    onOpenBooking();
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hi Hari Automobiles, I want to book a service for my car. Please assist.");
    window.open(`https://wa.me/${SEO_DATA.whatsapp.replace(/[+\s]/g, "")}?text=${text}`, "_blank");
  };

  const heroImage = "/src/assets/images/premium_car_workshop_hero_1781084067354.png";

  return (
    <div id="home-view" className="bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      
      {/* 1. New Look Left/Right Split Hero Section with Fiat/Jeep Carousel */}
      <section id="hero-section" className="relative pt-6 pb-12 px-4 md:px-8 xl:px-12 overflow-hidden bg-slate-950">
        
        {/* Premium live video streaming background overlay & fallback image */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center opacity-25 scale-102 transition duration-700 pointer-events-none"
            poster={heroImage}
          />
          {/* Static design fallback directly behind if stream is delayed */}
          <div className="absolute inset-0 z-[-1]">
            <img 
              src={heroImage} 
              alt="Hari Automobiles Premium Workshop in Bangalore" 
              className="h-full w-full object-cover object-center opacity-10 blur-[2px] scale-102 transition"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Subtle Reddish ambient fog & dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/40" />
        </div>

        {/* Decorative ambient blobs using the new Red Brand theme */}
        <div className="absolute top-12 left-10 h-96 w-96 rounded-full bg-rose-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-rose-600/10 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Copy & Interactive CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-950/50 bg-rose-950/30 py-1.5 px-4 shadow-sm mb-4 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-450 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-550" />
                </span>
                <span className="text-[10px] sm:text-xs font-mono font-extrabold tracking-widest text-[#e11d48] uppercase">
                  ✨ SPECIALIST FIAT & JEEP AUTO-CARE CENTRE
                </span>
              </div>

              <h1 className="text-4xl xs:text-5xl sm:text-6xl font-black tracking-tight text-white leading-[1.08] mb-4">
                Trusted Multi-Brand <br />
                <span className="text-[#e11d48] drop-shadow-[0_2px_8px_rgba(225,29,72,0.15)]">
                  Car Service Center
                </span> <br />
                in Bangalore
              </h1>

              <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Your premium alternative to generic authorized dealerships. We leverage precision-certified digital timing chains, computerized diagnostics, and strict OEM replacement hardware to protect your passenger vehicles. Expert mechanics trained specifically for <strong className="text-white">Fiat, Jeep, Volkswagen, Skoda, Maruti Suzuki, Hyundai,</strong> and more.
              </p>

              {/* Dynamic Action Controls */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                <button
                  onClick={handleBookNow}
                  id="hero-book-btn"
                  className="group flex items-center justify-center gap-2.5 rounded-xl bg-[#e11d48] px-6 py-4 font-sans text-sm font-extrabold text-white transition hover:bg-rose-700 shadow-xl shadow-rose-950/10 cursor-pointer border border-rose-500/20 shrink-0"
                >
                  <Calendar className="h-5 w-5 shrink-0" />
                  <span>Book Appointment</span>
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
                <a
                  href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
                  id="hero-call-btn"
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/90 px-6 py-4 font-sans text-sm font-extrabold text-slate-200 transition hover:bg-slate-850 shadow-md cursor-pointer hover:border-[#e11d48]/40 shrink-0 animate-pulse"
                >
                  <Phone className="h-5 w-5 text-[#e11d48] shrink-0" />
                  <span>Call Workshop</span>
                </a>
                <button
                  onClick={handleWhatsAppChat}
                  id="hero-whatsapp-btn"
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-[#25D366]/30 bg-slate-900/90 px-6 py-4 font-sans text-sm font-extrabold text-slate-200 transition hover:bg-slate-850 shadow-md cursor-pointer hover:border-[#25D366]/60 shrink-0"
                >
                  <svg 
                    className="h-5 w-5 text-[#25D366] fill-current shrink-0" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.031 2C6.479 2 2 6.48 2 12.03c0 1.91.53 3.69 1.45 5.22L2 22l4.9-1.39c1.47.88 3.19 1.39 4.98 1.4 5.55 0 10.04-4.51 10.04-10.04C22.07 6.48 17.58 2 12.031 2zm0 1.71c4.6 0 8.33 3.73 8.33 8.32 0 4.6-3.73 8.31-8.33 8.31-1.67 0-3.23-.49-4.56-1.34l-.33-.21-2.77.79.8-2.68-.23-.37c-.93-1.46-1.42-3.16-1.42-4.9.01-4.59 3.74-8.31 8.34-8.31zm-3.6 3.19c-.2 0-.46.07-.66.27-.21.2-.79.77-.79 1.88s.81 2.18.92 2.33c.12.15 1.6 2.45 3.9 3.44.55.24.97.38 1.3.48.55.18 1.05.15 1.45.09.44-.06 1.35-.55 1.54-1.08.19-.53.19-.99.14-1.08-.05-.09-.2-.15-.46-.28-.27-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.27-.68.85-.83 1.02-.15.17-.3.19-.56.06-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.3-1.56-1.45-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.45.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.59-1.43-.81-1.95-.21-.52-.45-.45-.61-.46-.16-.01-.34-.01-.52-.01z" />
                  </svg>
                  <span>WhatsApp Expert</span>
                </button>
              </div>

              {/* Quick statistics layout bar */}
              <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-[#e11d48] uppercase font-bold">CAR BRANDS READY</span>
                  <span className="block text-2xl font-black text-white font-mono mt-0.5">14+ Supported</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">CLIENT SATISFACTION</span>
                  <span className="block text-2xl font-black text-white font-mono mt-0.5">4.9 ★ Reviews</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">WARRANTY MATCHED</span>
                  <span className="block text-2xl font-black text-white font-mono mt-0.5">100% OEM Spares</span>
                </div>
              </div>

            </div>

            {/* Right Column: Premium Car Showcase & YouTube Video */}
            <div className="lg:col-span-5 relative w-full flex flex-col items-center">
              
              {/* Segmented Media Mode Switcher */}
              <div className="flex w-full bg-slate-900/60 p-1 border border-slate-900 rounded-2xl mb-4 gap-1">
                <button
                  type="button"
                  onClick={() => setMediaMode("showcase")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3.5 text-xs font-black tracking-widest uppercase rounded-xl transition-all cursor-pointer ${
                    mediaMode === "showcase"
                      ? "bg-[#e11d48] text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-850"
                  }`}
                >
                  <Sparkles className="h-4 w-4 shrink-0" />
                  <span>📷 Showcase</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMediaMode("video")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3.5 text-xs font-black tracking-widest uppercase rounded-xl transition-all cursor-pointer ${
                    mediaMode === "video"
                      ? "bg-[#e11d48] text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-850"
                  }`}
                >
                  <Wrench className="h-4 w-4 shrink-0 transition" />
                  <span>🎥 Workshop Video</span>
                </button>
              </div>

              {mediaMode === "showcase" ? (
                /* Main Carousel Frame Container - Show visual image ONLY as requested, no bottom text panel overlap */
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-slate-850 shadow-2xl p-6 flex flex-col justify-between group">
                  
                  {/* Active Car Spotlights */}
                  <div className="absolute inset-0 pointer-events-none transition-all duration-75">
                    <img 
                      src={carouselCars[carouselIndex].image} 
                      alt={carouselCars[carouselIndex].name} 
                      className="h-full w-full object-cover object-center opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle aesthetic overlays representing high-fidelity branding */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/40 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950/40 to-transparent" />
                  </div>

                  {/* Top status markers - beautiful small badges */}
                  <div className="relative z-10 flex justify-between items-center w-full">
                    <span className="px-3 py-1 text-[9px] font-mono font-black tracking-widest text-white bg-slate-950/90 border border-slate-800 rounded-full uppercase shadow-lg">
                      {carouselCars[carouselIndex].brand}
                    </span>
                    <span className="px-3 py-1 text-[9px] font-mono font-black tracking-widest text-white bg-[#e11d48] border border-rose-450/40 rounded-full uppercase shadow-lg">
                      {carouselCars[carouselIndex].name}
                    </span>
                  </div>

                  {/* Dynamic Indicators inside the image frame at the bottom */}
                  <div className="relative z-10 flex items-center justify-center gap-2 px-3 py-1.5 bg-slate-950/75 border border-slate-900/60 rounded-full backdrop-blur-md w-fit mx-auto shadow-xl">
                    {carouselCars.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        aria-label={`Slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          carouselIndex === idx 
                            ? "w-6 bg-[#e11d48] shadow-md shadow-rose-900/30" 
                            : "w-1.5 bg-slate-600 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>

                </div>
              ) : (
                /* YouTube Video Walkthrough */
                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-black border border-slate-850 shadow-2xl">
  <video
    className="w-full h-full object-cover"
    controls
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={harivideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
              )}

            </div>

          </div>
        </div>

      </section>

      {/* 2. Google Reviews Trust Card & Dynamic Counting Milestone Section */}
      <section id="google-trust-milestones" className="relative py-14 border-y border-slate-900 bg-slate-900/45 px-4 md:px-8 xl:px-12 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-emerald-500/5 blur-[100px]" />
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-rose-500/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box: Google Trust Badge Card */}
            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-850 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-5 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#EA4335]" />
              
              {/* Google Brand Badge Icon */}
              <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
                <svg className="h-10 w-10 shrink-0 select-none pointer-events-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-4.9-1.39-4.9-1.39z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Central Badge copy */}
              <div className="flex-1 space-y-1.5 text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase tracking-widest font-mono font-black text-[#e11d48]">Google verified</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h3 className="text-base font-extrabold text-white tracking-tight">Bangalore's #1 Rated</h3>
                
                {/* 5 glowing star icons */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4.5 w-4.5 fill-amber-500 text-amber-500 shrink-0" />
                  ))}
                  <span className="text-xs font-black font-mono text-white ml-1.5">4.9/5.0</span>
                </div>

                <p className="text-[11px] text-slate-400 font-medium">
                  Based on <strong className="text-white font-mono">{googleReviews.toLocaleString() || "1,280"}+</strong> verified local customer reviews.
                </p>
              </div>

              {/* Action trigger to leave/inspect reviews */}
              <a
                href="https://www.google.com/search?q=hari+automobiles&oq=hari&gs_lcrp=EgZjaHJvbWUqDggBEEUYJxg7GIAEGIoFMgYIABBFGDwyDggBEEUYJxg7GIAEGIoFMgYIAhBFGDsyDAgDEC4YQxiABBiKBTIGCAQQRRg7MhMIBRAuGK8BGMcBGJECGIAEGIoFMgYIBhBFGDwyBggHEEUYPNIBCDE5NTRqMGo3qAIIsAIB8QX0idj7kG72fQ&sourceid=chrome&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FKaVQ0dElTbGxsR3R4QkI2OEZxaGhkSWd5OEJqeE10UGhHMWNTRW8xRUdzSEptSkJTYzlkZ2hLOEE0N05sSlBZUFhVYnVFTFZPVDVCbXRYUkI4d245b0pOWmh4Wkd3UVg1Mll6by1aT1d2SFpRZjFiN092S0tJEhdGaGs1YXBqek5MR2RzZU1Qb2RpazBBTRoiQURzcjlmUTB2LVNfQ2RYN3FjQlJybklYWFJ4TTRINU1hZxIEODA1MRoBMyoAMAA4AUAAGAAgjJfZkQpKAhAC"
                target="_blank"
                rel="noreferrer"
                id="write-google-review-btn"
                className="w-full sm:w-auto text-center shrink-0 px-4 py-2 hover:bg-rose-700 bg-[#e11d48] text-white rounded-xl text-xs font-bold transition shadow-md whitespace-nowrap btn-white-text"
              >
                📝 Review Us
              </a>
            </div>

            {/* Right Side: 3 High Fidelity Counting Milestones */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              
              {/* Counter 1: Happy Clients */}
              <div className="p-5 rounded-2xl bg-slate-950/40 border border-slate-900 flex flex-col justify-between hover:border-slate-800 transition duration-300">
                <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase font-black">HAPPY CUSTOMERS</span>
                <div className="my-2.5">
                  <span className="text-3xl font-black font-mono text-white tracking-tight">
                    {happyClients.toLocaleString()}
                  </span>
                  <span className="text-xl font-bold text-[#e11d48] font-mono ml-0.5">+</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                  Satisfied car owners serviced since our workshop's dynamic inception in Bangalore.
                </p>
              </div>

              {/* Counter 2: Specialized Jobs */}
              <div className="p-5 rounded-2xl bg-slate-950/40 border border-slate-900 flex flex-col justify-between hover:border-slate-800 transition duration-300">
                <span className="block text-[10px] font-mono tracking-widest text-[#e11d48] uppercase font-black">SPECIALIST JOBS</span>
                <div className="my-2.5">
                  <span className="text-3xl font-black font-mono text-white tracking-tight">
                    {Math.floor(happyClients * 1.34).toLocaleString()}
                  </span>
                  <span className="text-xl font-bold text-rose-500 font-mono ml-0.5">+</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                  Timing belts, DSG calibrations, and absolute suspension overhauls completed.
                </p>
              </div>

              {/* Counter 3: Success Rating */}
              <div className="p-5 rounded-2xl bg-slate-950/40 border border-slate-900 flex flex-col justify-between hover:border-slate-800 transition duration-300">
                <span className="block text-[10px] font-mono tracking-widest text-[#e11d48] uppercase font-black">SATISFACTION SCORE</span>
                <div className="my-2.5">
                  <span className="text-3xl font-black font-mono text-white tracking-tight">
                    {successRate}
                  </span>
                  <span className="text-xl font-bold text-[#e11d48] font-mono ml-0.5">%</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                  First-time resolution rating on complex engine diagnostic scanner warnings.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2.5 Specialty Divisions & Custom Care Hub */}
      <section id="specialist-divisions-hub" className="py-20 bg-slate-950 border-b border-slate-900/40 relative overflow-hidden">
        
        {/* Subtle glowing mesh overlays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#e11d48]/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
          
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-2.5 font-bold animate-pulse">
              🛠️ EXPERT TECHNICAL DIVISIONS
            </span>
            <h2 className="text-3xl font-black text-white sm:text-4xl uppercase tracking-wider">
              Specialist Service & Body Care Divisions
            </h2>
            <p className="text-xs text-slate-400 max-w-2xl mx-auto mt-3 font-semibold">
              Delivering specialized engineering and cosmetic care under one roof. Meet our master divisions trained to execute factory-finish workmanship.
            </p>
          </div>

          {/* Interactive Bento Segment Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LIFT COLUMN: Master Tabs selecting of 4 divisions */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              
              {/* Tab 1: Tata */}
              <button
                type="button"
                onClick={() => setActiveDivisionTab("tata")}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeDivisionTab === "tata"
                    ? "bg-slate-900 border-[#e11d48] shadow-md ring-1 ring-[#e11d48]/10"
                    : "bg-slate-950/40 border-slate-900 hover:border-slate-850 hover:bg-slate-900/10 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border transition ${
                    activeDivisionTab === "tata"
                      ? "bg-[#e11d48]/10 border-[#e11d48]/30 text-[#e11d48]"
                      : "bg-slate-900 border-slate-850 text-slate-400"
                  }`}>
                    <Wrench className="h-5.5 w-5.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[8px] font-mono tracking-wider font-extrabold uppercase text-slate-500">ENGINEERED DIVISION</span>
                    <span className="block text-[14px] font-black text-white uppercase tracking-tight truncate">Tata Vehicle Experts</span>
                  </div>
                </div>
              </button>

              {/* Tab: Brakes & Clutch */}
              <button
                type="button"
                onClick={() => setActiveDivisionTab("brakes-transmission")}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeDivisionTab === "brakes-transmission"
                    ? "bg-slate-900 border-[#e11d48] shadow-md ring-1 ring-[#e11d48]/10"
                    : "bg-slate-950/40 border-slate-900 hover:border-slate-850 hover:bg-slate-900/10 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border transition ${
                    activeDivisionTab === "brakes-transmission"
                      ? "bg-[#e11d48]/10 border-[#e11d48]/30 text-[#e11d48]"
                      : "bg-slate-900 border-slate-850 text-slate-400"
                  }`}>
                    <Settings className="h-5.5 w-5.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[8px] font-mono tracking-wider font-extrabold uppercase text-slate-500">TRANSMISSION & SAFETY</span>
                    <span className="block text-[14px] font-black text-white uppercase tracking-tight truncate">Brakes & Automatic Clutch</span>
                  </div>
                </div>
              </button>

              {/* Tab: Emergency Support */}
              <button
                type="button"
                onClick={() => setActiveDivisionTab("emergency")}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeDivisionTab === "emergency"
                    ? "bg-slate-900 border-[#e11d48] shadow-md ring-1 ring-[#e11d48]/10"
                    : "bg-slate-950/40 border-slate-900 hover:border-slate-850 hover:bg-slate-900/10 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border transition ${
                    activeDivisionTab === "emergency"
                      ? "bg-[#e11d48]/10 border-[#e11d48]/30 text-[#e11d48]"
                      : "bg-slate-900 border-slate-850 text-slate-400"
                  }`}>
                    <Truck className="h-5.5 w-5.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[8px] font-mono tracking-wider font-extrabold uppercase text-slate-500">EMERGENCY ASSISTANCE</span>
                    <span className="block text-[14px] font-black text-white uppercase tracking-tight truncate">Breakdowns & Puncture Repair</span>
                  </div>
                </div>
              </button>

              {/* Tab 2: Body / Tinkering */}
              <button
                type="button"
                onClick={() => setActiveDivisionTab("body")}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeDivisionTab === "body"
                    ? "bg-slate-900 border-[#e11d48] shadow-md ring-1 ring-[#e11d48]/10"
                    : "bg-slate-950/40 border-slate-900 hover:border-slate-850 hover:bg-slate-900/10 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border transition ${
                    activeDivisionTab === "body"
                      ? "bg-[#e11d48]/10 border-[#e11d48]/30 text-[#e11d48]"
                      : "bg-slate-900 border-slate-850 text-slate-400"
                  }`}>
                    <Activity className="h-5.5 w-5.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[8px] font-mono tracking-wider font-extrabold uppercase text-slate-500">COLLISION TEAM</span>
                    <span className="block text-[14px] font-black text-white uppercase tracking-tight truncate">Denting & Body Tinkering</span>
                  </div>
                </div>
              </button>

              {/* Tab 3: Painting */}
              <button
                type="button"
                onClick={() => setActiveDivisionTab("paint")}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeDivisionTab === "paint"
                    ? "bg-slate-900 border-[#e11d48] shadow-md ring-1 ring-[#e11d48]/10"
                    : "bg-slate-950/40 border-slate-900 hover:border-slate-850 hover:bg-slate-900/10 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border transition ${
                    activeDivisionTab === "paint"
                      ? "bg-[#e11d48]/10 border-[#e11d48]/30 text-[#e11d48]"
                      : "bg-slate-900 border-slate-850 text-slate-400"
                  }`}>
                    <Paintbrush className="h-5.5 w-5.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[8px] font-mono tracking-wider font-extrabold uppercase text-slate-500">AESTHETIC FINISH</span>
                    <span className="block text-[14px] font-black text-white uppercase tracking-tight truncate">Premium Paint Restoration</span>
                  </div>
                </div>
              </button>

              {/* Tab 4: QA */}
              <button
                type="button"
                onClick={() => setActiveDivisionTab("qa")}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeDivisionTab === "qa"
                    ? "bg-slate-900 border-[#e11d48] shadow-md ring-1 ring-[#e11d48]/10"
                    : "bg-slate-950/40 border-slate-900 hover:border-slate-850 hover:bg-slate-900/10 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border transition ${
                    activeDivisionTab === "qa"
                      ? "bg-[#e11d48]/10 border-[#e11d48]/30 text-[#e11d48]"
                      : "bg-slate-900 border-slate-850 text-slate-400"
                  }`}>
                    <Award className="h-5.5 w-5.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[8px] font-mono tracking-wider font-extrabold uppercase text-slate-500">VERIFICATION HUB</span>
                    <span className="block text-[14px] font-black text-white uppercase tracking-tight truncate">🏆 Quality Assurance</span>
                  </div>
                </div>
              </button>

            </div>

            {/* RIGHT COLUMN: Active Panel Details Display */}
            <div className="lg:col-span-8 bg-slate-950 border border-slate-900 rounded-3xl p-6 md:p-8 shadow-inner relative overflow-hidden backdrop-blur-md">
              
              <AnimatePresence mode="wait">
                
                {/* 1. Tata Vehicle Service Experts */}
                {activeDivisionTab === "tata" && (
                  <motion.div
                    key="tata-panel"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full"
                  >
                    <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded text-[8px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 uppercase font-black tracking-widest animate-pulse">
                            ● Authorized Standard Procedures
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                          🔧 Tata Vehicle Service Experts
                        </h3>
                        <p className="text-[12px] text-slate-400 mt-2 font-semibold leading-relaxed">
                          Our team has extensive experience servicing and maintaining Tata vehicles, including hatchbacks, sedans, SUVs, and commercial vehicles. We follow manufacturer-recommended service procedures to ensure optimum performance, safety, and reliability.
                        </p>
                      </div>

                      {/* Expertise List Container */}
                      <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-4">
                        <span className="block text-[9px] font-mono text-[#e11d48] uppercase tracking-wider font-extrabold mb-3">
                          Our Tata Expertise Includes:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-medium text-slate-350">
                          {[
                            "Tata periodic maintenance & scheduled servicing",
                            "Engine diagnostics & troubleshooting",
                            "Electrical & electronic system repairs",
                            "Brake, suspension, & steering maintenance",
                            "Air conditioning service & repair",
                            "Clutch & transmission repairs",
                            "Battery, alternator, & starter services",
                            "Genuine & value replacement parts support",
                            "Advanced health checks & preventive care"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-[#e11d48] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider font-black">
                        <span>Tata Specialist Squad</span>
                        <span className="text-emerald-400">● 100% diagnostic compliance</span>
                      </div>
                    </div>

                    {/* Right side visual representation */}
                    <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-[#e11d48]/5 border border-slate-900 h-56 md:h-full min-h-[220px]">
                      <img 
                        src="/src/assets/images/tata_service_division_1782130802319.jpg" 
                        alt="Tata Service Division at Hari Automobiles" 
                        className="h-full w-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-855 p-2.5 rounded-lg shadow-xl">
                        <span className="block text-[8px] font-mono text-slate-500 uppercase font-black">Featured Asset</span>
                        <span className="text-[10px] font-bold text-white uppercase font-sans">Tata Harrier & Nexon Specialists</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Brakes & Automatic Clutch Service Division */}
                {activeDivisionTab === "brakes-transmission" && (
                  <motion.div
                    key="brakes-clutch-panel"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full"
                  >
                    <div className="md:col-span-12 lg:col-span-7 flex flex-col justify-between space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded text-[8px] font-mono bg-[#e11d48]/20 text-[#e11d48] border border-[#e11d48]/30 uppercase font-black tracking-widest">
                            ● HIGH-SPEC MECHANICAL DIVISION
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                          🛑 Brake Systems & ⚙️ Clutch Diagnostics
                        </h3>
                        <p className="text-[12px] text-slate-400 mt-2 font-semibold leading-relaxed">
                          Your safety is paramount. Worn braking units and faulty automated transmissions degrade both performance and safety. Our certified mechanical team provides factory-spec repairs, adjustments, and component replacements.
                        </p>
                      </div>

                      {/* Split Bento Block for Brakes and Clutch */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Brake Pad Box */}
                        <div className="bg-slate-900/40 border border-slate-900 p-3.5 rounded-xl">
                          <div className="flex items-center gap-1.5 mb-2 border-b border-slate-900/60 pb-1.5">
                            <span className="text-sm">🛑</span>
                            <h4 className="text-[11.5px] font-bold text-white uppercase tracking-tight">Brake Pad Replacement</h4>
                          </div>
                          
                          <div className="space-y-2 text-[10.5px]">
                            <div>
                              <span className="block text-[8px] font-mono text-[#e11d48] uppercase font-bold">Service Inclusions</span>
                              <p className="text-slate-400 leading-relaxed">Complete brake pad inspection, front and rear checking, genuine brake pad replacement, brake disc and rotor diagnostic scans, brake fluid levels, and road test.</p>
                            </div>
                            <div>
                              <span className="block text-[8px] font-mono text-emerald-400 uppercase font-bold">Key Benefits</span>
                              <p className="text-slate-350 leading-relaxed">✔ Improved braking performance & safety, reduced stopping distance, prevention of costly rotor scores, and noise-free braking.</p>
                            </div>
                            <div className="pt-1 select-none pointer-events-none">
                              <span className="inline-block px-1.5 py-0.5 bg-slate-950 border border-slate-900 text-[8px] text-amber-400 font-mono rounded">
                                Recommended on indicator light or squeals
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Automatic Clutch Box */}
                        <div className="bg-slate-900/40 border border-slate-900 p-3.5 rounded-xl">
                          <div className="flex items-center gap-1.5 mb-2 border-b border-slate-900/60 pb-1.5">
                            <span className="text-sm">⚙️</span>
                            <h4 className="text-[11.5px] font-bold text-white uppercase tracking-tight">Automatic Clutch Service</h4>
                          </div>

                          <div className="space-y-2 text-[10.5px]">
                            <div>
                              <span className="block text-[8px] font-mono text-[#e11d48] uppercase font-bold">Service Inclusions</span>
                              <p className="text-slate-400 leading-relaxed">Automatic clutch inspection, actuator diagnosis, transmission system ECU scan, clutch assembly repair/replacement, calibration, shifting adaptations.</p>
                            </div>
                            <div>
                              <span className="block text-[8px] font-mono text-emerald-400 uppercase font-bold">Key Benefits</span>
                              <p className="text-slate-350 leading-relaxed">✔ Restores gearing responsiveness, smooth shifts, improved driving comfort, fuel efficiency, and extended transmission longevity.</p>
                            </div>
                            <div className="pt-1">
                              <span className="inline-block px-1.5 py-0.5 bg-emerald-950/20 border border-emerald-900/30 text-[8px] text-emerald-400 font-mono rounded">
                                Solves gear delays, startup slip & slippage
                              </span>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider font-extrabold">
                        <span>Transmission Systems</span>
                        <span className="text-[#e11d48]">● OEM Replacement Parts Guaranteed</span>
                      </div>
                    </div>

                    {/* Right side representation */}
                    <div className="md:col-span-12 lg:col-span-5 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-900 h-56 md:h-full min-h-[220px]">
                      <img 
                        src="/src/assets/images/brakes_clutch_service_1782131650398.jpg" 
                        alt="High performance brake pad and disk calipers" 
                        className="h-full w-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-855 p-2.5 rounded-lg shadow-xl">
                        <span className="block text-[8px] font-mono text-[#e11d48] uppercase font-black">Aesthetic Tech</span>
                        <span className="text-[10px] font-bold text-white uppercase font-sans font-black">Specialist Brake Caliper Bay</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Roadside Breakdown & Puncture Division */}
                {activeDivisionTab === "emergency" && (
                  <motion.div
                    key="emergency-panel"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full"
                  >
                    <div className="md:col-span-12 lg:col-span-7 flex flex-col justify-between space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded text-[8px] font-mono bg-amber-950/80 text-amber-500 border border-amber-800/40 uppercase font-black tracking-widest animate-pulse">
                            ● 24/7 Roadside Assistance
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                          🛞 Punctures & 🚨 Emergency Breakdown Support
                        </h3>
                        <p className="text-[12px] text-slate-400 mt-2 font-semibold leading-relaxed">
                          Got a sudden flat tyre tyre/puncture or unexpected battery start failure? Our emergency dispatch vehicle delivers fast roadside assist troubleshooting coordinates straight to you.
                        </p>
                      </div>

                      {/* Split Bento Block for Punctures & Breakdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Puncture repair */}
                        <div className="bg-slate-900/40 border border-slate-900 p-3.5 rounded-xl flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-1.5 mb-2 border-b border-slate-900 pb-1.5">
                              <span className="text-sm">🛞</span>
                              <h4 className="text-[11.5px] font-bold text-white uppercase tracking-tight">Puncture Repair Service</h4>
                            </div>
                            
                            <p className="text-[10.5px] text-slate-400 leading-relaxed font-sans mb-3">
                              Our professional puncture repair service ensures your tyre is restored safely and efficiently. Fully roadworthy performance.
                            </p>

                            <div className="space-y-1 text-[10px] text-slate-350 leading-relaxed border-t border-slate-900/60 pt-2">
                              <p>✔ Tyre puncture inspection & diagnosis</p>
                              <p>✔ High quality repair sealant & plug materials</p>
                              <p>✔ Air pressure checks & balancing check</p>
                              <p>✔ Valve diagnostics & safe replacements</p>
                            </div>
                          </div>

                          <div className="mt-4 pt-1.5 border-t border-slate-900 flex justify-between items-center bg-slate-950/50 p-2 rounded-lg">
                            <span className="text-[8px] font-mono text-slate-500 font-extrabold uppercase">Professional Fix</span>
                            <span className="text-[11px] font-mono font-black text-[#e11d48] uppercase">₹600 Onwards*</span>
                          </div>
                        </div>

                        {/* Breakdown assistance */}
                        <div className="bg-slate-900/40 border border-slate-900 p-3.5 rounded-xl flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-1.5 mb-2 border-b border-slate-900 pb-1.5">
                              <span className="text-sm">🚨</span>
                              <h4 className="text-[11.5px] font-bold text-white uppercase tracking-tight">Breakdown Emergency Help</h4>
                            </div>

                            <p className="text-[10.5px] text-slate-400 leading-relaxed font-sans mb-3">
                              Unexpected vehicle breakdown? Our emergency assistance team is active and ready to dispatch to help immediately.
                            </p>

                            <div className="space-y-1 text-[10px] text-slate-355 leading-relaxed border-t border-slate-900/60 pt-2">
                              <p>✔ Complete roadside vehicle inspection</p>
                              <p>✔ Battery jump-start booster deployment</p>
                              <p>✔ On-site minor troubleshoot & starting fixes</p>
                              <p>✔ Guidance and flat-tyre assistance</p>
                            </div>
                          </div>

                          <div className="mt-4 pt-1.5 border-t border-slate-900 flex justify-between items-center bg-slate-950/50 p-2 rounded-lg">
                            <span className="text-[8px] font-mono text-slate-500 font-bold uppercase">Emergency Response</span>
                            <span className="text-[11px] font-mono font-black text-[#e11d48] uppercase">₹1,000 Onwards*</span>
                          </div>
                        </div>

                      </div>

                      <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider font-extrabold">
                        <span>Dispatch Support Zone</span>
                        <span className="text-emerald-400">● 100% Reliable Road Support</span>
                      </div>
                    </div>

                    {/* Right side representation */}
                    <div className="md:col-span-12 lg:col-span-5 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-900 h-56 md:h-full min-h-[220px]">
                      <img 
                        src="/src/assets/images/breakdown_puncture_service_1782131669996.jpg" 
                        alt="Roadside emergency mechanic servicing" 
                        className="h-full w-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-855 p-2.5 rounded-lg shadow-xl">
                        <span className="block text-[8px] font-mono text-emerald-400 uppercase font-black animate-pulse">● active queue response</span>
                        <span className="text-[10px] font-bold text-white uppercase font-sans font-black">24/7 Fleet Dispatch Unit</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. Expert Denting & Body Tinkering */}
                {activeDivisionTab === "body" && (
                  <motion.div
                    key="body-panel"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col h-full justify-between space-y-6"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-[8px] font-mono bg-amber-950/60 text-amber-500 border border-amber-800/40 uppercase font-black tracking-widest animate-pulse">
                          ● Premium Collision Bay
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                        🛠️ Expert Denting, Tinkering & Body Repair Specialists
                      </h3>
                      <p className="text-[12px] text-slate-400 mt-2 font-semibold leading-relaxed">
                        Our skilled denting and tinkering professionals are deeply experienced in restoring vehicles affected by accidents, deep dents, abrasive scratches, structural corrosion, and body damage.
                      </p>
                    </div>

                    {/* Bento structure for Body Repair and Why Choose */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Expertise Block */}
                      <div className="bg-slate-900/40 border border-slate-900 p-4 rounded-2xl">
                        <span className="block text-[9px] font-mono text-amber-500 uppercase tracking-widest font-extrabold mb-2.5">
                          Body Repair Expertise Includes:
                        </span>
                        <div className="space-y-1.5 text-[11px] font-semibold text-slate-300">
                          {[
                            "Minor and major dent removal",
                            "Accident damage repair & chassis alignment",
                            "Panel repair, reshape, and replacement",
                            "Bumper repair & restoration",
                            "Door, bonnet, fender, and tailgate repairs",
                            "Scratch removal & surface restoration",
                            "Rust treatment & corrosion protection",
                            "Precision body reshaping using professional tools",
                            "Insurance claim repair & assistance"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Why Choose Block */}
                      <div className="bg-slate-900/40 border border-slate-900 p-4 rounded-xl flex flex-col justify-between">
                        <div>
                          <span className="block text-[9px] font-mono text-rose-500 uppercase tracking-widest font-extrabold mb-2.5">
                            Why Choose Our Tinkering Specialists?
                          </span>
                          <div className="space-y-2 text-[10.5px] font-semibold text-slate-450">
                            <p className="leading-relaxed">
                              ✔ <strong className="text-slate-200">Years of hands-on</strong> automotive body repair experience.
                            </p>
                            <p className="leading-relaxed">
                              ✔ Ability to <strong className="text-slate-200">identify and rectify</strong> complex structural body damage.
                            </p>
                            <p className="leading-relaxed">
                              ✔ Precision workmanship with strict <strong className="text-slate-200">factory-finish standards</strong>.
                            </p>
                            <p className="leading-relaxed">
                              ✔ Advanced specialized machinery & repair techniques.
                            </p>
                            <p className="leading-relaxed">
                              ✔ Cost-effective repair options & <strong className="text-slate-200">transparent body estimates</strong>.
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Highlight Panel: No Problem Too Big or Too Small */}
                    <div className="bg-slate-900 border border-amber-500/10 p-4 rounded-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />
                      <span className="block text-[10px] font-mono font-bold text-amber-500 uppercase tracking-wider">
                        "No Problem Too Big or Too Small"
                      </span>
                      <p className="text-[11.5px] font-semibold text-slate-400 mt-1 leading-relaxed">
                        Whether it's a small dent, major accident repair, alignment issue, body panel damage, or complete body restoration, our expert tinkering team is committed to finding the right solution and bringing your vehicle back to its best condition.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* 3. Premium Paint & Body Restoration */}
                {activeDivisionTab === "paint" && (
                  <motion.div
                    key="paint-panel"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full"
                  >
                    <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded text-[8px] font-mono bg-rose-950/80 text-rose-400 border border-rose-850/40 uppercase font-black tracking-widest">
                            ● Dust-free Paint Booth
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                          🎨 Premium Paint & Body Restoration
                        </h3>
                        <p className="text-[12px] text-slate-400 mt-2 font-semibold leading-relaxed">
                          After denting and tinkering work, we offer professional paint restoration services to achieve a near factory-finish appearance.
                        </p>
                      </div>

                      {/* Services Include Card */}
                      <div className="bg-slate-900/40 border border-slate-900 p-4 rounded-2xl">
                        <span className="block text-[9px] font-mono text-[#e11d48] uppercase tracking-widest font-extrabold mb-3">
                          Paint Services Include:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-semibold text-slate-350">
                          {[
                            "Full body painting",
                            "Panel painting",
                            "Scratch and chip touch-up",
                            "Paint polishing & detailing",
                            "Clear coat protection",
                            "Color matching using professional paint systems"
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Check className="h-3.5 w-3.5 text-[#e11d48]" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider font-extrabold">
                        <span>Gloss Clear-Coat Tech</span>
                        <span className="text-[#e11d48]">● OEM Paint Match Systems</span>
                      </div>
                    </div>

                    {/* Right side representation */}
                    <div className="md:col-span-12 lg:col-span-5 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-855 h-56 md:h-full min-h-[220px]">
                      <img 
                        src="/src/assets/images/body_paint_restoration_1782130820315.jpg" 
                        alt="Computerized Color Matching Paint Booth" 
                        className="h-full w-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-855 p-2.5 rounded-lg shadow-xl">
                        <span className="block text-[8px] font-mono text-slate-500 uppercase font-black">OES Standard</span>
                        <span className="text-[10px] font-bold text-white uppercase font-sans font-black">Near Factory Paint Finish</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. Quality Assurance Panel */}
                {activeDivisionTab === "qa" && (
                  <motion.div
                    key="qa-panel"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col h-full justify-between space-y-6"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-[8px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 uppercase font-black tracking-wide">
                          ● Zero Defect Policy
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                        🏆 Quality Assurance Delivery Sign-off
                      </h3>
                      <p className="text-[12px] text-slate-400 mt-2 font-semibold leading-relaxed">
                        Every single vehicle undergoes an extremely thorough and meticulous visual and mechanical quality inspection before delivery to guarantee absolute owner satisfaction.
                      </p>
                    </div>

                    {/* QA Checklist Card */}
                    <div className="p-5 rounded-2xl border border-slate-900 bg-slate-900/30">
                      <span className="block text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-black mb-3">
                        Delivery Sign-off Audits Include:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="h-6 w-6 shrink-0 rounded-lg bg-emerald-950/60 border border-emerald-900/35 flex items-center justify-center text-emerald-450">
                            <CheckSquare className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="text-[12px] font-bold text-white uppercase">Proper Repair Completion</h4>
                            <p className="text-[10.5px] text-slate-450 mt-0.5">Physical testing and verification of all engine torque values, fluids, and filters.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="h-6 w-6 shrink-0 rounded-lg bg-emerald-950/60 border border-emerald-900/35 flex items-center justify-center text-emerald-455">
                            <CheckSquare className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="text-[12px] font-bold text-white uppercase">Paint Finish Quality</h4>
                            <p className="text-[10.5px] text-slate-455 mt-0.5">Ensuring near factory coat status, clearcoat flows, and zero dust speck integration.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="h-6 w-6 shrink-0 rounded-lg bg-emerald-950/60 border border-emerald-900/35 flex items-center justify-center text-emerald-455">
                            <CheckSquare className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="text-[12px] font-bold text-white uppercase">Panel Alignment Accuracy</h4>
                            <p className="text-[10.5px] text-slate-455 mt-0.5">Checking all margins, door fits, bumpers, bonnet gaps, and tailgate boundaries.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="h-6 w-6 shrink-0 rounded-lg bg-emerald-950/60 border border-emerald-900/35 flex items-center justify-center text-emerald-455">
                            <CheckSquare className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="text-[12px] font-bold text-white uppercase">Vehicle Cleanliness</h4>
                            <p className="text-[10.5px] text-slate-455 mt-0.5">Deep internal vacuum sweep, pristine dashboard shine coat, and standard external hand wash.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-900/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ThumbsUp className="h-4.5 w-4.5 text-emerald-450 animate-pulse shrink-0" />
                        <span className="text-[11.5px] font-bold font-sans text-white">🏆 Guaranteed 100% Customer Satisfaction Audit Verified</span>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-450 uppercase font-black tracking-wider">
                        ● Zero defect sign-off
                      </span>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* 3. About Preview & Mission Section */}
      <section id="about-preview" className="py-20 px-4 md:px-8 bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-2 font-black">
                About Hari Automobiles
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Expert Vehicle Care For Multiple Car Brands
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                Hari Automobiles is one of Bangalore's most trusted independent automotive workshops. We operate a high-caliber multi-brand layout in the IT-Brookefield corridor, maintaining a stellar reputation for honesty, clear pricing, and expert engineering since our launch.
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Whether you own a luxury Jeep, an elegant Fiat, or a trusted Maruti / Hyundai commuter, our technicians execute service checks with maximum precision, utilizing premium full-synthetics and certified diagnostic codes.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-950/40 text-[#e11d48] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Cashless Insurance Claims</span>
                    <p className="text-[11px] text-slate-400">Easy claim settlements with top insurers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-950/40 text-[#e11d48] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Doorstep Pickup & Drop</span>
                    <p className="text-[11px] text-slate-400">Secure driving coordination near Whitefield corridor.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => onNavigate("about")}
                  id="view-about-full-btn"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 hover:text-[#e11d48] text-xs text-slate-200 font-bold px-4 py-2.5 transition shadow-sm"
                >
                  <span>Read Our Full Story</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Visual highlight box: Why Choose Us */}
            <div className="bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-900 shadow-xl relative">
              <div className="absolute top-0 right-0 h-24 w-24 bg-rose-550/5 blur-2xl rounded-full" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#e11d48] uppercase block mb-3 font-bold">
                Why Experience Matters
              </span>
              <h3 className="text-xl font-bold text-white mb-6">Why Choose Hari Automobiles?</h3>
              
              <div className="space-y-4">
                {[
                  { title: "Experienced Tech Team", desc: "Equipped with specialized timings locks, tensioners, and Fiat-Jeep special diagnostic modules.", icon: UserCheck },
                  { title: "Multi-Brand Expertise", desc: "Expert on-board computers integration to cater Maruti, Hyundai, Tata, VW, Ford, Kia, Nissan etc.", icon: Settings },
                  { title: "Advanced Diagnostic Rig", desc: "ECU scanning & Live Data parameter analyzing helps resolve faults on target sensors.", icon: Wrench },
                  { title: "Genuine Spare Parts", desc: "Original factory-spec oils & components are logged with full warranty receipts.", icon: ShieldCheck },
                  { title: "Customer Satisfaction", desc: "Transparency from start to finish. Real-time diagnostic photos are sent directly via WhatsApp.", icon: Sparkles },
                  { title: "Affordable Pricing", desc: "Genuine premium care at nearly 40-50% lower prices than authorized dealerships.", icon: Tag }
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start">
                    <div className="p-2 rounded-lg bg-rose-950/40 text-[#e11d48] shrink-0">
                      <point.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white">{point.title}</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Brands & Trusted Partners OES Hub (Interactive Auto-Scroll Carousel) */}
      <section id="brands-block" className="py-20 bg-slate-900/30 border-y border-slate-900 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8 mb-12">
          
          {/* Header 1: Trusted Spares and Partners */}
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-2 font-bold animate-pulse">
              🛡️ Certified OES Chains & Component Partners
            </span>
            <h2 className="text-3xl font-black text-white sm:text-4xl uppercase tracking-wider">
              Our Trusted Spares & OES Partners
            </h2>
            <p className="text-xs text-slate-400 max-w-2xl mx-auto mt-3 font-semibold">
              We exclusively partner with the world's leading automotive component brands. Enjoy authorized warranties, pre-negotiated OES rates, and elite performance across all vehicle assemblies.
            </p>
          </div>

          {/* AUTO-SCROLL CAROUSEL ENGINE */}
          <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md mb-20">
            
            {/* Absolute background accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e11d48]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900/40 rounded-full blur-3xl pointer-events-none" />

            {/* Main Slide Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Technical Info Details */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="px-3 py-1 rounded-full text-[9px] font-mono font-extrabold tracking-widest bg-emerald-950/80 text-emerald-405 border border-emerald-800/40 uppercase animate-pulse">
                      ● active trust partner
                    </span>
                    <span className="px-3 py-1 rounded-full text-[9px] font-mono font-extrabold tracking-widest bg-slate-900 text-slate-300 border border-slate-800 uppercase">
                      {TRUSTED_PARTNERS[currentPartnerIdx].type}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {TRUSTED_PARTNERS[currentPartnerIdx].name}
                  </h3>
                  
                  <p className="text-xs text-slate-400 font-semibold mt-1 font-mono tracking-wide text-[#e11d48] uppercase">
                    Key Benefit: {TRUSTED_PARTNERS[currentPartnerIdx].benefit}
                  </p>

                  <p className="text-[13px] text-slate-300 font-medium leading-relaxed mt-4 bg-slate-900/40 p-4 rounded-2xl border border-slate-900">
                    {TRUSTED_PARTNERS[currentPartnerIdx].desc}
                  </p>
                </div>

                {/* Additional metadata tags */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/55">
                    <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest font-bold">Authorized Warranty</span>
                    <span className="block text-xs font-bold text-slate-200 mt-1">{TRUSTED_PARTNERS[currentPartnerIdx].warranty}</span>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/55">
                    <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest font-bold">Customer Satisfaction</span>
                    <span className="block text-xs font-bold text-emerald-400 mt-1">{TRUSTED_PARTNERS[currentPartnerIdx].rating}</span>
                  </div>
                </div>

                {/* Left Side Controls Row */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-900">
                  <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button 
                      onClick={() => {
                        setIsCarouselPlaying(false);
                        setCurrentPartnerIdx((prev) => (prev - 1 + TRUSTED_PARTNERS.length) % TRUSTED_PARTNERS.length);
                      }}
                      className="p-2.5 rounded-xl border border-slate-850 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition active:scale-95 cursor-pointer select-none"
                      title="Previous Partner"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Play/Pause Button */}
                    <button 
                      onClick={() => setIsCarouselPlaying(!isCarouselPlaying)}
                      className="p-2.5 rounded-xl border border-slate-850 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition active:scale-95 cursor-pointer flex items-center gap-1.5 font-mono text-[9px] font-black uppercase tracking-wider select-none px-4"
                      title={isCarouselPlaying ? "Pause Auto Scroll" : "Play Auto Scroll"}
                    >
                      {isCarouselPlaying ? (
                        <>
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                          <span>Autoplay ON</span>
                        </>
                      ) : (
                        <>
                          <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                          <span>Autoplay OFF</span>
                        </>
                      )}
                    </button>

                    {/* Next Button */}
                    <button 
                      onClick={() => {
                        setIsCarouselPlaying(false);
                        setCurrentPartnerIdx((prev) => (prev + 1) % TRUSTED_PARTNERS.length);
                      }}
                      className="p-2.5 rounded-xl border border-slate-850 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition active:scale-95 cursor-pointer select-none"
                      title="Next Partner"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Fractional indicators */}
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">
                    Slot {currentPartnerIdx + 1} / {TRUSTED_PARTNERS.length}
                  </div>
                </div>

              </div>

              {/* Right Side: Product Picture Presentation Panel */}
              <div className="lg:col-span-5 relative h-64 md:h-80 w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner group/prod">
                <img 
                  src={TRUSTED_PARTNERS[currentPartnerIdx].image} 
                  alt={TRUSTED_PARTNERS[currentPartnerIdx].name}
                  className="h-full w-full object-cover object-center group-hover/prod:scale-102 transition-transform duration-700 opacity-90 animate-fade-in"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 border border-slate-850 backdrop-blur-md p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest font-black">Verified Spares</span>
                    <span className="text-xs font-bold text-white uppercase">{TRUSTED_PARTNERS[currentPartnerIdx].name} Genuine</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[8px] font-mono font-bold bg-amber-500 text-white shadow-xs">
                    OES AUTHENTIC
                  </span>
                </div>
              </div>

            </div>

            {/* Thumbnail Bottom Quick Navigation Bar */}
            <div className="mt-8 pt-6 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-5 gap-2">
              {TRUSTED_PARTNERS.map((p, pIdx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setIsCarouselPlaying(false);
                    setCurrentPartnerIdx(pIdx);
                  }}
                  className={`text-left p-2.5 rounded-xl border transition-all duration-300 cursor-pointer text-ellipsis overflow-hidden ${
                    currentPartnerIdx === pIdx
                      ? "bg-slate-900/90 border-[#e11d48]/40 shadow-xs ring-1 ring-[#e11d48]/10"
                      : "bg-slate-950/40 border-slate-900 hover:border-slate-850 text-slate-400 hover:text-slate-300"
                  }`}
                >
                  <span className={`block text-[8px] font-mono font-bold uppercase tracking-widest ${
                    currentPartnerIdx === pIdx ? "text-[#e11d48]" : "text-slate-600"
                  }`}>
                    Partner 1{pIdx + 1}
                  </span>
                  <span className="block text-[11px] font-semibold text-slate-200 truncate font-sans mt-0.5">
                    {p.name.replace(" Partners", "").replace(" Batteries", "").replace(" Accessories", "").replace(" Engine Oil", "").replace(" Suspension", "")}
                  </span>
                </button>
              ))}
            </div>

          </div>

          {/* Header 2: Brands We Service Section */}
          <div className="text-center mt-20 mb-8 border-t border-slate-900/60 pt-16">
            <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-2 font-bold animate-pulse">
              🛠️ Diagnostics & Multi-brand Service Support
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider">
              Comprehensive Service For Major Vehicle Classes
            </h3>
            <p className="text-xs text-slate-400 max-w-xl mx-auto mt-2 font-semibold">
              Equipped with specialist manufacturer diagnostics, digital timing jigs, and OEM hardware chains specifically optimized for Indian, European, and Asian passenger cars.
            </p>
          </div>

        </div>

        {/* 100% Seamless Double-Marquee Engine */}
        <div className="relative w-full flex flex-col gap-8 select-none">
          
          {/* Left and Right Side Fade-out Vignette Gradients for Luxury Overlay */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none hidden md:block" />

          {/* Row 1: Sliding Right-to-Left (Brands 1-7 duplicated) */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-left flex gap-6">
              {[...BRANDS.slice(0, 7), ...BRANDS.slice(0, 7), ...BRANDS.slice(0, 7)].map((brand, idx) => (
                <div 
                  key={`r1-${idx}`}
                  className="group/card relative w-[290px] shrink-0 p-5 rounded-2xl border border-slate-900 bg-slate-950/50 transition-all duration-300 hover:border-rose-900/50 hover:shadow-2xl hover:shadow-black cursor-default shadow-lg"
                >
                  {/* Emblem Logo and Name Layout */}
                  <div className="flex items-center gap-3.5">
                    <div className="h-11 w-11 shrink-0 flex items-center justify-center p-1 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                      <BrandLogo name={brand.name} className="h-9 w-9 text-slate-100" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h3 className="font-sans text-sm font-bold text-white group-hover/card:text-[#e11d48] transition-colors truncate">
                          {brand.name}
                        </h3>
                        <span className="px-2 py-0.5 rounded-full text-[8px] font-mono font-extrabold tracking-wider bg-slate-900 text-slate-400 border border-slate-850 shrink-0 uppercase">
                          {brand.type}
                        </span>
                      </div>
                      <span className="block text-[8px] font-mono text-slate-400 tracking-widest uppercase mt-0.5 font-bold">
                        {brand.type === "Specialist" ? "★ Specialist Hub" : "✔ Certified Care"}
                      </span>
                    </div>
                  </div>

                  {/* Popular Model Chips */}
                  <div className="mt-4 pt-3.5 border-t border-slate-900">
                    <span className="text-[10px] font-mono font-bold text-slate-550 block mb-2">
                      Popular Models Serviced:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {brand.popularModels?.map((model, mId) => (
                        <span key={mId} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800/60 font-semibold">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Sliding Left-to-Right (Brands 8-14 duplicated) */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-right flex gap-6">
              {[...BRANDS.slice(7), ...BRANDS.slice(7), ...BRANDS.slice(7)].map((brand, idx) => (
                <div 
                  key={`r2-${idx}`}
                  className="group/card relative w-[290px] shrink-0 p-5 rounded-2xl border border-slate-900 bg-slate-950/50 transition-all duration-300 hover:border-rose-900/50 hover:shadow-2xl hover:shadow-black cursor-default shadow-lg"
                >
                  {/* Emblem Logo and Name Layout */}
                  <div className="flex items-center gap-3.5">
                    <div className="h-11 w-11 shrink-0 flex items-center justify-center p-1 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                      <BrandLogo name={brand.name} className="h-9 w-9 text-slate-100" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h3 className="font-sans text-sm font-bold text-white group-hover/card:text-[#e11d48] transition-colors truncate">
                          {brand.name}
                        </h3>
                        <span className="px-2 py-0.5 rounded-full text-[8px] font-mono font-extrabold tracking-wider bg-slate-900 text-slate-400 border border-slate-850 shrink-0 uppercase">
                          {brand.type}
                        </span>
                      </div>
                      <span className="block text-[8px] font-mono text-slate-400 tracking-widest uppercase mt-0.5 font-bold">
                        {brand.type === "Premium" ? "💎 Elite Hub" : "✔ Certified Care"}
                      </span>
                    </div>
                  </div>

                  {/* Popular Model Chips */}
                  <div className="mt-4 pt-3.5 border-t border-slate-900">
                    <span className="text-[10px] font-mono font-bold text-slate-550 block mb-2">
                      Popular Models Serviced:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {brand.popularModels?.map((model, mId) => (
                        <span key={mId} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800/60 font-semibold">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4.5. Premium Doorstep Pickup & Drop Feature Block */}
      <section id="pickup-drop-showcase" className="py-20 px-4 md:px-8 bg-slate-950 border-t border-slate-900/40 relative overflow-hidden">
        
        {/* Glowing visual backdrop */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-80 w-80 bg-rose-955/10 bg-rose-900/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-80 w-80 bg-[#e11d48]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Premium Image & Live Range Visualizer */}
            <div className="lg:col-span-6 space-y-6">
              <div className="group/pickup relative rounded-3xl overflow-hidden border border-slate-900 shadow-2xl bg-slate-900 aspect-[16/10]">
                <img 
                  src="/src/assets/images/pickup_drop_service_1782130311570.jpg" 
                  alt="Hari Automobiles Free Pickup and Drop Service" 
                  className="h-full w-full object-cover object-center group-hover/pickup:scale-102 transition duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shade overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Float tag indicating driver status */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 border border-slate-850 text-[9px] font-mono font-black text-[#e11d48] uppercase tracking-wider rounded-full shadow-lg">
                  ✔ active dispatch zone
                </span>
                
                {/* Real-time Concentric Limit Ring Widget */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-slate-850 backdrop-blur-md p-4 rounded-xl shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[8px] font-mono text-slate-550 uppercase tracking-widest font-black">Authorized Coverage Limit</span>
                      <span className="text-sm font-bold text-white uppercase tracking-tight">Kada Agrahara & Local IT Hubs</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs font-mono font-bold text-amber-500">10 KM Radius</span>
                      <span className="block text-[8px] font-mono text-emerald-400 uppercase font-bold">100% Free Service</span>
                    </div>
                  </div>
                  
                  {/* Subtle graphical distance bar representational map metric */}
                  <div className="mt-2.5 h-1 w-full bg-slate-900 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-[65%] bg-gradient-to-r from-amber-500 to-[#e11d48] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Informational Sub-tag banner list */}
              <div className="p-4 rounded-2xl bg-slate-900/30 border border-slate-900 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#e11d48]/10 flex items-center justify-center border border-rose-900/30">
                    <Compass className="h-4.5 w-4.5 text-[#e11d48]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-white">Full Radius Mapping</span>
                    <span className="block text-[9px] text-slate-500 font-medium font-sans">Coordinates synced locally</span>
                  </div>
                </div>
                <div className="h-6 w-[1px] bg-slate-850" />
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-950/40 flex items-center justify-center border border-emerald-900/30">
                    <ShieldCheck className="h-4.5 w-4.5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-white">Chauffeur Certified</span>
                    <span className="block text-[9px] text-slate-500 font-medium font-sans font-semibold">Thoroughly vetted staff</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Title & Description Column with cards */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-2 font-black animate-pulse">
                  📍 ELITE DOORSTEP LOGISTICS
                </span>
                <h2 className="text-3xl font-extrabold text-white uppercase tracking-wider sm:text-4xl">
                  Free Pickup & Drop Service
                </h2>
                <p className="mt-4 text-[13px] leading-relaxed text-slate-400 font-semibold font-sans">
                  At Hari Automobiles, we prioritize your ultimate driving ease. No need to clear your work schedules or commute through heavy Bangalore gridlocks to get raw performance back.
                </p>
              </div>

              {/* Key Features Bullet Stack */}
              <div className="space-y-4">
                
                {/* Feature Card 1 */}
                <div className="group/bullet p-4 rounded-2xl border border-slate-900 bg-slate-950/40 hover:border-slate-850 hover:bg-slate-950/80 transition-all duration-350">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-amber-550/10 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-sans font-extrabold text-white uppercase tracking-tight group-hover/bullet:text-amber-400 transition-colors">
                        Free Pickup & Drop Service
                      </h3>
                      <p className="text-[11.5px] text-slate-400 leading-relaxed mt-1 font-semibold font-sans">
                        Complimentary pickup and drop within a 10 km radius. Absolutely zero covert transit charges or logistics markup.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Card 2 */}
                <div className="group/bullet p-4 rounded-2xl border border-slate-900 bg-slate-950/40 hover:border-slate-850 hover:bg-slate-950/80 transition-all duration-350">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-[#e11d48]/10 border border-[#e11d48]/20 flex items-center justify-center text-[#e11d48]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-sans font-extrabold text-white uppercase tracking-tight group-hover/bullet:text-[#e11d48] transition-colors">
                        Convenient Doorstep Service
                      </h3>
                      <p className="text-[11.5px] text-slate-400 leading-relaxed mt-1 font-semibold font-sans">
                        Convenient doorstep service for customer comfort. Set your scheduled office hour or home key handoff at your convenience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Card 3 */}
                <div className="group/bullet p-4 rounded-2xl border border-slate-900 bg-slate-950/40 hover:border-slate-850 hover:bg-slate-950/80 transition-all duration-350">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-sans font-extrabold text-white uppercase tracking-tight group-hover/bullet:text-emerald-400 transition-colors">
                        Hassle-Free Servicing Experience
                      </h3>
                      <p className="text-[11.5px] text-slate-400 leading-relaxed mt-1 font-semibold font-sans">
                        Hassle-free vehicle servicing experience. Book in seconds, get live update estimates, and track your service transparently.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Scheduling Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  id="pickup-schedule-trigger-btn"
                  className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-xs font-black text-white px-6 py-3.5 shadow-lg shadow-amber-500/15 cursor-pointer select-none transition"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Live Pickup & Drop Slot</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Services Overview Grid */}
      <section id="services-overview-sec" className="py-20 px-4 md:px-8 bg-slate-950">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-2 font-bold animate-pulse">
                What We Do
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Premium Workshop Car Services
              </h2>
              <p className="text-xs text-slate-400 mt-2 max-w-md font-semibold">
                From periodic fluid changes to complete engine teardowns, we execute every repair with certified mechanical blueprints.
              </p>
            </div>
            <button
              onClick={() => { onNavigate("services"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              id="view-all-services-link"
              className="mt-4 md:mt-0 inline-flex items-center gap-1 text-sm font-bold text-[#e11d48] hover:text-rose-500 hover:underline cursor-pointer"
            >
              <span>Explore Detailed Oil, Clutch & Gear Catalog</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Quick Categories Selection Grid (Mirrors User's Uploaded Screenshot Exactly, Styled for Premium Dark-Mode Only) */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-slate-900 pb-5">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#e11d48] uppercase block mb-1.5 font-bold">
                  ⚡ Interactive Service Hub
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Explore Specialized Car Care by Category
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xl font-semibold">
                  Select any category to jump instantly to our advanced engineering processes or initiate a direct, tailored appointment booking.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORY_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleServiceClick(item.serviceId)}
                  className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 bg-slate-900/10 border-slate-900 hover:border-[#e11d48]/50 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-black cursor-pointer min-h-[140px]"
                >
                  {/* Glowing background aura */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e11d48]/0 to-[#e11d48]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Green "New" badge replicating the user's layout */}
                  {item.isNew && (
                    <span className="absolute top-2.5 right-2.5 px-1.5 py-0.5 rounded text-[8px] font-mono font-black tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-900/60 uppercase animate-pulse">
                      New
                    </span>
                  )}

                  {/* Icon illustration frame */}
                  <div className="h-14 w-14 mb-3.5 flex items-center justify-center rounded-2xl bg-slate-950/40 border border-slate-850/60 transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>

                  {/* Title label */}
                  <span className="text-[11px] font-extrabold text-slate-350 group-hover:text-white transition-colors tracking-wide text-center leading-tight">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-[#e11d48] tracking-widest text-[10px] font-mono uppercase mb-1">
              Featured Solutions
            </h3>
            <h4 className="text-2xl font-black text-white tracking-tight">
              Premium Workshop Mechanics Catalogue
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="group relative flex flex-col rounded-2xl border border-slate-900 bg-slate-900/40 p-6 transition-all duration-300 hover:translate-y-[-4px] hover:border-rose-900/50 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-black cursor-pointer"
              >
                {/* Accent boundary light */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-slate-800 transition group-hover:bg-[#e11d48]" />
                
                <h3 className="text-lg font-bold text-white mt-4 group-hover:text-[#e11d48] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-350 mt-2.5 leading-relaxed flex-grow font-semibold">
                  {service.shortDesc}
                </p>

                <div className="mt-4.5 border-t border-slate-800 pt-4 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono font-bold">EST: {service.priceRange.split("(")[0]}</span>
                  <div className="text-[#e11d48] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 font-bold text-[11px]">
                    <span>View Service Detail</span>
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Testimonials Preview Block */}
      <section id="reviews-block" className="py-20 bg-slate-900/30 border-t border-slate-900 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-1 font-bold">
              Bangalore Drivers Feedback
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              What Our Customers Say
            </h2>
            <p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto font-semibold">
              Read verified testimonials regarding our Fiat, Jeep, and multi-brand car repairs around East Bangalore.
            </p>
          </div>

          {/* Infinite Marquee of Reviews (Auto-scrolling horizontal list) */}
          <div className="relative w-full overflow-hidden py-4 select-none mb-6">
            {/* Left and Right Fade Gradients for visual fluff */}
            <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-slate-950 via-slate-950/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-slate-950 via-slate-950/30 to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee-left flex gap-6">
              {[...REVIEWS, ...REVIEWS].map((rev, idx) => (
                <div 
                  key={`${rev.id}-dup-${idx}`}
                  className="w-[290px] sm:w-[360px] shrink-0 bg-slate-950/80 rounded-2xl p-6 border border-slate-900 hover:border-rose-900/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <img
                          src={rev.avatar}
                          alt={rev.author}
                          className="h-10 w-10 rounded-full border border-slate-800 object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <span className="block font-bold text-white text-sm">{rev.author}</span>
                          <span className="block text-[10px] font-mono text-slate-450 mt-0.5">{rev.vehicle}</span>
                        </div>
                      </div>
                      <div className="flex text-[#e11d48]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-[#e11d48] text-[#e11d48]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed italic font-semibold">
                      "{rev.text}"
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-900/80 flex justify-between items-center text-[10px] text-slate-400 font-extrabold font-mono">
                    <span>Verified Service Customer</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center pb-8 border-b border-slate-900/40">
            <button
              onClick={() => { onNavigate("testimonials"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              id="view-all-reviews-btn"
              className="inline-flex items-center gap-1.5 text-xs text-[#e11d48] font-bold hover:underline"
            >
              <span>View All Customer Reviews with Before & After Images</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Social Video Clips & Reels Component Feed */}
          <InstagramReelsSection />

        </div>
      </section>

      {/* 7. Call To Action (Book Your Car Service Today) */}
      <section id="cta-banner" className="relative py-20 px-4 md:px-8 bg-slate-950 overflow-hidden">
        {/* Subtle background red fog */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-rose-900/10 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-5xl rounded-3xl border border-slate-900 bg-slate-900/60 p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950/40 pointer-events-none" />

          <span className="text-xs font-mono tracking-widest text-[#e11d48] uppercase block mb-3 font-extrabold">
            ⚡ Quick & Seamless Diagnostic Scheduling
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
            Book Your Car Service Today
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-semibold">
            Get reliable, affordable, and transparent automotive service. Fill our instant online scheduling form, drop off your vehicle, or utilize our premium driver pickups in local Bangalore districts.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row items-center">
            <button
              onClick={handleBookNow}
              id="cta-schedule-btn"
              className="w-full sm:w-auto rounded-xl bg-[#e11d48] hover:bg-rose-700 text-white text-sm font-extrabold px-7 py-3.5 transition shadow-xl cursor-pointer border border-rose-500/20"
            >
              📅 Schedule Appointment
            </button>
            <a
              href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
              id="cta-call-btn"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-850 text-white font-extrabold py-3.5 px-6 text-sm transition"
            >
              <Phone className="h-4 w-4 text-[#e11d48]" />
              <span>Call workshop instead</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-slate-400 font-semibold">
            <span className="flex items-center gap-1.5">✓ Genuine Parts Guarantee</span>
            <span className="flex items-center gap-1.5">✓ Clean workshop environment</span>
            <span className="flex items-center gap-1.5">✓ Prompt notifications on WhatsApp</span>
          </div>
        </div>
      </section>

      {/* 8. Local Bangalore Search Engine Optimization (SEO) Context Directory */}
      <section id="seo-directory-section" className="py-12 bg-slate-950/60 border-t border-slate-900 px-4 md:px-8 xl:px-12 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* SEO Column 1: Local Bangalore Service Corridors */}
            <div className="space-y-3 text-left">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#e11d48] font-black">LOCAL BUSINESS INDEX</span>
              <h4 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Bangalore Service Zones</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Hari Automobiles provides premium independent car services and on-site expert vehicle diagnostics across major North-East and East Bangalore corridors. We service cars from:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Hennur Road", "Kada Agrahara", "Anagalapura", "Thanisandra", "Bagalur", "Lovedale", "KR Puram", "Babusapalya", "Horamavu", "Kalyan Nagar", "HRBR Layout", "Outer Ring Road"].map((area, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-350 hover:text-[#e11d48] hover:border-[#e11d48]/20 transition">
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

            {/* SEO Column 2: High Relevance Search Queries & Keywords */}
            <div className="space-y-3 text-left">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#e11d48] font-black">SEARCH CORRELATION DATA</span>
              <h4 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Car Repair Target Queries</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Looking for cheap, reliable, and authorized-level luxury maintenance near you? We rank at the top for:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-350 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-[#e11d48] font-black">•</span>
                  <span>Best independent Jeep specialized workshop in Bangalore</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e11d48] font-black">•</span>
                  <span>Fiat Punto, Linea, Avventura specialized engine tuning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e11d48] font-black">•</span>
                  <span>Multi-brand car clutch overhaul and suspension repair near Hennur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e11d48] font-black">•</span>
                  <span>Professional car diagnostic OBD scanner workshop Anagalapura</span>
                </li>
              </ul>
            </div>

            {/* SEO Column 3: Rich Schema Local FAQ */}
            <div className="space-y-3 text-left">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#e11d48] font-black">LOCAL DIRECTORY SCHEMA</span>
              <h4 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Why Hari Automobiles ranks first?</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                By offering original Mopar parts support, transparent digital estimates shared on WhatsApp, and on-site expert mechanics trained to work on high-pressure common rail diesels and modern turbo petrol engines.
              </p>
              {/* <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11.5px] font-mono leading-relaxed text-slate-350">
                <span className="text-white font-extrabold block mb-0.5">💡 Google Search Tip:</span>
                Search for <span className="text-[#e11d48] font-bold">"best car service in bangalore"</span> or <span className="text-[#e11d48] font-bold">"fiat specialists hara automobiles"</span> to book direct slot allocations instantly.
              </div> */}
            </div>

          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-900 text-center">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">
              Hari Automobiles Bangalore • Digital Metadata Citation Index • Sitemaps Protocol v1.4
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
