import React, { useState } from 'react';
import { 
  Search, 
  Zap, 
  ArrowRightLeft,
  ArrowUp
} from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { transactionsLeaderboardData } from './data/transactions';
import { XIcon, TelegramIcon, DiscordIcon } from './icons/SocialIcons';

const LevelBadge = ({ level }: { level: string }) => {
  // Mapping levels to Tier numbers for consistency
  const getTier = (lvl: string) => {
    switch (lvl) {
      case 'Whale': return 'T5';
      case 'Diamond': return 'T4';
      case 'Platinum': return 'T3';
      case 'Gold': return 'T2';
      default: return 'T1';
    }
  };

  const tier = getTier(level);

  switch (level) {
    case 'Whale':
      return (
        <span className="flex items-center justify-center md:justify-start gap-1.5 px-1.5 md:px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] md:text-[11px] font-medium">
           <span className="hidden md:inline">🐋</span> 
           <span className="md:hidden">{tier}</span>
           <span className="hidden md:inline">Whale</span>
        </span>
      );
    case 'Diamond':
      return (
        <span className="flex items-center justify-center md:justify-start gap-1.5 px-1.5 md:px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] md:text-[11px] font-medium">
           <span className="hidden md:inline">💎</span>
           <span className="md:hidden">{tier}</span>
           <span className="hidden md:inline">Diamond</span>
        </span>
      );
    case 'Platinum':
      return (
        <span className="flex items-center justify-center md:justify-start gap-1.5 px-1.5 md:px-2.5 py-0.5 rounded-full bg-slate-300/10 text-slate-300 text-[10px] md:text-[11px] font-medium">
           <span className="hidden md:inline">💿</span>
           <span className="md:hidden">{tier}</span>
           <span className="hidden md:inline">Platinum</span>
        </span>
      );
    case 'Gold':
      return (
        <span className="flex items-center justify-center md:justify-start gap-1.5 px-1.5 md:px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] md:text-[11px] font-medium">
           <span className="hidden md:inline">🏆</span>
           <span className="md:hidden">{tier}</span>
           <span className="hidden md:inline">Gold</span>
        </span>
      );
    default:
      return (
        <span className="flex items-center justify-center md:justify-start gap-1.5 px-1.5 md:px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-400 text-[10px] md:text-[11px] font-medium">
           <span className="hidden md:inline">Member</span>
           <span className="md:hidden">{tier}</span>
        </span>
      );
  }
};

