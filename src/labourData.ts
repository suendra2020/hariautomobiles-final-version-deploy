/**
 * Hari Automobiles - Standardised Labour Charges Database
 * Derived from the official Version 2022 (A) reference schedule.
 * All occurrences of Bosch have been updated to Hari Automobiles.
 */

export interface VehicleModelMapping {
  group: string; // "1.1", "1.2", "2.1", "2.2", "3.1", "3.2", "4.1", "4.2"
  category: "Hatchback" | "Sedan" | "MUV/SUV" | "Luxury" | "Premium";
  title: string;
  models: string[];
}

export const VEHICLE_GROUPS: VehicleModelMapping[] = [
  {
    group: "1.1",
    category: "Hatchback",
    title: "1.1 Entry Hatchbacks",
    models: [
      "Maruti 800", "Maruti Omni", "Maruti Eeco", "Maruti Alto", "Maruti Zen", 
      "Maruti Zen Estilo", "Maruti Wagon R", "Maruti A Star", "Maruti Alto 800", 
      "Maruti Celerio", "Hyundai Eon", "Chevrolet Spark", "Chevrolet Beat", 
      "Chevrolet Aveo UVA", "Tata Nano", "Nissan Datsun Go", "Renault Kwid", 
      "Fiat Palio"
    ]
  },
  {
    group: "1.2",
    category: "Hatchback",
    title: "1.2 Regular Hatchbacks",
    models: [
      "Maruti Swift", "Maruti Ritz", "Maruti Baleno (New)", "Maruti Versa", 
      "Hyundai Santro", "Hyundai i10", "Hyundai Grand i10", "Hyundai Grand i10 Neos", 
      "Hyundai i20", "Hyundai Elite i20", "Hyundai Aura", "Hyundai Venue", 
      "Chevrolet Sail UVA", "Tata Indica", "Tata Indica Vista", "Tata Tiago", 
      "Tata Bolt", "Tata Xenon", "Honda Brio", "Honda Jazz", "Toyota Etios Liva", 
      "Toyota Etios Cross", "Toyota Glanza", "Renault Pulse", "Renault Triber", 
      "Ford Figo", "Ford Fusion", "Fiat Punto", "Nissan Micra", "Mahindra Verito Vibe", 
      "Skoda Fabia", "VW Polo"
    ]
  },
  {
    group: "2.1",
    category: "Sedan",
    title: "2.1 Entry Sedans",
    models: [
      "Maruti Swift Dzire", "Maruti Esteem", "Maruti Kizashi", "Hyundai Accent", 
      "Hyundai Xcent", "Hyundai Verna", "Hyundai Aura", "Tata Indigo", 
      "Tata Indigo Manza", "Tata Tigor", "Tata Zest", "Mahindra Logan", 
      "Mahindra Verito", "Honda City (Petrol)", "Honda Amaze (Petrol)", 
      "Honda Amaze (Diesel)", "Chevrolet Optra", "Chevrolet Optra Magnum", 
      "Chevrolet Aveo", "Chevrolet Sail", "Ford Ikon"
    ]
  },
  {
    group: "2.2",
    category: "Sedan",
    title: "2.2 Regular/Premium Sedans",
    models: [
      "Maruti SX4", "Maruti Ciaz", "Hyundai Elantra (All)", "Ford Fiesta", 
      "Ford Free Style", "Ford Aspire", "VW Ameo", "VW Vento", "Skoda Rapid", 
      "Skoda Laura", "Renault Scala", "Renault Fluence", "Honda City (Diesel)", 
      "Honda Civic", "Honda Accord", "Toyota Yaris", "Toyota Corolla Altis", 
      "Toyota Camry", "Toyota Corolla", "Fiat Linea", "Chevrolet Cruze"
    ]
  },
  {
    group: "3.1",
    category: "MUV/SUV",
    title: "3.1 Compact & Medium MUVs/SUVs",
    models: [
      "Maruti Vitara Brezza", "Maruti Gypsy", "Maruti Ertiga", "Mahindra Xylo", 
      "Mahindra Bolero", "Mahindra TUV300", "Mahindra KUV100", "Tata Nexon", 
      "Chevrolet Tavera", "Chevrolet Enjoy", "Toyota Qualis", "Toyota Urban Cruiser", 
      "Renault Lodgy", "Renault Kiger", "Honda WR-V", "Honda BR-V", "Honda Mobilio", 
      "Ford EcoSport", "Nissan Magnite"
    ]
  },
  {
    group: "3.2",
    category: "MUV/SUV",
    title: "3.2 Mid-Size & Premium SUVs",
    models: [
      "Maruti S-Cross", "Maruti Grand Vitara", "Hyundai Creta", "Hyundai Santa Fe", 
      "Hyundai Tucson", "Tata Safari", "Tata Aria", "Tata Hexa", "Mahindra Scorpio", 
      "Renault Duster", "Mahindra Marazzo", "Mahindra XUV500", "Mahindra Thar", 
      "Honda CR-V", "Toyota Innova", "Toyota Innova Crysta", "Toyota Fortuner", 
      "Nissan Terrano", "Fiat Jeep Compass", "Fiat Jeep Wrangler", "Fiat Aventura", 
      "Renault Captur", "Chevrolet Captiva"
    ]
  },
  {
    group: "4.1",
    category: "Luxury",
    title: "4.1 Executive & Large SUVs",
    models: [
      "Skoda Octavia", "Skoda Superb", "Skoda Yeti", "Skoda Kodiaq", 
      "VW Jetta", "VW Passat", "VW Tiguan", "Ford Endeavour", "Ford Mondeo", 
      "Mitsubishi Pajero", "Renault Koleos"
    ]
  },
  {
    group: "4.2",
    category: "Premium",
    title: "4.2 High-End Premium Imports",
    models: [
      "Mercedes-Benz (A, B, C, E, S, CLA, GLA, GLC, GLE, GLS class)", 
      "BMW (1, 2, 3, 5, 7, X1, X3, X5, X7 series)", 
      "Audi (A3, A4, A6, A8, Q3, Q5, Q7, Q8 series)", 
      "Range Rover Evoque / Sport / Vogue", "Land Rover Discovery / Defender", 
      "Jaguar XE / XF / XJ / F-Pace", "Porsche Macan / Cayenne / Panamera", 
      "Volvo V40 / S60 / S90 / XC40 / XC60 / XC90"
    ]
  }
];

