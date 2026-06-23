import React, { useState, useMemo } from "react";
import { 
  Search, Filter, Car, Wrench, ShieldCheck, Paintbrush, 
  HelpCircle, Info, RefreshCw, ChevronRight, Check, CheckCircle
} from "lucide-react";
import { 
  VEHICLE_GROUPS, 
  MECHANICAL_LABOR_SCHEDULE, 
  PAINTING_LABOR_SCHEDULE,
  VehicleModelMapping
} from "../labourData";

interface LabourScheduleDashboardProps {
  onOpenBooking: () => void;
}

export default function LabourScheduleDashboard({ onOpenBooking }: LabourScheduleDashboardProps) {
  // State management
  const [activeTab, setActiveTab] = useState<"mechanical" | "painting">("mechanical");
  const [searchCarQuery, setSearchCarQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string>("3.2"); // Default is Jeep/Creta MidSUV (representative)
  const [mechCategory, setMechCategory] = useState<string>("All");
  const [mechSearch, setMechSearch] = useState("");
  const [paintFinish, setPaintFinish] = useState<"solid" | "metallic" | "pearl">("metallic");

  // Flatten all models to offer interactive autocomplete search
  const flatCarList = useMemo(() => {
    const list: { name: string; group: string; groupTitle: string; category: string }[] = [];
    VEHICLE_GROUPS.forEach(g => {
      g.models.forEach(model => {
        list.push({
          name: model,
          group: g.group,
          groupTitle: g.title,
          category: g.category
        });
      });
    });
    return list;
  }, []);

  // Filter recommendations based on user search
  const recommendedCars = useMemo(() => {
    if (!searchCarQuery.trim()) return [];
    const query = searchCarQuery.toLowerCase();
    return flatCarList.filter(car => car.name.toLowerCase().includes(query)).slice(0, 5);
  }, [searchCarQuery, flatCarList]);

  // Handle click on recommended car
  const handleSelectCar = (car: typeof flatCarList[0]) => {
    setSelectedGroup(car.group);
    setSearchCarQuery(car.name);
  };

  // Extract currently selected group's metadata
  const currentGroupMeta = useMemo(() => {
    return VEHICLE_GROUPS.find(g => g.group === selectedGroup);
  }, [selectedGroup]);

  // Categories of mechanical labour present in database
  const mechanicalCategories = [
    "All",
    "Standard",
    "Brake",
    "Suspension",
    "Steering",
    "Clutch",
    "Cooling",
    "Electrical",
    "Engine",
    "AC Services"
  ];

  // Filtered mechanical schedule
  const filteredMechSchedule = useMemo(() => {
    return MECHANICAL_LABOR_SCHEDULE.filter(item => {
      const categoryMatch = mechCategory === "All" || item.category === mechCategory;
      const searchMatch = item.service.toLowerCase().includes(mechSearch.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [mechCategory, mechSearch]);

  const formatPriceVal = (val: any) => {
    if (typeof val === "number") {
      return `₹${val.toLocaleString("en-IN")}`;
    }
    return val; // e.g., "Man-Hour"
  };

  return (
    <div id="labour-charges-dashboard" className="rounded-3xl border border-slate-900 bg-slate-950 p-6 md:p-10 shadow-2xl">
      
      {/* Upper header */}
      <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-900 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#e11d48] border border-rose-500/20">
            📊 Premium Transparent Pricing Guarantee
          </div>
          <h2 className="mt-3 text-2xl font-black md:text-4xl text-white uppercase tracking-tight">
            Standardised Labour handbook
          </h2>
          <p className="mt-2 text-xs text-slate-400 max-w-xl leading-relaxed">
            Proudly presenting completely standardized labour rates for all passenger cars. 
            No surprises, no unauthorized dealer inflation. Select your vehicle to look up correct schedule details.
          </p>
        </div>

        {/* Tab triggers */}
        <div className="flex bg-slate-900/95 p-1 rounded-xl border border-slate-800/80 shrink-0 self-center md:self-end">
          <button
            onClick={() => setActiveTab("mechanical")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "mechanical" 
                ? "bg-[#e11d48] text-white shadow-md shadow-rose-950/20" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Wrench className="h-4 w-4" />
            <span>Mechanical Repairs</span>
          </button>
          <button
            onClick={() => setActiveTab("painting")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "painting" 
                ? "bg-[#e11d48] text-white shadow-md shadow-rose-950/20" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Paintbrush className="h-4 w-4" />
            <span>Body Paint & Denting</span>
          </button>
        </div>
      </div>

      {/* STEP 1: Search & Lookup Car Engine Group */}
      <div className="mb-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: interactive lookup */}
        <div className="lg:col-span-7 bg-slate-900/70 p-6 rounded-2xl border border-slate-800/80 space-y-5">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Car className="h-4.5 w-4.5 text-[#e11d48]" />
            <span>Step 1: Select Your Car Model</span>
          </h3>

          <div className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-500" />
              <input
                type="text"
                placeholder="Type your car make or model (e.g. Swift, Compass, i20, Polo...)"
                value={searchCarQuery}
                onChange={(e) => setSearchCarQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 py-3 pl-10 pr-4 text-xs font-semibold text-slate-200 outline-none placeholder:text-slate-600 focus:border-[#e11d48]/40 focus:ring-1 focus:ring-[#e11d48]/20 transition"
              />
              {searchCarQuery && (
                <button 
                  onClick={() => setSearchCarQuery("")}
                  className="absolute right-3 top-2.5 px-1.5 py-0.5 rounded text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold transition cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Smart autocompletion recommendations */}
            {recommendedCars.length > 0 && (
              <div className="absolute top-full left-0 z-25 mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-2xl divide-y divide-slate-900 animate-fade-in">
                {recommendedCars.map((car, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectCar(car)}
                    className="w-full flex items-center justify-between text-left px-3 py-2.5 rounded-lg hover:bg-slate-900 text-xs text-slate-300 transition"
                  >
                    <span className="font-semibold text-white">{car.name}</span>
                    <span className="text-[10px] font-mono text-[#e11d48] bg-rose-500/5 px-2 py-0.5 rounded border border-rose-500/10">
                      Auto-sets {car.category} ({car.group})
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Dropdown select if search is idle */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Or manually select vehicle segment group:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {VEHICLE_GROUPS.map((g) => (
                <button
                  key={g.group}
                  onClick={() => setSelectedGroup(g.group)}
                  className={`px-3 py-2 rounded-xl text-left border text-[11px] font-bold transition cursor-pointer ${
                    selectedGroup === g.group
                      ? "bg-slate-900 border-[#e11d48]/50 text-white"
                      : "bg-slate-950 hover:bg-[#e11d48]/5 border-slate-900 hover:border-slate-800 text-slate-400"
                  }`}
                >
                  <span className="block text-[10px] font-mono text-[#e11d48]">Group {g.group}</span>
                  <span className="block truncate mt-0.5">{g.category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Segment metadata detail card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-850 h-full flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase block">
              Active Selection Details
            </span>
            <h4 className="text-xl font-extrabold text-white mt-1.5 flex items-center gap-2.5">
              <span className="rounded bg-[#e11d48]/10 border border-[#e11d48]/20 px-2.5 py-0.5 text-xs font-mono text-[#e11d48]">
                Group {selectedGroup}
              </span>
              <span>{currentGroupMeta?.category} Segment</span>
            </h4>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              This group maps standardized schedules for {currentGroupMeta?.title}.
            </p>

            <div className="mt-4 pt-4 border-t border-slate-900">
              <span className="text-[10px] font-mono uppercase text-slate-500 block mb-2">Includes models like:</span>
              <div className="flex flex-wrap gap-1.5 max-h-[85px] overflow-y-auto pr-1">
                {currentGroupMeta?.models.map((m, idx) => (
                  <span key={idx} className="text-[10px] font-sans font-medium text-slate-350 bg-slate-950 px-2.5 py-1 rounded border border-slate-850">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] font-bold text-[#e11d48]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>Hari Automobiles Verified Rates</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase">Ver. 2022(A)</span>
          </div>
        </div>
      </div>

      {/* TAB 1 CONTENT: MECHANICAL SCHEDULE SEARCH & LIST */}
      {activeTab === "mechanical" && (
        <div className="space-y-6">
          
          {/* Subcategory selection & search row */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-slate-900/40 p-4 rounded-xl border border-slate-900">
            <div className="flex flex-wrap items-center gap-1 max-w-2xl select-none">
              {mechanicalCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setMechCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition cursor-pointer ${
                    mechCategory === cat
                      ? "bg-slate-950 text-[#e11d48] border border-[#e11d48]/20 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative md:w-64 shrink-0">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search mechanics..."
                value={mechSearch}
                onChange={(e) => setMechSearch(e.target.value)}
                className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 pl-9 pr-3 text-xs font-semibold text-slate-200 outline-none focus:border-[#e11d48]/30 transition"
              />
            </div>
          </div>

          {/* Desktop Schedule Table Grid */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-900">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800 text-[10px] font-mono uppercase text-slate-450 tracking-wider">
                  <th className="p-4 text-slate-400">Mechanical Operation</th>
                  <th className="p-4 text-slate-400 text-center">Labour Category</th>
                  <th className="p-4 text-slate-400 text-center">Selected rates for Group {selectedGroup}</th>
                  <th className="p-4 text-slate-400 text-right">Standard Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/60 text-xs">
                {filteredMechSchedule.map((item, idx) => {
                  const rateVal = item.rates[selectedGroup] || item.rates["1.1"] || "Man-hour";
                  return (
                    <tr key={item.id} className="hover:bg-slate-900/30 transition">
                      <td className="p-4 font-bold text-slate-250">
                        {item.service}
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-block rounded bg-slate-900 px-2.5 py-1 text-[10px] font-mono text-slate-400">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-4 text-center font-mono font-extrabold text-amber-500 bg-amber-500/[0.01]">
                        <span className="inline-flex items-center gap-1 text-sm text-[#e11d48] bg-rose-500/5 px-2.5 py-1 rounded-lg border border-rose-500/15">
                          {formatPriceVal(rateVal)}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={onOpenBooking}
                          className="px-3 py-1.5 text-[11px] font-bold text-[#e11d48] bg-rose-500/5 hover:bg-[#e11d48] hover:text-white rounded-lg transition border border-rose-500/10 cursor-pointer"
                        >
                          Book Service Now
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {filteredMechSchedule.length === 0 && (
              <div className="p-8 text-center text-slate-550 text-xs">
                No matching mechanical schedules found. Try adjusting filters or search.
              </div>
            )}
          </div>

          {/* Mobile Layout: cards instead of Table */}
          <div className="md:hidden space-y-3.5">
            {filteredMechSchedule.map((item) => {
              const rateVal = item.rates[selectedGroup] || item.rates["1.1"] || "Man-hour";
              return (
                <div key={item.id} className="bg-slate-900/50 p-4 rounded-xl border border-slate-900 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-bold text-slate-200 leading-relaxed">
                      {item.service}
                    </span>
                    <span className="shrink-0 rounded bg-slate-900 px-2 py-0.5 text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-slate-900/80 pt-3">
                    <div>
                      <span className="block text-[9px] font-mono text-slate-500 uppercase">Rate Group {selectedGroup}</span>
                      <span className="text-sm font-black text-[#e11d48] mt-0.5 inline-block">
                        {formatPriceVal(rateVal)}
                      </span>
                    </div>
                    
                    <button
                      onClick={onOpenBooking}
                      className="px-3 py-1.5 text-[10px] font-black text-rose-500 bg-rose-500/10 rounded-lg"
                    >
                      Book ⚡
                    </button>
                  </div>
                </div>
              );
            })}
            {filteredMechSchedule.length === 0 && (
              <div className="p-8 text-center text-slate-500 text-xs">
                No matching mechanical schedules found. Try adjusting filters or search.
              </div>
            )}
          </div>

        </div>
      )}

      {/* TAB 2 CONTENT: BODY DENTING & PAINTING SCHEDULE */}
      {activeTab === "painting" && (
        <div className="space-y-6">
          
          {/* Top Panel Finishes Row */}
          <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 block mb-1">Step 2: Choose Paint Finish</span>
              <p className="text-xs text-slate-400">Each segment features tailored coats of primer and scratch-resistant clear finishes.</p>
            </div>

            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0 self-start md:self-center">
              {(["solid", "metallic", "pearl"] as const).map((finish) => (
                <button
                  key={finish}
                  onClick={() => setPaintFinish(finish)}
                  className={`px-4.5 py-2 rounded-lg text-xs font-bold transition-all uppercase tracking-wider select-none cursor-default ${
                    paintFinish === finish 
                      ? "bg-[#e11d48] text-white" 
                      : "text-slate-405 text-slate-450 hover:text-slate-200"
                  }`}
                >
                  {finish}
                </button>
              ))}
            </div>
          </div>

          {/* Painting Rates Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PAINTING_LABOR_SCHEDULE.map((item, idx) => {
              // Extract price for the selected group
              const pricesObj = item.rates[selectedGroup] || item.rates["1.1"];
              const finalPrice = pricesObj[paintFinish] || pricesObj["metallic"] || 0;

              return (
                <div 
                  key={idx}
                  className="bg-slate-900/25 hover:bg-slate-900/40 transition-all p-5 rounded-2xl border border-slate-900 hover:border-slate-800 flex flex-col justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-mono text-[#e11d48] uppercase tracking-wider font-bold">Panel Rate</span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase">{paintFinish} Finish</span>
                    </div>
                    <h4 className="text-sm font-bold text-white mt-1.5 leading-snug">
                      {item.panel}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-900 pt-3.5 mt-2">
                    <div>
                      <span className="block text-[9px] font-mono text-slate-500 uppercase">Estimated labor:</span>
                      <span className="text-xl font-black text-rose-500 tracking-tight font-mono">
                        ₹{finalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <button
                      onClick={onOpenBooking}
                      className="flex items-center gap-1.5 rounded-lg bg-rose-500/5 hover:bg-[#e11d48] text-slate-100 hover:text-white px-3 py-1.5 text-xs font-extrabold transition border border-rose-500/10 cursor-pointer"
                    >
                      Book Page
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* Advisory & Transparent billing guarantee */}
      <div className="mt-10 bg-slate-900/40 p-5 rounded-2xl border border-slate-900 flex flex-col sm:flex-row gap-5 items-start">
        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
          <Info className="h-5 w-5" />
        </div>
        <div className="space-y-1 text-xs">
          <h5 className="font-bold text-slate-300">Handbook Rate Execution Terms</h5>
          <p className="text-slate-450 text-slate-400 leading-relaxed font-sans mt-1">
            Standard schedule prices indicated herein form standard mechanical labour costs reference 2022(A). 
            All genuine Mopar/OEM components, engine lubricants, and fluids consumed during repair are invoiced strictly at actual manufacturer retail pricing. Taxes are charged extra as applicable.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
            <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-500" /> Genuine Parts Support</span>
            <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-500" /> Digital Timing Jigs</span>
            <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-500" /> 100% Billing Transparency</span>
          </div>
        </div>
      </div>

    </div>
  );
}
