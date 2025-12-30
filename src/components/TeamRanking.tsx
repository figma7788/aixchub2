import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Minus, Search, Crown, Flame } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { leaderboardData } from './data/leaderboard';

export const TeamRanking = () => {
  const [season, setSeason] = useState('S1');

  return (
    <div className="space-y-6 relative">
      {/* Combined Header & Stats Card */}
      <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
         <GlassCard className="mb-16 md:mb-0 border-0 p-4 md:p-6 flex flex-col gap-6 bg-gradient-to-br from-purple-500/10 to-transparent shadow-lg">
            {/* Header & Season Selector */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div className="text-center md:text-left">
                   <h1 className="text-[28px] font-medium text-white tracking-tight mb-2">Current Team Info</h1>
                   <p className="text-neutral-400">Compete for the top spot and earn exclusive allocation multipliers.</p>
                </div>
                <div className="hidden md:flex p-1 bg-neutral-900/50 rounded-full backdrop-blur-sm">
                  {['S1', 'Global', 'Weekly'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSeason(tab)}
                      className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                        season === tab
                          ? 'bg-white/10 text-white shadow-lg'
                          : 'text-neutral-500 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
            </div>

            {/* User Stats Data (Redesigned V3 - Borderless & Clean) */}
            <div className="relative rounded-2xl bg-gradient-to-r from-[#111111] to-[#0A0A0A] overflow-hidden shadow-2xl">
                {/* Subtle Top Shine */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30"></div>
                
                <div className="relative z-10 flex flex-col xl:flex-row p-6 xl:items-center gap-6 xl:gap-0">
                    {/* Left: Identity Section */}
                    <div className="flex items-center gap-8 xl:pr-10 xl:mr-10 xl:border-r border-white/5">
                         {/* User */}
                         <div className="flex items-center gap-4 group/user cursor-pointer">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-[7px] bg-[#1A1A1A] flex items-center justify-center text-sm font-bold text-neutral-300 group-hover/user:text-white transition-colors">
                                    JD
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-4 border-[#0F0F0F]"></div>
                            </div>
                            <div>
                                <div className="text-[10px] tracking-wider text-neutral-500 font-semibold mb-0.5">Player</div>
                                <div className="text-base font-bold text-white group-hover/user:text-purple-400 transition-colors">John_Doe</div>
                            </div>
                         </div>

                         {/* Team */}
                         <div className="flex items-center gap-4 group/team cursor-pointer">
                            <div className="w-10 h-10 rounded-[7px] bg-[#1A1A1A] flex items-center justify-center text-xs font-bold text-indigo-400">
                                #42
                            </div>
                            <div>
                                <div className="text-[10px] tracking-wider text-neutral-500 font-semibold mb-0.5">Squad</div>
                                <div className="text-base font-bold text-white group-hover/team:text-indigo-400 transition-colors">Alpha</div>
                            </div>
                         </div>
                    </div>

                    {/* Right: Stats Section */}
                    <div className="flex-grow grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4 items-start">
                         {/* Stat 3 (Members) */}
                         <div className="flex flex-col">
                            <span className="text-[10px] text-neutral-500 font-medium mb-1.5">Members</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-xl font-medium text-neutral-200">128</span>
                                <span className="text-sm text-neutral-600">/ 200</span>
                            </div>
                         </div>

                         {/* Stat 1 (Total Score) */}
                         <div className="flex flex-col">
                            <span className="text-[10px] text-neutral-500 font-medium mb-1.5">Total Score</span>
                            <span className="text-2xl font-medium text-white tracking-tight">452,190</span>
                         </div>

                         {/* Stat 2 (Contribution) */}
                         <div className="flex flex-col">
                            <span className="text-[10px] text-neutral-500 font-medium mb-1.5">Contribution</span>
                            <span className="text-2xl font-medium text-[#C084FC]">12.4K</span>
                         </div>

                         {/* Stat 4: Trend */}
                         <div className="flex flex-col">
                             <span className="text-[10px] text-neutral-500 font-medium mb-1.5">Trend</span>
                             <div className="flex items-center gap-2 text-[#D946EF]">
                                <ArrowUp size={14} strokeWidth={2.5} />
                                <span className="text-lg font-bold">+2</span>
                             </div>
                         </div>

                         {/* Action: Invite */}
                         <div className="col-span-2 md:col-span-1 md:justify-self-end mt-2 md:mt-0 self-center">
                             <button className="group relative flex items-center gap-3 pl-4 pr-2 py-2 bg-[#1A1A1A] hover:bg-[#222] transition-colors rounded-full overflow-hidden">
                                <span className="text-[10px] font-bold text-neutral-300 tracking-wider">Invite</span>
                                <div className="px-2 py-1 bg-white/5 rounded-full text-white text-xs font-mono group-hover:bg-white group-hover:text-black transition-colors">
                                    8X92K
                                </div>
                             </button>
                         </div>
                    </div>
                </div>
            </div>
         </GlassCard>
      </div>

      {/* Top 3 Podium Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end pt-4 pb-4">
        {/* 2nd Place */}
        <div className="order-2 md:order-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/50 to-transparent rounded-t-3xl -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <GlassCard className="flex flex-col items-center p-6 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-50"></div>
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 p-1 shadow-[0_0_20px_rgba(203,213,225,0.2)] mb-4 relative">
                    <div className="w-full h-full rounded-full bg-neutral-900 overflow-hidden flex items-center justify-center">
                        <span className="text-2xl font-bold text-slate-300">2nd</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-neutral-900 text-slate-300 text-xs font-bold px-2 py-1 rounded-md shadow-lg">
                        #2
                    </div>
                 </div>
                 <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-b from-white via-slate-300 to-slate-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(203,213,225,0.5)] mt-1 mb-1">
                    50,000 USDT
                  </div>
                 <div className="text-slate-400 text-xs mt-3 text-center font-medium max-w-[240px]">
                    Eligible to attend the <span className="text-lg italic font-bold text-slate-200">Los&nbsp;Angeles</span> awards ceremony
                 </div>
            </GlassCard>
        </div>

        {/* 1st Place */}
        <div className="order-1 md:order-2 relative z-10 -mt-10 md:-mt-0">
            <div className="absolute -inset-1 bg-gradient-to-b from-sky-700/30 to-transparent blur-xl rounded-[2rem]"></div>
            <GlassCard className="flex flex-col items-center p-8 bg-gradient-to-b from-sky-950/60 to-neutral-900/90 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(14,165,233,0.15)]">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-600 to-transparent opacity-50 shadow-[0_0_10px_#0284C7]"></div>
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-600/10 blur-[60px] rounded-full pointer-events-none"></div>
                 
                 <div className="absolute top-4 right-4">
                    <Crown className="text-sky-400 animate-pulse drop-shadow-[0_0_8px_rgba(14,165,233,0.4)]" size={24} />
                 </div>

                 <div className="w-28 h-28 rounded-full bg-gradient-to-br from-sky-300 via-sky-600 to-sky-900 p-1 shadow-[0_0_50px_rgba(14,165,233,0.25)] mb-6 relative">
                    <div className="w-full h-full rounded-full bg-neutral-900 overflow-hidden flex items-center justify-center relative shadow-inner">
                        <span className="text-4xl font-bold bg-gradient-to-b from-sky-300 via-sky-600 to-sky-900 bg-clip-text text-transparent drop-shadow-sm">1st</span>
                        <div className="absolute inset-0"></div>
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-400 to-sky-700 text-neutral-900 text-sm font-extrabold px-3 py-1 rounded-lg shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                        #1
                    </div>
                 </div>

                 <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-white via-sky-300 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(14,165,233,0.5)] mt-2 mb-2">
                    100,000 USDT
                 </div>
                 <div className="text-neutral-400 text-xs mt-3 text-center font-medium max-w-[240px]">
                    Eligible to attend the <span className="text-lg italic font-bold text-sky-400">Los&nbsp;Angeles</span> awards ceremony
                 </div>
            </GlassCard>
        </div>

        {/* 3rd Place */}
        <div className="order-3 relative group">
             <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/50 to-transparent rounded-t-3xl -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <GlassCard className="flex flex-col items-center p-6 relative overflow-hidden bg-[#384197]/10">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#384197] to-transparent opacity-50"></div>
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6366F1] to-[#384197] p-1 shadow-[0_0_20px_rgba(56,65,151,0.4)] mb-4 relative">
                    <div className="w-full h-full rounded-full bg-neutral-900 overflow-hidden flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#A5B4FC]">3rd</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-[#384197] text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg">
                        #3
                    </div>
                 </div>
                 <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-b from-white via-indigo-300 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] mt-1 mb-1">
                    30,000 USDT
                  </div>
                 <div className="hidden">
                    Eligible to attend 
                 </div>
            </GlassCard>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="sticky top-0 z-20 pt-4 pb-4 bg-black">
         <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
            <input 
                type="text" 
                placeholder="Search by username or wallet address..." 
                className="w-full bg-white/5 rounded-[7px] py-3 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:bg-white/10 transition-all"
            />
         </div>
      </div>

      {/* List Section */}
      <GlassCard className="overflow-hidden border-0 bg-neutral-900/80">
        <div className="min-w-full">
            <div className="grid grid-cols-12 gap-2 md:gap-4 p-4 text-sm font-semibold text-neutral-500 capitalize tracking-wider bg-white/5">
                <div className="col-span-2 md:col-span-1 text-center">Rank</div>
                <div className="col-span-5 md:col-span-3">Team Name</div>
                <div className="hidden md:block col-span-2 text-center">Members</div>
                <div className="col-span-5 md:col-span-2 text-right">Team Score</div>
                <div className="hidden md:block col-span-2 text-center">Invite Code</div>
                <div className="hidden md:block col-span-2 text-right">Trend</div>
            </div>
            
            <div className="divide-y divide-white/5">
                {leaderboardData.slice(3).map((user, index) => (
                    <div key={user.rank} className="grid grid-cols-12 gap-2 md:gap-4 p-4 items-center hover:bg-white/5 transition-colors group">
                        <div className="col-span-2 md:col-span-1 text-center text-neutral-400 font-medium group-hover:text-white">#{user.rank}</div>
                        <div className="col-span-5 md:col-span-3 flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${user.avatar} flex items-center justify-center text-[10px] font-bold text-white/80 shrink-0`}>
                                {user.username.substring(0, 2).toUpperCase()}
                            </div>
                            <div className="flex flex-col min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-neutral-200 group-hover:text-white transition-colors truncate">{user.username}</span>
                                    {user.rank <= 10 && <Flame size={14} className="text-[#A855F7] fill-[#A855F7]/20 shrink-0" />}
                                </div>
                                <div className="flex items-center gap-1 md:hidden opacity-80 mt-1">
                                    <div className="text-[10px] leading-none">
                                        <span className="text-neutral-500 font-semibold">Invite:</span>
                                        {" "}
                                        <span className="text-neutral-300 font-mono tracking-wider">8X92K</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500">
                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block col-span-2 text-center text-neutral-400">
                            {Math.floor(parseInt(user.score.replace(/,/g, '')) / 1000).toLocaleString()}
                        </div>
                        <div className="col-span-5 md:col-span-2 text-right text-neutral-300 font-medium">{user.score}</div>
                        <div className="hidden md:block col-span-2 text-center">
                            <button className="inline-flex items-center justify-center gap-1.5 text-xs bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white px-3 py-1.5 rounded-full transition-colors group">
                                <span className="tracking-wider">8X92K</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 group-hover:text-white transition-colors">
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden md:block col-span-2 text-right">
                            <div className="flex items-center justify-end gap-2">
                                {user.change === 'up' && <span className="text-[#D946EF] text-xs flex items-center gap-1"><ArrowUp size={12} /> +2</span>}
                                {user.change === 'down' && <span className="text-[#818CF8] text-xs flex items-center gap-1"><ArrowDown size={12} /> -1</span>}
                                {user.change === 'same' && <span className="text-neutral-600 text-xs flex items-center gap-1"><Minus size={12} /> -</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </GlassCard>
    </div>
  );
};