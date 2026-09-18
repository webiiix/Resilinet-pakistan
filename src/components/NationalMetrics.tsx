import React from 'react';
import { 
  AlertCircle, 
  Wind, 
  Droplets, 
  Activity, 
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Zap
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis, Tooltip } from 'recharts';

const data = [
  { name: '00:00', value: 400 },
  { name: '04:00', value: 300 },
  { name: '08:00', value: 600 },
  { name: '12:00', value: 800 },
  { name: '16:00', value: 500 },
  { name: '20:00', value: 900 },
  { name: '23:59', value: 1200 },
];

interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  trend?: { val: string; up: boolean };
  icon: React.ElementType;
  color: 'red' | 'amber' | 'green' | 'cyan';
  chart?: boolean;
}

const MetricCard = ({ label, value, unit, trend, icon: Icon, color, chart }: MetricCardProps) => {
  const accentClass = {
    red: "text-emergency-red",
    amber: "text-alert-amber",
    green: "text-safe-green",
    cyan: "text-electric-cyan"
  }[color];

  const bgClass = {
    red: "from-emergency-red/5 to-transparent",
    amber: "from-alert-amber/5 to-transparent",
    green: "from-safe-green/5 to-transparent",
    cyan: "from-electric-cyan/5 to-transparent"
  }[color];

  return (
    <div className={cn(
      "command-panel relative overflow-hidden group p-5 transition-all hover:border-slate-700",
      `bg-gradient-to-br ${bgClass}`
    )}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{label}</p>
          <div className="flex items-baseline gap-1">
            <h3 className={cn("text-3xl font-bold tracking-tighter", accentClass)}>{value}</h3>
            {unit && <span className="text-xs font-mono text-slate-500">{unit}</span>}
          </div>
        </div>
        <div className={cn("p-2 rounded-lg bg-black/40 border border-border-dark", accentClass)}>
          <Icon size={20} />
        </div>
      </div>

      {trend && (
        <div className="flex items-center gap-2 mb-4">
          <div className={cn(
            "flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded",
            trend.up ? "bg-emergency-red/10 text-emergency-red" : "bg-safe-green/10 text-safe-green"
          )}>
            {trend.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {trend.val}
          </div>
          <span className="text-[10px] text-slate-500 font-mono">VS PREV CYCLE</span>
        </div>
      )}

      {chart && (
        <div className="h-16 w-full mt-2 -mx-5 -mb-5 overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={`var(--color-${color === 'cyan' ? 'electric-cyan' : color === 'red' ? 'emergency-red' : color === 'amber' ? 'alert-amber' : 'safe-green'})`} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={`var(--color-${color === 'cyan' ? 'electric-cyan' : color === 'red' ? 'emergency-red' : color === 'amber' ? 'alert-amber' : 'safe-green'})`} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={`var(--color-${color === 'cyan' ? 'electric-cyan' : color === 'red' ? 'emergency-red' : color === 'amber' ? 'alert-amber' : 'safe-green'})`} 
                fillOpacity={1} 
                fill={`url(#grad-${color})`} 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export const NationalMetrics = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-6">
      <MetricCard 
        label="Active Incidents" 
        value="124" 
        trend={{ val: "+12%", up: true }}
        icon={AlertCircle} 
        color="red"
        chart
      />
      <MetricCard 
        label="Risk Index (Avg)" 
        value="6.4" 
        unit="MARI"
        trend={{ val: "-2%", up: false }}
        icon={Activity} 
        color="amber"
        chart
      />
      <MetricCard 
        label="Emergency Personnel" 
        value="12.8k" 
        trend={{ val: "+800", up: false }}
        icon={ShieldCheck} 
        color="cyan"
        chart
      />
      <MetricCard 
        label="Infrastructure Health" 
        value="92%" 
        trend={{ val: "Stable", up: false }}
        icon={Zap} 
        color="green"
        chart
      />
    </section>
  );
};