export interface LaborRateItem {
  id: string;
  category: "Standard" | "Brake" | "Suspension" | "Steering" | "Under Chassis" | "Clutch" | "Cooling" | "Electrical" | "Engine" | "AC Services";
  service: string;
  rates: Record<string, number | "Man-Hour" | string>; // Maps "1.1" or "Group 1" etc. to premium price
}

export const MECHANICAL_LABOR_SCHEDULE: LaborRateItem[] = [
  // STANDARD SERVICES
  {
    id: "std-pkg",
    category: "Standard",
    service: "Paid Service Package (Oil, filters & 30-pt inspect setup)",
    rates: { "1.1": 1425, "1.2": 1725, "2.1": 2200, "2.2": 2240, "3.1": 2400, "3.2": 2640, "4.1": 4320, "4.2": 6000 }
  },
  {
    id: "std-diag",
    category: "Standard",
    service: "Diagnostic Scanning & OBD-II Error Reset",
    rates: { "1.1": 675, "1.2": 675, "2.1": 675, "2.2": 675, "3.1": 750, "3.2": 750, "4.1": 1500, "4.2": 1500 }
  },
  {
    id: "std-check",
    category: "Standard",
    service: "General Checkup (Comprehensive 30-Point Check)",
    rates: { "1.1": 440, "1.2": 440, "2.1": 750, "2.2": 750, "3.1": 830, "3.2": 830, "4.1": 1650, "4.2": 1650 }
  },
  {
    id: "std-oil",
    category: "Standard",
    service: "Engine Oil & Filter Replace Labour",
    rates: { "1.1": 330, "1.2": 330, "2.1": 450, "2.2": 450, "3.1": 550, "3.2": 550, "4.1": 750, "4.2": 850 }
  },
  {
    id: "std-brk-f",
    category: "Standard",
    service: "Brake Overhaul - Front Wheels Setup",
    rates: { "1.1": 250, "1.2": 250, "2.1": 375, "2.2": 375, "3.1": 550, "3.2": 550, "4.1": 1650, "4.2": 2200 }
  },
  {
    id: "std-brk-r",
    category: "Standard",
    service: "Brake Overhaul - Rear Wheels Setup",
    rates: { "1.1": 225, "1.2": 225, "2.1": 350, "2.2": 350, "3.1": 550, "3.2": 550, "4.1": 1800, "4.2": 2200 }
  },
  {
    id: "std-susp-o",
    category: "Standard",
    service: "Front Suspension Complete Overhaul",
    rates: { "1.1": 1760, "1.2": 1760, "2.1": 1980, "2.2": 2450, "3.1": 3300, "3.2": 3300, "4.1": "Man-Hour", "4.2": "Man-Hour" }
  },
  {
    id: "std-ac-gas",
    category: "Standard",
    service: "AC Gas Recharging & Leakage Diagnostic",
    rates: { "1.1": 1750, "1.2": 1750, "2.1": 1999, "2.2": 2450, "3.1": 2750, "3.2": 2750, "4.1": 3250, "4.2": 3500 }
  },
  {
    id: "std-align",
    category: "Standard",
    service: "Wheel Alignment & Toe Adjustment",
    rates: { "1.1": 440, "1.2": 440, "2.1": 550, "2.2": 550, "3.1": 750, "3.2": 750, "4.1": 1650, "4.2": 2200 }
  },
  {
    id: "std-bal",
    category: "Standard",
    service: "Wheel Balancing (Per wheel base, weights extra)",
    rates: { "1.1": 90, "1.2": 100, "2.1": 90, "2.2": 100, "3.1": 100, "3.2": 100, "4.1": 150, "4.2": 150 }
  },
  {
    id: "std-wash",
    category: "Standard",
    service: "Washing, Vacuuming and Internal Cleaning",
    rates: { "1.1": 500, "1.2": 500, "2.1": 500, "2.2": 500, "3.1": 750, "3.2": 750, "4.1": 1000, "4.2": 1000 }
  },

  // BRAKE SERVICES
  {
    id: "brk-pads",
    category: "Brake",
    service: "Brake Pad Replacement (Front Pair Set)",
    rates: { "1.1": 390, "1.2": 425, "2.1": 550, "2.2": 625, "3.1": 770, "3.2": 770, "4.1": 1650, "4.2": 1850 }
  },
  {
    id: "brk-disc",
    category: "Brake",
    service: "Brake Disc Replacement / Turning (Each)",
    rates: { "1.1": 290, "1.2": 375, "2.1": 575, "2.2": 575, "3.1": 850, "3.2": 950, "4.1": 1200, "4.2": 1200 }
  },
  {
    id: "brk-pin",
    category: "Brake",
    service: "Caliper Slider Pin Replace & Lubricate (Per Side)",
    rates: { "1.1": 250, "1.2": 250, "2.1": 350, "2.2": 375, "3.1": 550, "3.2": 650, "4.1": 950, "4.2": 1250 }
  },
  {
    id: "brk-caliper-assy",
    category: "Brake",
    service: "Brake Caliper Assembly Overhaul / Replacement (Each)",
    rates: { "1.1": 650, "1.2": 750, "2.1": 850, "2.2": 925, "3.1": 1050, "3.2": 1050, "4.1": 1150, "4.2": 3100 }
  },
  {
    id: "brk-wheel-cylinder",
    category: "Brake",
    service: "Drum Brake Wheel Cylinder Change (System Bleed Extra)",
    rates: { "1.1": 300, "1.2": 350, "2.1": 450, "2.2": 525, "3.1": 650, "3.2": 650, "4.1": 1200, "4.2": "Man-Hour" }
  },
  {
    id: "brk-liner",
    category: "Brake",
    service: "Rear Brake Shoer/Liner Replacement (Set of 2)",
    rates: { "1.1": 550, "1.2": 650, "2.1": 730, "2.2": 820, "3.1": 1050, "3.2": 1050, "4.1": 1950, "4.2": "Man-Hour" }
  },
  {
    id: "brk-cable",
    category: "Brake",
    service: "Parking / Hand Brake Cable Replacement",
    rates: { "1.1": 475, "1.2": 575, "2.1": 750, "2.2": 900, "3.1": 1250, "3.2": 1250, "4.1": 1500, "4.2": "Man-Hour" }
  },
  {
    id: "brk-master-cy",
    category: "Brake",
    service: "Brake Tandem Master Cylinder Replacement",
    rates: { "1.1": 750, "1.2": 850, "2.1": 850, "2.2": 970, "3.1": 1250, "3.2": 1250, "4.1": 1350, "4.2": "Man-Hour" }
  },
  {
    id: "brk-booster",
    category: "Brake",
    service: "Brake Vacuum Power Booster Replacement",
    rates: { "1.1": 1350, "1.2": 1450, "2.1": 1050, "2.2": 1350, "3.1": 1750, "3.2": 1850, "4.1": 2450, "4.2": "Man-Hour" }
  },

  // SUSPENSION SERVICES
  {
    id: "susp-link-rod",
    category: "Suspension",
    service: "Stabilizer Link Rod Replacement (Each)",
    rates: { "1.1": 180, "1.2": 225, "2.1": 245, "2.2": 300, "3.1": 350, "3.2": 375, "4.1": 450, "4.2": "Man-Hour" }
  },
  {
    id: "susp-tie-rod",
    category: "Suspension",
    service: "Steering Tie Rod End Replacement (Each)",
    rates: { "1.1": 280, "1.2": 350, "2.1": 410, "2.2": 490, "3.1": 675, "3.2": 750, "4.1": 850, "4.2": "Man-Hour" }
  },
  {
    id: "susp-lower-arm",
    category: "Suspension",
    service: "Suspension Lower Control Arm / Wishbone Replace (Each)",
    rates: { "1.1": 300, "1.2": 350, "2.1": 425, "2.2": 490, "3.1": 675, "3.2": 750, "4.1": 1200, "4.2": "Man-Hour" }
  },
  {
    id: "susp-strut",
    category: "Suspension",
    service: "Front Suspension Strut/Shock Absorber Replace (Each)",
    rates: { "1.1": 375, "1.2": 475, "2.1": 650, "2.2": 750, "3.1": 950, "3.2": 950, "4.1": 1450, "4.2": "Man-Hour" }
  },
  {
    id: "susp-strut-mount",
    category: "Suspension",
    service: "Strut Mounting Bush / Bearing Replacement (Each)",
    rates: { "1.1": 250, "1.2": 350, "2.1": 425, "2.2": 560, "3.1": 1100, "3.2": 1100, "4.1": 1750, "4.2": "Man-Hour" }
  },
  {
    id: "susp-rear-shock",
    category: "Suspension",
    service: "Rear Strut / Shock Absorber Replacement (Each)",
    rates: { "1.1": 250, "1.2": 330, "2.1": 425, "2.2": 550, "3.1": 650, "3.2": 650, "4.1": 775, "4.2": "Man-Hour" }
  },
  {
    id: "susp-wheel-bearing",
    category: "Suspension",
    service: "Front Wheel Bearing Replace (Hydraulic Press Charge Extra)",
    rates: { "1.1": 510, "1.2": 625, "2.1": 650, "2.2": 670, "3.1": 1050, "3.2": 1050, "4.1": 2250, "4.2": "Man-Hour" }
  },

  // CLUTCH, AXLE & STEERING
  {
    id: "cl-mc",
    category: "Clutch",
    service: "Clutch Master Cylinder Replacement (Bleeding Extra)",
    rates: { "1.1": 450, "1.2": 575, "2.1": 580, "2.2": 750, "3.1": 1450, "3.2": 1450, "4.1": 2500, "4.2": "Man-Hour" }
  },
  {
    id: "cl-sc",
    category: "Clutch",
    service: "Clutch Slave Cylinder Replacement / Internal Release",
    rates: { "1.1": 550, "1.2": 580, "2.1": 525, "2.2": 750, "3.1": 4150, "3.2": 4150, "4.1": 4650, "4.2": "Man-Hour" }
  },
  {
    id: "cl-assy",
    category: "Clutch",
    service: "Clutch Plate, Pressure Plate & Release Bearing Overhaul",
    rates: { "1.1": 2200, "1.2": 2850, "2.1": 3100, "2.2": 3550, "3.1": 4150, "3.2": 4150, "4.1": 4650, "4.2": "Man-Hour" }
  },
  {
    id: "cl-flywheel",
    category: "Clutch",
    service: "Engine Flywheel Replacement / Dual Mass Resurfacing",
    rates: { "1.1": 600, "1.2": 800, "2.1": 800, "2.2": 850, "3.1": 980, "3.2": 1000, "4.1": 1450, "4.2": "Man-Hour" }
  },
  {
    id: "cl-gearbox",
    category: "Clutch",
    service: "Manual Transmission Gear Box Removal and Refitment",
    rates: { "1.1": 1500, "1.2": 1900, "2.1": 2200, "2.2": 2450, "3.1": 2650, "3.2": 2650, "4.1": 2850, "4.2": "Man-Hour" }
  },
  {
    id: "cl-drive-shaft",
    category: "Clutch",
    service: "CV Drive Shaft Replacement (Per Side Setup)",
    rates: { "1.1": 480, "1.2": 550, "2.1": 780, "2.2": 930, "3.1": 1050, "3.2": 1050, "4.1": 1550, "4.2": "Man-Hour" }
  },

  // STEERING & STEERING RACK
  {
    id: "str-rack",
    category: "Steering",
    service: "Power / Manual Steering Gearbox Rack Replacement",
    rates: { "1.1": 1250, "1.2": 2250, "2.1": 1800, "2.2": 2400, "3.1": 2650, "3.2": 2800, "4.1": 3250, "4.2": "Man-Hour" }
  },
  {
    id: "str-column",
    category: "Steering",
    service: "Steering Column Column Assembly Replacement",
    rates: { "1.1": 950, "1.2": 1100, "2.1": 950, "2.2": 1200, "3.1": 1350, "3.2": 1350, "4.1": 2600, "4.2": "Man-Hour" }
  },
  {
    id: "str-pump",
    category: "Steering",
    service: "Hydraulic Power Steering Pump Replacement",
    rates: { "1.1": 750, "1.2": 875, "2.1": 1050, "2.2": 1350, "3.1": 1450, "3.2": 1500, "4.1": 1650, "4.2": "Man-Hour" }
  },

  // COOLING SYSTEM
  {
    id: "cool-radiator",
    category: "Cooling",
    service: "Engine Coolant Radiator Assembly Replacement",
    rates: { "1.1": 650, "1.2": 650, "2.1": 875, "2.2": 1050, "3.1": 1050, "3.2": 1050, "4.1": 1850, "4.2": "Man-Hour" }
  },
  {
    id: "cool-fan",
    category: "Cooling",
    service: "Radiator Electric Cooling Fan Replacement",
    rates: { "1.1": 550, "1.2": 550, "2.1": 950, "2.2": 1250, "3.1": 1350, "3.2": 1350, "4.1": 1450, "4.2": "Man-Hour" }
  },
  {
    id: "cool-thermostat",
    category: "Cooling",
    service: "Thermostat Valve & Housing Replacement",
    rates: { "1.1": 375, "1.2": 450, "2.1": 575, "2.2": 725, "3.1": 790, "3.2": 790, "4.1": 950, "4.2": "Man-Hour" }
  },

  // ELECTRICAL SERVICES
  {
    id: "ele-horn",
    category: "Electrical",
    service: "Dual Horn Installation (Including Bumper R/R & Relays)",
    rates: { "1.1": 475, "1.2": 580, "2.1": 575, "2.2": 680, "3.1": 750, "3.2": 850, "4.1": 1850, "4.2": "Man-Hour" }
  },
  {
    id: "ele-alternator",
    category: "Electrical",
    service: "Alternator Assembly Charging Replacement",
    rates: { "1.1": 475, "1.2": 550, "2.1": 740, "2.2": 750, "3.1": 850, "3.2": 850, "4.1": 1550, "4.2": "Man-Hour" }
  },
  {
    id: "ele-starter",
    category: "Electrical",
    service: "Starter Motor Assembly Demount & Replacement",
    rates: { "1.1": 450, "1.2": 550, "2.1": 650, "2.2": 775, "3.1": 850, "3.2": 850, "4.1": 1550, "4.2": "Man-Hour" }
  },
  {
    id: "ele-ecu",
    category: "Electrical",
    service: "Electronic Control Unit (Engine ECU) Replacement & Flash",
    rates: { "1.1": 660, "1.2": 660, "2.1": 830, "2.2": 830, "3.1": 1320, "3.2": 1320, "4.1": 2300, "4.2": "Man-Hour" }
  },

  // ENGINE REPAIRS
  {
    id: "eng-timing-belt",
    category: "Engine",
    service: "Engine Valve Timing Belt Replacement",
    rates: { "1.1": 750, "1.2": 1050, "2.1": 1250, "2.2": 1750, "3.1": 1850, "3.2": 1950, "4.1": 2850, "4.2": "Man-Hour" }
  },
  {
    id: "eng-timing-chain",
    category: "Engine",
    service: "Precision Valve Timing Chain Overhaul (Engine R/R)",
    rates: { "1.1": 2200, "1.2": 2550, "2.1": 3750, "2.2": 4050, "3.1": 4250, "3.2": 4500, "4.1": 5500, "4.2": "Man-Hour" }
  },
  {
    id: "eng-oil-seal",
    category: "Engine",
    service: "Crankshaft Rear Main Oil Oil Seal (Includes Clutch R/R)",
    rates: { "1.1": 2550, "1.2": 3500, "2.1": 3800, "2.2": 4100, "3.1": 4550, "3.2": 4650, "4.1": 5500, "4.2": "Man-Hour" }
  },
  {
    id: "eng-overhaul-petrol",
    category: "Engine",
    service: "Complete Petrol Engine Blueprint Overhaul & Build",
    rates: { "1.1": 7950, "1.2": 8990, "2.1": 9500, "2.2": 10990, "3.1": 12500, "3.2": 13500, "4.1": 16500, "4.2": "Man-Hour" }
  },
  {
    id: "eng-overhaul-diesel",
    category: "Engine",
    service: "Complete Diesel CRDi Turbodiesel Engine Mechanical Overhaul",
    rates: { "1.1": 8200, "1.2": 9500, "2.1": 10990, "2.2": 13500, "3.1": 15000, "3.2": 16500, "4.1": 18000, "4.2": "Man-Hour" }
  },

  // AC SERVICES
  {
    id: "ac-lvl1",
    category: "AC Services",
    service: "AC System Service Level 1 (Diagnostic + Refrigerant Top-up)",
    rates: { "1.1": 1750, "1.2": 2050, "2.1": 1999, "2.2": 2450, "3.1": 2750, "3.2": 2750, "4.1": 3250, "4.2": 3500 }
  },
  {
    id: "ac-lvl2",
    category: "AC Services",
    service: "AC Service Level 2 (Level 1 + Compressor Assembly Replace)",
    rates: { "1.1": 2350, "1.2": 2350, "2.1": 2750, "2.2": 2750, "3.1": 3550, "3.2": 2750, "4.1": 4750, "4.2": "Man-Hour" }
  },
  {
    id: "ac-lvl4",
    category: "AC Services",
    service: "AC Service Level 4 (Evaporator / Cooling Coil + Dashboard R/R)",
    rates: { "1.1": 2750, "1.2": 3950, "2.1": 3150, "2.2": 3500, "3.1": 3500, "3.2": 3500, "4.1": 3500, "4.2": "Man-Hour" }
  }
];