export const Leaderboard = () => {
  const [filter, setFilter] = useState('Team');
  const [season, setSeason] = useState('S1');

  return (
    <div className="h-full flex flex-col space-y-4 md:space-y-6">
      {/* Current Personal Info Card */}
      <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
         <GlassCard className="border-0 p-4 md:p-6 flex flex-col gap-6 bg-gradient-to-br from-purple-500/10 to-transparent shadow-lg">
            {/* Header & Season Selector */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div className="text-center md:text-left">
                   <h1 className="text-[28px] font-medium text-white tracking-tight mb-2">Current Team Info</h1>
                   <p className="text-neutral-400">Compete for the top spot and earn exclusive rewards.</p>
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

            {/* User Stats Data */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-8">
                    {/* User Info */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 flex items-center justify-center text-xs font-bold text-white shadow-inner">
                            JD
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-neutral-400 tracking-wider font-semibold">User</span>
                            <span className="text-sm font-bold text-white leading-tight">John_Doe</span>
                        </div>
                    </div>

                    <div className="w-px h-8 bg-white/10 hidden md:block"></div>

                    {/* Team Info */}
                    <div className="flex items-center gap-3">
                         <div className="flex flex-col items-center justify-center w-9 h-9 bg-[#384197]/20 rounded-[7px]">
                            <span className="text-[8px] text-[#A5B4FC] font-bold">Rank</span>
                            <span className="text-xs font-bold text-white">#42</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-neutral-400 tracking-wider font-semibold">Team</span>
                            <span className="text-sm font-bold text-white leading-tight">Alpha Squad</span>
                        </div>
                    </div>
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between w-full md:w-auto gap-2 md:gap-8 pt-3 md:pt-0 border-t md:border-t-0 border-white/5 md:border-0 mt-2 md:mt-0">
                    <div className="flex flex-col items-center md:items-end">
                        <span className="text-[10px] text-neutral-500 tracking-wider mb-0.5">Members</span>
                        <span className="text-sm font-medium text-neutral-200">128</span>
                    </div>
                    
                    <div className="w-px h-8 bg-white/10 hidden md:block"></div>

                    <div className="flex flex-col items-center md:items-end">
                        <span className="text-[10px] text-neutral-500 tracking-wider mb-0.5">Score</span>
                        <span className="text-sm font-bold text-white">452,190</span>
                    </div>

                    <div className="w-px h-8 bg-white/10 hidden md:block"></div>

                    <div className="flex flex-col items-center md:items-end">
                        <span className="text-[10px] text-neutral-500 tracking-wider mb-0.5">Contrib.</span>
                        <span className="text-sm font-bold text-[#C084FC]">12,450</span>
                    </div>

                    <div className="w-px h-8 bg-white/10 hidden md:block"></div>

                    <div className="flex flex-col items-center md:items-end group cursor-pointer">
                        <span className="text-[10px] text-neutral-500 tracking-wider mb-0.5 group-hover:text-white transition-colors">Invite</span>
                        <div className="flex items-center gap-1.5 group-active:scale-95 transition-transform">
                             <span className="text-sm font-bold text-white tracking-widest">8X92K</span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 group-hover:text-white transition-colors">
                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                             </svg>
                        </div>
                    </div>

                    <div className="w-px h-8 bg-white/10 hidden md:block"></div>

                    <div className="flex flex-col items-center md:items-end">
                         <span className="text-[10px] text-neutral-500 tracking-wider mb-0.5">Trend</span>
                         <div className="flex items-center gap-1 text-[#D946EF]">
                            <ArrowUp size={12} strokeWidth={3} />
                            <span className="text-sm font-bold">+2</span>
                         </div>
                    </div>
                </div>
            </div>
         </GlassCard>
      </div>
      
      {/* Filters & Search */}
      <div className="flex-none flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex overflow-x-auto pb-2 no-scrollbar gap-2">
            {['Team', 'Global'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                        filter === tab
                        ? 'bg-neutral-800 text-white shadow-lg'
                        : 'bg-transparent text-neutral-500 hover:text-white hover:bg-white/5'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>

        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
            <input 
                type="text" 
                placeholder="Search address..." 
                className="w-full md:w-64 bg-neutral-900/50 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all"
            />
        </div>
      </div>

      {/* Leaderboard List */}
      <GlassCard className="flex-1 min-h-0 overflow-hidden shadow-2xl flex flex-col rounded-2xl border-0">
        {/* Table Header */}
        <div className="flex-none grid grid-cols-12 gap-2 md:gap-4 p-3 md:p-5 text-xs md:text-sm font-semibold text-neutral-500 capitalize tracking-wider bg-white/5 rounded-t-[7px]">
            <div className="col-span-2 md:col-span-1 text-center">Rank</div>
            <div className="col-span-4 md:col-span-5">Address</div>
            <div className="col-span-4 md:col-span-3 text-left md:text-right">Points</div>
            <div className="col-span-2 md:col-span-3 text-right md:text-right">Estimated Rewards</div>
        </div>

        {/* Table Body */}
        <div className="flex-1 overflow-y-auto no-scrollbar divide-y divide-white/5">
            {transactionsLeaderboardData.map((user) => (
                <div key={user.rank} className="grid grid-cols-12 gap-2 md:gap-4 p-3 md:p-5 items-center hover:bg-white/5 transition-colors group cursor-pointer relative">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity ${
                        user.rank === 1 ? 'bg-purple-500' :
                        user.rank === 2 ? 'bg-slate-400' :
                        user.rank === 3 ? 'bg-indigo-500' :
                        'bg-neutral-500'
                    }`}></div>
                    
                    {/* Rank */}
                    <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            user.rank === 1 ? 'bg-purple-500 text-white' :
                            user.rank === 2 ? 'bg-slate-400 text-black' :
                            user.rank === 3 ? 'bg-indigo-500 text-white' :
                            'bg-white/5 text-neutral-400'
                        }`}>
                            {user.rank}
                        </div>
                    </div>

                    {/* User / Address */}
                    <div className="col-span-4 md:col-span-5 flex items-center gap-2 md:gap-4">
                        <div className="hidden md:block w-10 h-10 rounded-full bg-neutral-800 overflow-hidden relative">
                            <img src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${user.address}`} alt={user.address} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <div className="font-medium text-white flex items-center gap-2 text-sm">
                                <span className="md:hidden text-xs">{user.address.substring(0, 4)}...{user.address.substring(user.address.length - 3)}</span>
                                <span className="hidden md:inline">{user.address.substring(0, 6)}...{user.address.substring(user.address.length - 4)}</span>
                                {user.rank <= 3 && <Zap size={12} className={
                                    user.rank === 1 ? 'text-purple-500 fill-purple-500' :
                                    user.rank === 2 ? 'text-slate-400 fill-slate-400' :
                                    'text-indigo-500 fill-indigo-500'
                                } />}
                            </div>
                            <div className={`text-xs mt-0.5 font-medium hidden md:block ${
                                user.change.startsWith('+') ? 'text-[#D946EF]' : 
                                user.change.startsWith('-') ? 'text-[#818CF8]' : 'text-neutral-500'
                            }`}>
                                {user.change !== '0' ? user.change : '-'} {user.change !== '0' && 'positions'}
                            </div>
                        </div>
                    </div>

                    {/* Points */}
                    <div className="col-span-4 md:col-span-3 text-left md:text-right">
                        <div className="text-xs md:text-sm font-bold text-white tracking-tighter md:tracking-normal">
                            {user.points}
                        </div>
                        <div className="text-xs text-neutral-500 mt-0.5">PTS</div>
                    </div>

                    {/* Estimated Rewards */}
                    <div className="col-span-2 md:col-span-3 flex justify-end">
                        <span className="text-xs md:text-sm font-medium text-white">1 USD</span>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Footer Filler for scrolling feel */}
        <div className="flex-none p-4 bg-white/[0.02] flex justify-center">
            <button className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-1">
                View Top 100 <ArrowRightLeft size={10} />
            </button>
        </div>
      </GlassCard>
    </div>
  );
};
