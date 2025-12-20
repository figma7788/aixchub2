import React, { useState, useEffect } from 'react';
import { SplineWrapper } from './SplineWrapper';
import { GlassCard } from './ui/GlassCard';
import { TrendingUp, TrendingDown, ArrowRight, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts@2.15.2';
import { Collaterals } from './Collaterals';
import { miningPriceData, miningRecentTrades, miningRoundsData } from './data/mining';

export const PredictionMarket = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'settlements'>('feed');
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 10));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative text-white">
      {/* Container */}
      <div className="relative z-10">
        
        {/* Header Section - More Structured */}
        <GlassCard className="relative h-64 flex flex-col justify-end gap-8 mb-2 overflow-hidden p-8 border-0">
          <div className="absolute inset-0">
            <SplineWrapper scene="https://prod.spline.design/ywxwbIpwDO5pPPSR/scene.splinecode" />
          </div>
          <div className="relative z-10 space-y-2 pointer-events-none mb-10">
            <h2 className="text-5xl font-bold text-white tracking-tight drop-shadow-lg">
               C10 Index <span className="text-neutral-400">Prediction</span>
            </h2>
            <p className="text-lg text-neutral-300 font-medium tracking-wide drop-shadow-md">
              Predict Trends. Capture Alpha.
            </p>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          
          {/* Left Column: Chart & Trade (8/12) */}
          <div className="lg:col-span-8 flex flex-col gap-2">
            
            {/* Main Chart Card */}
            <GlassCard className="overflow-hidden relative border-0">
               <div className="p-6 flex items-end justify-between">
                  <div>
                     <div className="text-neutral-500 text-sm mb-1 font-medium tracking-wide">Current Price</div>
                     <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-medium tracking-tight text-white tabular-nums drop-shadow-sm">745.98</span>
                        <span className="text-emerald-400 font-medium text-sm bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1 shadow-[0_0_10px_rgba(52,211,153,0.1)]">
                           <TrendingUp size={14} /> +4.2%
                        </span>
                     </div>
                  </div>
                  <div className="text-right hidden sm:block">
                     <div className="text-neutral-500 text-xs mb-1">Previous Round</div>
                     <div className="flex items-center justify-end gap-2">
                        <span className="text-neutral-400 text-sm">#8491</span>
                        <span className="px-1.5 py-0.5 bg-emerald-500/10 rounded text-[10px] font-bold text-emerald-400 capitalize tracking-wider shadow-[0_0_8px_rgba(52,211,153,0.1)]">Long Won</span>
                     </div>
                  </div>
               </div>

               <div className="h-[350px] w-full relative" style={{ minWidth: 0 }}>
                  <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                     <AreaChart data={miningPriceData}>
                        <defs>
                           <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#d4d4d8" stopOpacity={0.15}/>
                              <stop offset="95%" stopColor="#d4d4d8" stopOpacity={0}/>
                           </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />
                        <XAxis 
                           dataKey="time" 
                           stroke="#404040" 
                           fontSize={11} 
                           tickLine={false} 
                           axisLine={false}
                           dy={10}
                           minTickGap={80}
                        />
                        <YAxis 
                           orientation="right"
                           domain={['auto', 'auto']}
                           stroke="#404040"
                           fontSize={11}
                           tickLine={false} 
                           axisLine={false}
                           tickFormatter={(val) => `$${val.toLocaleString()}`}
                        />
                        <Tooltip 
                           contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                           itemStyle={{ color: '#fff' }}
                           cursor={{ stroke: '#333', strokeWidth: 1, strokeDasharray: '4 4' }}
                        />
                        <Area 
                           type="linear" 
                           dataKey="price" 
                           stroke="#d4d4d8" 
                           strokeWidth={2} 
                           fill="url(#colorPrice)" 
                           activeDot={{ r: 4, fill: '#fff', stroke: '#d4d4d8', strokeWidth: 2 }}
                        />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </GlassCard>

            {/* Trade Interface */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-1">
               <GlassCard className="h-full p-6 flex flex-col justify-between relative overflow-hidden group transition-all cursor-pointer border-0">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                     <TrendingUp className="text-emerald-500 w-12 h-12 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  </div>
                  <div>
                     <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xl font-bold tracking-tight tabular-nums ${timeLeft <= 3 ? 'text-rose-500 animate-pulse' : 'text-white'}`}>
                           00:{timeLeft.toString().padStart(2, '0')}
                        </span>
                        <span className="text-xs font-medium text-neutral-500">To Close</span>
                     </div>
                     <h3 className="text-[28px] font-medium text-white group-hover:text-emerald-400 transition-colors">Long Position</h3>
                     <p className="text-neutral-500 text-sm mt-1">Predict price increase in next round</p>
                  </div>
                  <div className="mt-6">
                     <div className="w-full py-3 bg-emerald-500/10 rounded-lg text-emerald-400 font-medium text-center group-hover:bg-emerald-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2">
                        Place Long <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                     </div>
                  </div>
               </GlassCard>

               <GlassCard className="h-full p-6 flex flex-col justify-between relative overflow-hidden group transition-all cursor-pointer border-0">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                     <TrendingDown className="text-rose-500 w-12 h-12 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]" />
                  </div>
                  <div>
                     <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xl font-bold tracking-tight tabular-nums ${timeLeft <= 3 ? 'text-rose-500 animate-pulse' : 'text-white'}`}>
                           00:{timeLeft.toString().padStart(2, '0')}
                        </span>
                        <span className="text-xs font-medium text-neutral-500">To Close</span>
                     </div>
                     <h3 className="text-[28px] font-medium text-white group-hover:text-rose-400 transition-colors">Short Position</h3>
                     <p className="text-neutral-500 text-sm mt-1">Predict price decrease in next round</p>
                  </div>
                  <div className="mt-6">
                     <div className="w-full py-3 bg-rose-500/10 rounded-lg text-rose-500 font-medium text-center group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all flex items-center justify-center gap-2">
                        Place Short <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                     </div>
                  </div>
               </GlassCard>
            </div>




          </div>

          {/* Right Column: Sidebar (4/12) */}
          <div className="lg:col-span-4 space-y-2">
            
            {/* Streak Status - Redesigned as "Mission Card" (Fintech Style) */}
            <GlassCard className="overflow-hidden relative border-0">
              
              {/* Top Row: Combo & Multiplier */}
              <div className="p-6 pb-2 flex items-center justify-between relative z-10">
                 <div className="flex items-center gap-5">
                    <span className="text-7xl font-medium text-white tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] font-[Zen_Dots] font-bold font-normal">5</span>
                    <div className="flex flex-col gap-1">
                       <span className="text-[24px] font-medium text-white capitalize shadow-emerald-500/20 leading-none">Combo</span>
                       <span className="text-xs text-neutral-500 capitalize tracking-wide">Win Streak</span>
                    </div>
                 </div>

                 {/* Circular Badge - Technical Style */}
                 <div className="flex flex-col items-end justify-between h-14 pl-6 border-l border-white/10">
                    <span className="text-[11px] text-neutral-500 font-medium capitalize tracking-widest">Multiplier</span>
                    <div className="flex items-baseline text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
                        <span className="text-[28px] font-medium leading-none">2.0</span>
                        <span className="text-lg font-medium ml-0.5">x</span>
                    </div>
                 </div>
              </div>

              {/* Middle Stats Row */}
              <div className="px-6 py-6 grid grid-cols-3 gap-0 relative z-10">
                 <div className="text-center">
                    <div className="text-xs font-medium text-neutral-600 capitalize mb-1.5">Next Payout</div>
                    <div className="text-xl font-medium text-white tracking-tight">+34</div>
                 </div>
                 <div className="text-center">
                    <div className="text-xs font-medium text-neutral-600 capitalize mb-1.5">Time Limit</div>
                    <div className="text-xl font-medium text-[#22d3ee] tracking-tight drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">27s</div>
                 </div>
                 <div className="text-center">
                    <div className="text-xs font-medium text-neutral-600 capitalize mb-1.5">Next Mult</div>
                    <div className="text-xl font-medium text-white tracking-tight">3.0x</div>
                 </div>
              </div>

              {/* Progress Bar Area */}
              <div className="px-6 pb-6 relative z-10">
                 <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden">
                    <div className="h-full bg-[#22d3ee] w-[75%] shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                 </div>
                 <div className="mt-3 flex items-center justify-between">
                     <div className="flex items-center gap-2 text-xs text-neutral-500 capitalize">
                        <Activity size={12} className="text-neutral-500" />
                        System Active
                     </div>
                     <div className="text-xs text-rose-500/80 capitalize">
                        Risk: Reset on Loss
                     </div>
                 </div>
              </div>
            </GlassCard>

            {/* Activity Tabs */}
            <GlassCard className="overflow-hidden flex flex-col h-[440px] border-0">
               <div className="flex shrink-0">
                  <button 
                    onClick={() => setActiveTab('feed')}
                    className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'feed' ? 'border-emerald-500 bg-emerald-500/5 text-white' : 'border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.01]'}`}
                  >
                    Live Feed
                  </button>
                  <button 
                    onClick={() => setActiveTab('settlements')}
                    className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'settlements' ? 'border-emerald-500 bg-emerald-500/5 text-white' : 'border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.01]'}`}
                  >
                    Settlements
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto">
                 {activeTab === 'feed' ? (
                   <div className="divide-y-0">
                      {miningRecentTrades.map((trade) => (
                         <div key={trade.id} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-default">
                            <div className="flex items-center gap-3">
                               <div className={`w-2 h-2 rounded-full ${trade.side === 'Long' ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]' : 'bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.5)]'}`}></div>
                               <div>
                                  <div className="text-sm text-white font-medium">{trade.user}</div>
                                  <div className="text-xs font-medium text-neutral-500">{trade.time}</div>
                               </div>
                            </div>
                            <div className="text-right">
                               <div className={`text-sm font-medium capitalize ${trade.side === 'Long' ? 'text-emerald-400' : 'text-rose-500'}`}>
                                  {trade.side}
                               </div>
                               <div className="text-xs font-medium text-neutral-500">{trade.amount}</div>
                            </div>
                         </div>
                      ))}
                   </div>
                 ) : (
                   <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                         <thead className="sticky top-0 bg-black z-10">
                            <tr className="bg-white/[0.02]">
                               <th className="px-4 py-2 text-[10px] capitalize tracking-widest text-neutral-500 font-medium">Round</th>
                               <th className="px-4 py-2 text-[9px] capitalize tracking-widest text-neutral-500 font-medium">Result</th>
                               <th className="px-4 py-2 text-[9px] capitalize tracking-widest text-neutral-500 font-medium text-right">Payout</th>
                            </tr>
                         </thead>
                         <tbody className="">
                            {miningRoundsData.map((row) => (
                               <tr key={row.id} className="hover:bg-white/[0.02] transition-colors group cursor-default">
                                  <td className="px-4 py-3 text-xs text-neutral-400 group-hover:text-white transition-colors">{row.id}</td>
                                  <td className="px-4 py-3">
                                     <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold capitalize tracking-wider ${
                                        row.res === 'Long' 
                                           ? 'bg-emerald-500/10 text-emerald-400' 
                                           : 'bg-rose-500/10 text-rose-500'
                                     }`}>
                                        {row.res === 'Long' ? <TrendingUp size={8} /> : <TrendingDown size={8} />}
                                        {row.res}
                                     </span>
                                  </td>
                                  <td className="px-4 py-3 text-xs text-amber-500 text-right">{row.payout}</td>
                               </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                 )}
               </div>
               <div className="p-3 text-center mt-auto shrink-0 border-t border-white/5">
                  <button className="text-xs text-neutral-500 hover:text-white transition-colors">
                    {activeTab === 'feed' ? 'View all history' : 'View all rounds'}
                  </button>
               </div>
            </GlassCard>

          </div>
        </div>

        <Collaterals />

      </div>
    </div>
  );
};