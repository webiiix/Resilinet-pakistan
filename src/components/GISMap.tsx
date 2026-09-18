import React from 'react';
import { 
  Maximize2, 
  Layers, 
  Navigation, 
  MapPin, 
  Zap, 
  Droplets, 
  Activity,
  Satellite,
  Search,
  Plus,
  Minus
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

const cities = [
  { name: 'Karachi', x: '45%', y: '85%', risk: 'Low', type: 'flood' },
  { name: 'Lahore', x: '78%', y: '62%', risk: 'High', type: 'seismic' },
  { name: 'Islamabad', x: '72%', y: '48%', risk: 'Medium', type: 'seismic' },
  { name: 'Quetta', x: '35%', y: '68%', risk: 'Medium', type: 'drought' },
  { name: 'Peshawar', x: '65%', y: '45%', risk: 'High', type: 'flood' },
];

export const GISMap = () => {
  return (
    <div className="relative w-full h-full bg-[#0d1117] overflow-hidden rounded-2xl border border-border-dark grid-lines">
      {/* SVG Map Mockup */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 800 1000" className="w-[80%] h-[80%] opacity-40">
          <path 
            d="M400 100 L600 200 L750 400 L780 600 L700 800 L500 900 L300 850 L100 700 L50 450 L150 200 Z" 
            fill="none" 
            stroke="var(--color-electric-cyan)" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            className="animate-[pulse_4s_infinite]"
          />
          {/* Internal Regions */}
          <path d="M400 100 L450 300 L300 450" fill="none" stroke="rgba(0,194,255,0.1)" strokeWidth="1" />
          <path d="M600 200 L550 400 L700 500" fill="none" stroke="rgba(0,194,255,0.1)" strokeWidth="1" />
        </svg>
      </div>

      {/* Dynamic Markers */}
      {cities.map((city, idx) => (
        <motion.div 
          key={idx}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: idx * 0.1 }}
          style={{ left: city.x, top: city.y }}
          className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center">
            <div className={cn(
              "w-4 h-4 rounded-full border-2 border-white/50 z-10",
              city.risk === 'High' ? "bg-emergency-red" : city.risk === 'Medium' ? "bg-alert-amber" : "bg-safe-green"
            )} />
            <div className={cn(
              "absolute w-8 h-8 rounded-full animate-ping opacity-25",
              city.risk === 'High' ? "bg-emergency-red" : city.risk === 'Medium' ? "bg-alert-amber" : "bg-safe-green"
            )} />
            
            {/* Tooltip Label */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-panel-dark border border-border-dark rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <span className="font-bold uppercase tracking-widest">{city.name}</span>
              <div className="flex items-center gap-1 mt-0.5">
                <div className={cn("w-1.5 h-1.5 rounded-full", city.risk === 'High' ? "bg-emergency-red" : "bg-safe-green")} />
                <span className="text-slate-400 capitalize">{city.risk} Severity</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Map Controls */}
      <div className="absolute right-6 top-6 flex flex-col gap-2">
        <div className="flex flex-col bg-panel-dark/90 border border-border-dark rounded-lg overflow-hidden backdrop-blur-md">
          <button className="p-2.5 hover:bg-white/5 transition-colors border-b border-border-dark text-slate-400 group">
            <Plus size={18} className="group-hover:text-electric-cyan" />
          </button>
          <button className="p-2.5 hover:bg-white/5 transition-colors text-slate-400 group">
            <Minus size={18} className="group-hover:text-electric-cyan" />
          </button>
        </div>

        <button className="p-2.5 bg-panel-dark/90 border border-border-dark rounded-lg backdrop-blur-md text-slate-400 hover:text-electric-cyan transition-all">
          <Layers size={18} />
        </button>
        <button className="p-2.5 bg-panel-dark/90 border border-border-dark rounded-lg backdrop-blur-md text-slate-400 hover:text-electric-cyan transition-all">
          <Satellite size={18} />
        </button>
      </div>

      {/* Map Legend */}
      <div className="absolute left-6 bottom-6 command-panel p-4 rounded-xl min-w-[200px]">
        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Live intelligence</h4>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emergency-red shadow-[0_0_8px_#ff4d4f]" />
              <span className="text-slate-300">Severe Drought</span>
            </div>
            <span className="font-mono text-emergency-red">08 Areas</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-alert-amber shadow-[0_0_8px_#ffb020]" />
              <span className="text-slate-300">Active Flood Risk</span>
            </div>
            <span className="font-mono text-alert-amber">14 Areas</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-electric-cyan shadow-[0_0_8px_#00c2ff]" />
              <span className="text-slate-300">Monitored Zones</span>
            </div>
            <span className="font-mono text-electric-cyan">42 Areas</span>
          </div>
        </div>
      </div>

      {/* Navigation Overlay */}
      <div className="absolute bottom-6 right-6 flex gap-4">
        <div className="command-panel p-3 rounded-xl flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-panel-dark bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">
                DR{i}
              </div>
            ))}
          </div>
          <div className="h-4 w-px bg-border-dark" />
          <span className="text-[10px] font-bold text-electric-cyan tracking-widest uppercase">3 Drone Feeds Active</span>
        </div>
      </div>
    </div>
  );
};
