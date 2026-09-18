import React from 'react';
import { 
  Search, 
  Wifi, 
  Clock, 
  Radio, 
  MapPin, 
  ChevronDown,
  Info,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

export const TopCommandBar = () => {
  const [missionState, setMissionState] = React.useState<'Standby' | 'Active' | 'Critical'>('Active');
  const currentTime = new Date().toLocaleTimeString('en-GB', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <header className="h-16 w-full bg-panel-dark/80 backdrop-blur-xl border-b border-border-dark flex items-center justify-between px-6 z-40">
      {/* Platform Title */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex flex-col">
          <h1 className="text-sm font-bold tracking-widest text-slate-400 uppercase font-mono">ResiliNet Pakistan</h1>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-electric-cyan rounded-full shadow-[0_0_8px_#00c2ff]" />
            <span className="text-[10px] text-electric-cyan font-mono tracking-tighter">FEDERAL RESPONSE PROTOCOL V4.2.1</span>
          </div>
        </div>
      </div>

      {/* Global Status Center */}
      <div className="flex items-center gap-8">
        {/* Mission Status Selector */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 bg-black/40 border border-border-dark rounded-full">
          <div className="flex items-center gap-2">
            <Radio size={14} className={cn(
              missionState === 'Critical' ? "text-emergency-red" : 
              missionState === 'Active' ? "text-alert-amber" : "text-safe-green"
            )} />
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Mission State:</span>
          </div>
          <select 
            value={missionState}
            onChange={(e) => setMissionState(e.target.value as any)}
            className="bg-transparent text-xs font-bold text-slate-100 outline-none cursor-pointer focus:text-electric-cyan transition-colors"
          >
            <option value="Standby">STANDBY (L1)</option>
            <option value="Active">ACTIVE MONITORING (L2)</option>
            <option value="Critical">EMERGENCY RESPONSE (L3)</option>
          </select>
          <ChevronDown size={14} className="text-slate-500" />
        </div>

        {/* Global Connectivity */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <Wifi size={14} className="text-safe-green" />
            <span className="text-[11px] font-mono">PDRN_UPLINK: ONLINE</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Clock size={14} className="text-electric-cyan" />
            <span className="text-[11px] font-mono uppercase">PKT {currentTime}</span>
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-electric-cyan transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Search geo-tags, alerts, or NGO ID..."
            className="w-64 bg-black/40 border border-border-dark rounded-lg py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/20 transition-all"
          />
        </div>
        
        <button className="p-2 bg-emergency-red/10 border border-emergency-red/30 text-emergency-red rounded-lg hover:bg-emergency-red hover:text-white transition-all group">
          <AlertTriangle size={18} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </header>
  );
};
