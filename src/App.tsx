import React from 'react';
import { 
  Bell, 
  MapPin, 
  Zap, 
  Droplets, 
  Activity,
  Satellite,
  Search,
  Plus,
  Minus,
  AlertTriangle,
  ChevronRight,
  Database,
  CloudLightning,
  ShieldCheck,
  Navigation,
  Wind,
  FileText,
  GraduationCap
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { CommandSidebar } from './components/CommandSidebar';
import { TopCommandBar } from './components/TopCommandBar';
import { NationalMetrics } from './components/NationalMetrics';
import { GISMap } from './components/GISMap';

type ViewType = 'dashboard' | 'map' | 'services' | 'resources' | 'reports' | 'training';

const AlertTicker = () => (
  <div className="bg-emergency-red/10 border-y border-emergency-red/20 py-2 px-6 overflow-hidden flex whitespace-nowrap">
    <div className="flex items-center gap-10 animate-marquee">
      {[1, 2, 3].map(i => (
        <div key={i} className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <AlertTriangle size={14} className="text-emergency-red" />
            <span className="text-[10px] font-bold text-emergency-red uppercase tracking-widest">Urgent Advisory:</span>
          </span>
          <span className="text-[10px] font-mono text-slate-300">INDUS BASIN WATER RISE DETECTED AT SUKKUR BARRAGE. EVACUATION PROTOCOL L2 INITIATED.</span>
          <span className="h-3 w-px bg-emergency-red/30" />
        </div>
      ))}
    </div>
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee { animation: marquee 30s linear infinite; }
    `}} />
  </div>
);

const SituationFeed = () => (
  <div className="command-panel flex flex-col h-full overflow-hidden">
    <div className="p-4 border-b border-border-dark flex items-center justify-between">
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Situation Feed</h3>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-safe-green rounded-full animate-pulse" />
        <span className="text-[10px] font-mono text-slate-500 uppercase">Live Updates</span>
      </div>
    </div>
    <div className="flex-grow overflow-y-auto p-4 space-y-4">
      {[
        { time: '14:24', status: 'critical', type: 'Flood', desc: 'Levee breach reported near Rahim Yar Khan.', location: 'South Punjab' },
        { time: '14:10', status: 'warning', type: 'Seismic', desc: 'Mag 3.2 tremor detected 40km NW of Quetta.', location: 'Balochistan' },
        { time: '13:55', status: 'info', type: 'SAR', desc: 'Team Alpha-6 successfully relocated 42 individuals.', location: 'Swat Valley' },
        { time: '13:40', status: 'success', type: 'Logistics', desc: 'NGO Bridge-Hope supplies reached camp "Green Valley".', location: 'Sindh' },
        { time: '13:12', status: 'warning', type: 'Weather', desc: 'Heavy precipitation forecast for next 6 hours.', location: 'Khyber Pakhtunkhwa' },
      ].map((item, idx) => (
        <div key={idx} className="flex gap-3 group">
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-mono text-slate-500 mb-1">{item.time}</span>
            <div className={cn(
              "w-px h-full bg-border-dark group-last:bg-transparent relative",
              "before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1.5 before:h-1.5 before:rounded-full",
              item.status === 'critical' ? "before:bg-emergency-red shadow-[0_0_8px_#ff4d4f]" : 
              item.status === 'warning' ? "before:bg-alert-amber" :
              item.status === 'success' ? "before:bg-safe-green" : "before:bg-electric-cyan"
            )} />
          </div>
          <div className="pb-4 flex-grow">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-tighter">{item.type} | {item.location}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
    <button className="w-full p-3 bg-white/5 border-t border-border-dark text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-electric-cyan transition-colors">
      View Archive Reports
    </button>
  </div>
);

const AIAnalysis = () => (
  <div className="command-panel p-4 h-full">
    <div className="flex items-center gap-2 mb-6">
      <div className="p-1.5 bg-electric-cyan/10 rounded-lg text-electric-cyan">
        <Database size={16} />
      </div>
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 leading-tight">Predictive AI Engine</h3>
        <span className="text-[10px] font-mono text-slate-500">KRONOS-7 ANALYTICS</span>
      </div>
    </div>

    <div className="space-y-6">
      <div className="p-4 bg-black/40 border border-border-dark rounded-xl">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Confidence Score</span>
          <span className="text-xs font-mono text-electric-cyan">94.2%</span>
        </div>
        <div className="h-1.5 w-full bg-border-dark rounded-full overflow-hidden">
          <div className="h-full bg-electric-cyan cyan-glow" style={{ width: '94.2%' }} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-emergency-red/10 border border-emergency-red/20 rounded-lg text-emergency-red">
            <CloudLightning size={16} />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Flood Delta Prediction</span>
              <span className="text-[10px] font-mono text-emergency-red">HIGH RISK</span>
            </div>
            <div className="h-1 w-full bg-border-dark rounded-full overflow-hidden">
              <div className="h-full bg-emergency-red" style={{ width: '85%' }} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-2 bg-safe-green/10 border border-safe-green/20 rounded-lg text-safe-green">
            <Wind size={16} />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Seismic Stability</span>
              <span className="text-[10px] font-mono text-safe-green">STABLE</span>
            </div>
            <div className="h-1 w-full bg-border-dark rounded-full overflow-hidden">
              <div className="h-full bg-safe-green" style={{ width: '12%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-border-dark">
        <div className="flex items-center gap-2 mb-2">
          <Satellite size={12} className="text-slate-500" />
          <span className="text-[10px] font-bold text-slate-500 uppercase">SAT-IMG Analysis</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-square rounded-lg bg-slate-800 flex items-center justify-center border border-border-dark shadow-inner">
             <span className="text-[8px] text-slate-500 font-mono">T-Minus 24h</span>
          </div>
          <div className="aspect-square rounded-lg bg-slate-800 flex items-center justify-center border border-border-dark shadow-inner overflow-hidden relative group">
             <div className="absolute inset-0 bg-gradient-to-tr from-emergency-red/20 to-transparent animate-pulse" />
             <span className="text-[8px] text-slate-300 font-mono relative z-10 font-bold">DELTA: DETECTED</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex-grow flex flex-col overflow-hidden"
  >
    <AlertTicker />
    <NationalMetrics />

    <div className="flex-grow grid grid-cols-12 gap-6 px-6 pb-6 overflow-hidden">
      {/* Central Threat Intelligence Map */}
      <div className="col-span-12 lg:col-span-6 xl:col-span-12 h-min xl:h-auto xl:row-span-1 xl:col-start-1 xl:order-1 order-2">
          {/* Mobile view map or small dashboard map */}
      </div>
      
      <div className="col-span-12 xl:col-span-7 h-full flex flex-col order-1 xl:order-1">
         <div className="flex-grow relative min-h-[400px]">
            <GISMap />
         </div>
      </div>

      {/* Right Panels */}
      <div className="col-span-12 lg:col-span-6 xl:col-span-5 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-6 order-3">
        <SituationFeed />
        <AIAnalysis />
      </div>
    </div>
  </motion.div>
);

const EmergencyServices = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex-grow overflow-auto p-6"
  >
    <div className="flex justify-between items-end mb-8">
      <div>
        <h2 className="text-2xl font-bold uppercase tracking-tight mb-1">Emergency Services Directory</h2>
        <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Verified Responders & Regional Infrastructure</p>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-panel-dark border border-border-dark rounded-lg text-xs font-bold hover:border-electric-cyan transition-all">FILTER: SINDH</button>
        <button className="px-4 py-2 bg-panel-dark border border-border-dark rounded-lg text-xs font-bold hover:border-electric-cyan transition-all">STATUS: ALL</button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="command-panel p-5 group hover:border-electric-cyan/40 transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-border-dark group-hover:bg-electric-cyan/10 transition-colors">
              <ShieldCheck className="text-slate-400 group-hover:text-electric-cyan" />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-mono text-slate-500 mb-1">CAPACITY</span>
              <span className="text-sm font-bold text-safe-green">82% Available</span>
            </div>
          </div>
          <h4 className="font-bold text-slate-100 mb-1">Regional Hospital - Sector-{i}</h4>
          <div className="flex items-center gap-2 mb-4">
             <MapPin size={12} className="text-slate-500" />
             <span className="text-[10px] text-slate-500 uppercase tracking-widest">Lahore, Punjab</span>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border-dark">
             <button className="px-3 py-2 bg-white/5 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">Protocol</button>
             <button className="px-3 py-2 bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan rounded text-[10px] font-bold uppercase tracking-widest hover:bg-electric-cyan hover:text-white transition-colors">Direct Link</button>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const ResourceFinder = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex-grow overflow-auto p-6"
  >
    <div className="mb-8">
      <h2 className="text-2xl font-bold uppercase tracking-tight mb-1">Citizen Resource Finder</h2>
      <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Nearby Shelter, Food, and Medical Assistance</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1 space-y-4">
        <div className="command-panel p-4">
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Active Filters</h4>
          <div className="space-y-2">
            {['Shelters', 'Medical Camps', 'Water Points', 'Food Hubs'].map(label => (
              <label key={label} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 border border-border-dark rounded bg-black flex items-center justify-center group-hover:border-electric-cyan transition-colors">
                  <div className="w-2 h-2 bg-electric-cyan rounded-sm opacity-0 group-hover:opacity-100" />
                </div>
                <span className="text-xs text-slate-400 group-hover:text-slate-200">{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: 'Model Shelter Alpha', type: 'Shelter', cap: '85%', dist: '2.4km' },
          { name: 'City Central Medical', type: 'Health', cap: '42%', dist: '0.8km' },
          { name: 'Indus Water Hub', type: 'Resources', cap: '95%', dist: '4.1km' },
          { name: 'Sector 4 Distribution', type: 'Food', cap: '12%', dist: '1.2km' },
        ].map((item, i) => (
          <div key={i} className="command-panel p-4 flex gap-4">
             <div className="w-16 h-16 bg-white/5 border border-border-dark rounded-xl flex items-center justify-center text-slate-500 shrink-0">
                <MapPin size={24} />
             </div>
             <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold">{item.name}</h4>
                  <span className="text-[9px] font-mono text-electric-cyan px-1.5 py-0.5 bg-electric-cyan/10 rounded">{item.dist}</span>
                </div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-3">{item.type}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-grow h-1 bg-border-dark rounded-full overflow-hidden">
                    <div className={cn(
                      "h-full",
                      parseInt(item.cap) > 80 ? "bg-emergency-red" : "bg-safe-green"
                    )} style={{ width: item.cap }} />
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 whitespace-nowrap">{item.cap} Occupied</span>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const TrainingPrep = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex-grow overflow-auto p-6"
  >
    <div className="mb-8">
      <h2 className="text-2xl font-bold uppercase tracking-tight mb-1">Training & Preparedness</h2>
      <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Public Safety Education & Simulations</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: 'Flood Survival Protocol', time: '15m', level: 'Beginner' },
        { title: 'First Aid Level 2', time: '45m', level: 'Advanced' },
        { title: 'Earthquake Action Plan', time: '10m', level: 'Beginner' },
        { title: 'Radio Communication', time: '30m', level: 'Intermediate' },
      ].map((item, i) => (
        <div key={i} className="command-panel overflow-hidden group cursor-pointer">
          <div className="aspect-video bg-slate-800 flex items-center justify-center relative border-b border-border-dark">
            <GraduationCap size={40} className="text-slate-600 group-hover:scale-110 group-hover:text-electric-cyan transition-all" />
            <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 rounded text-[9px] font-bold text-slate-400">{item.time}</div>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-slate-100 mb-1 group-hover:text-electric-cyan transition-colors">{item.title}</h4>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-slate-500 uppercase">{item.level}</span>
              <div className="w-1 h-1 rounded-full bg-border-dark" />
              <span className="text-[10px] font-bold text-electric-cyan uppercase tracking-widest">Launch Module</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  const [currentView, setCurrentView] = React.useState<ViewType>('dashboard');

  return (
    <div className="flex h-screen w-screen bg-bg-dark text-slate-100 overflow-hidden">
      <CommandSidebar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex flex-col flex-grow min-w-0">
        <TopCommandBar />
        
        <AnimatePresence mode="wait">
          {currentView === 'dashboard' && <Dashboard key="dashboard" />}
          {currentView === 'map' && <div key="map" className="flex-grow p-6 h-full overflow-hidden"><GISMap /></div>}
          {currentView === 'services' && <EmergencyServices key="services" />}
          {currentView === 'resources' && <ResourceFinder key="resources" />}
          {currentView === 'training' && <TrainingPrep key="training" />}
          {/* Add more views as needed */}
          {currentView === 'reports' && (
            <motion.div 
              key="reports-placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-grow flex flex-col items-center justify-center gap-4 text-slate-500"
            >
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-border-dark flex items-center justify-center animate-spin-slow">
                <FileText size={32} />
              </div>
              <div className="text-center">
                <p className="text-xs font-mono uppercase tracking-[0.5em] mb-2">Community Reporting Node</p>
                <p className="text-[10px] text-slate-600 uppercase font-bold tracking-widest">Initializing Geo-Tagging Protocol...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* SOS Floating Action (Visible when scrolled or special states) */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-emergency-red rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,77,79,0.4)] z-50 group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        <AlertTriangle size={28} className="relative z-10" />
        <div className="absolute inset-0 bg-white/20 animate-ping rounded-full" />
      </motion.button>
    </div>
  );
}
