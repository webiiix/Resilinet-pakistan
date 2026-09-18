import React from 'react';
import { 
  Shield, 
  Activity, 
  Map as MapIcon, 
  Users, 
  Package, 
  FileText, 
  GraduationCap, 
  Settings, 
  Bell,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  alert?: boolean;
  onClick: () => void;
}

const NavItem = ({ icon: Icon, label, active, alert, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "group relative flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300",
      active 
        ? "bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/30" 
        : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
    )}
  >
    <Icon size={24} strokeWidth={active ? 2.5 : 2} />
    {alert && !active && (
      <span className="absolute top-3 right-3 w-2 h-2 bg-emergency-red rounded-full animate-pulse shadow-[0_0_8px_#ff4d4f]" />
    )}
    
    {/* Tooltip */}
    <div className="absolute left-16 px-2 py-1 bg-panel-dark border border-border-dark text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
      {label}
    </div>
  </button>
);

export const CommandSidebar = ({ currentView, setView }: { currentView: string, setView: (v: string) => void }) => {
  return (
    <aside className="w-20 h-screen flex flex-col items-center py-6 bg-panel-dark border-r border-border-dark z-50">
      {/* Brand Logo */}
      <div className="mb-10 relative">
        <div className="w-12 h-12 bg-electric-cyan/10 border border-electric-cyan/50 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,194,255,0.2)]">
          <Shield className="text-electric-cyan" size={28} strokeWidth={2.5} />
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emergency-red rounded-full flex items-center justify-center border-2 border-panel-dark">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* Primary Nav */}
      <nav className="flex flex-col gap-4 flex-grow">
        <NavItem 
          icon={Activity} 
          label="Command Center" 
          active={currentView === 'dashboard'} 
          onClick={() => setView('dashboard')}
        />
        <NavItem 
          icon={MapIcon} 
          label="Live Hazard Map" 
          active={currentView === 'map'} 
          onClick={() => setView('map')}
          alert
        />
        <NavItem 
          icon={Users} 
          label="Emergency Services" 
          active={currentView === 'services'} 
          onClick={() => setView('services')}
        />
        <NavItem 
          icon={Package} 
          label="Resource Finder" 
          active={currentView === 'resources'} 
          onClick={() => setView('resources')}
        />
        <NavItem 
          icon={FileText} 
          label="Community Reports" 
          active={currentView === 'reports'} 
          onClick={() => setView('reports')}
        />
        <NavItem 
          icon={GraduationCap} 
          label="Training & Prep" 
          active={currentView === 'training'} 
          onClick={() => setView('training')}
        />
      </nav>

      {/* Footer Nav */}
      <div className="flex flex-col gap-4 mt-auto">
        <NavItem icon={Bell} label="Notifications" onClick={() => {}} alert />
        <NavItem icon={Settings} label="System Config" onClick={() => {}} />
      </div>
    </aside>
  );
};