export interface PaintPanelItem {
  panel: string;
  rates: Record<string, { solid?: number; metallic?: number; pearl?: number }>;
}

export const PAINTING_LABOR_SCHEDULE: PaintPanelItem[] = [
  {
    panel: "Engine Hood / Bonnet",
    rates: {
      "1.1": { solid: 3677, metallic: 4689, pearl: 4954 },
      "1.2": { solid: 5018, metallic: 5712, pearl: 6033 },
      "2.1": { solid: 5223, metallic: 6238, pearl: 6722 },
      "2.2": { solid: 7016, metallic: 7070, pearl: 7982 },
      "3.1": { solid: 7164, metallic: 7731, pearl: 8259 },
      "3.2": { solid: 7464, metallic: 8192, pearl: 9193 },
      "4.1": { solid: 9658, metallic: 9838, pearl: 24164 }
    }
  },
  {
    panel: "Fender LH / RH (Denting Extra)",
    rates: {
      "1.1": { solid: 2691, metallic: 3408, pearl: 3634 },
      "1.2": { solid: 3301, metallic: 3811, pearl: 4151 },
      "2.1": { solid: 3492, metallic: 4131, pearl: 4498 },
      "2.2": { solid: 4511, metallic: 4900, pearl: 5705 },
      "3.1": { solid: 5329, metallic: 5618, pearl: 6065 },
      "3.2": { solid: 5330, metallic: 5731, pearl: 6136 },
      "4.1": { solid: 6435, metallic: 7315, pearl: 15883 }
    }
  },
  {
    panel: "Front Door LH / RH (Individual)",
    rates: {
      "1.1": { solid: 3707, metallic: 4632, pearl: 4821 },
      "1.2": { solid: 4713, metallic: 5420, pearl: 5752 },
      "2.1": { solid: 4794, metallic: 5661, pearl: 6090 },
      "2.2": { solid: 5927, metallic: 6340, pearl: 7547 },
      "3.1": { solid: 6044, metallic: 6818, pearl: 7918 },
      "3.2": { solid: 6314, metallic: 7373, pearl: 7297 },
      "4.1": { solid: 8332, metallic: 8854, pearl: 19220 }
    }
  },
  {
    panel: "Rear Door LH / RH (Individual)",
    rates: {
      "1.1": { solid: 3538, metallic: 4510, pearl: 4755 },
      "1.2": { solid: 4626, metallic: 5315, pearl: 5560 },
      "2.1": { solid: 4681, metallic: 5530, pearl: 5907 },
      "2.2": { solid: 5948, metallic: 6321, pearl: 7512 },
      "3.1": { solid: 6044, metallic: 6828, pearl: 7918 },
      "3.2": { solid: 6046, metallic: 7373, pearl: 8228 },
      "4.1": { solid: 8208, metallic: 8854, pearl: 19142 }
    }
  },
  {
    panel: "Tail Gate / Boot Door",
    rates: {
      "1.1": { solid: 3564, metallic: 4545, pearl: 4678 },
      "1.2": { solid: 4761, metallic: 5589, pearl: 5900 },
      "2.1": { solid: 4655, metallic: 5793, pearl: 6092 },
      "2.2": { solid: 6825, metallic: 6171, pearl: 7616 },
      "3.1": { solid: 6062, metallic: 6852, pearl: 7208 },
      "3.2": { solid: 6441, metallic: 7897, pearl: 8721 },
      "4.1": { solid: 8526, metallic: 9538, pearl: 12502 }
    }
  },
  {
    panel: "Roof Panel",
    rates: {
      "1.1": { solid: 5349, metallic: 6773, pearl: 7498 },
      "1.2": { solid: 6260, metallic: 7783, pearl: 8255 },
      "2.1": { solid: 6880, metallic: 8066, pearl: 8096 },
      "2.2": { solid: 8210, metallic: 8377, pearl: 9144 },
      "3.1": { solid: 11423, metallic: 12530, pearl: 12861 },
      "3.2": { solid: 11608, metallic: 12009, pearl: 13201 },
      "4.1": { solid: 14170, metallic: 13798, pearl: 21569 }
    }
  },
  {
    panel: "Front Bumper Assembly",
    rates: {
      "1.1": { solid: 3734, metallic: 4726, pearl: 4983 },
      "1.2": { solid: 4552, metallic: 5149, pearl: 5574 },
      "2.1": { solid: 4776, metallic: 5303, pearl: 5993 },
      "2.2": { solid: 5040, metallic: 5577, pearl: 6135 },
      "3.1": { solid: 5787, metallic: 6695, pearl: 7801 },
      "3.2": { solid: 6152, metallic: 6872, pearl: 8080 },
      "4.1": { solid: 8596, metallic: 9313, pearl: 18806 }
    }
  },
  {
    panel: "Rear Bumper Assembly",
    rates: {
      "1.1": { solid: 3437, metallic: 4433, pearl: 4633 },
      "1.2": { solid: 4289, metallic: 4854, pearl: 5169 },
      "2.1": { solid: 4396, metallic: 5018, pearl: 5591 },
      "2.2": { solid: 4708, metallic: 5412, pearl: 6126 },
      "3.1": { solid: 5596, metallic: 6664, pearl: 7711 },
      "3.2": { solid: 6589, metallic: 6867, pearl: 8183 },
      "4.1": { solid: 8455, metallic: 8952, pearl: 19800 }
    }
  },
  {
    panel: "Full Body Same Colour (Complete Refinish)",
    rates: {
      "1.1": { solid: 34315, metallic: 43554, pearl: 45015 },
      "1.2": { solid: 46148, metallic: 51341, pearl: 55137 },
      "2.1": { solid: 49667, metallic: 57023, pearl: 60220 },
      "2.2": { solid: 60548, metallic: 64676, pearl: 79169 },
      "3.1": { solid: 63939, metallic: 66952, pearl: 70391 },
      "3.2": { solid: 69746, metallic: 83192, pearl: 91899 },
      "4.1": { solid: 102556, metallic: 103478, pearl: 283914 }
    }
  }
];
