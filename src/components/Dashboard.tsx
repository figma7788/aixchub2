import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SplineWrapper } from './SplineWrapper';
import { toast } from 'sonner@2.0.3';
import { leadersData, tierSystemData } from './data/dashboard';
import { XIcon, TelegramIcon, DiscordIcon } from './icons/SocialIcons';

export const Dashboard = () => {
  const handleCopy = (text: string) => {
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(text);
        toast.success('Copied to clipboard');
      } catch (err) {
        // Fallback for environments where clipboard API is blocked
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          toast.success('Copied to clipboard');
        } catch (e) {
          toast.error('Failed to copy to clipboard');
        }
        document.body.removeChild(textArea);
      }
    };
    copyToClipboard();
  };

  return (
    <div className="space-y-2">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="lg:col-span-2 space-y-2">
          {/* Total Balance Card with Premium Gradient & Noise */}
          <div className="relative rounded-[7px] p-8 overflow-hidden group shadow-2xl">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0 translate-x-[25%]">
               <SplineWrapper scene="https://prod.spline.design/DfNNbMNjdEfPINAJ/scene.splinecode" />
            </div>
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
            
            {/* Animated Glow Orb */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-600/10 blur-[120px] rounded-full -translate-y-1/4 translate-x-1/4 pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-neutral-800/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            


            <div className="relative z-10">
              <div className="text-neutral-400 text-base font-medium mb-2 tracking-wider capitalize opacity-80">Total Points</div>
              <div className="text-6xl font-semibold text-white tracking-tighter mb-6 drop-shadow-xl font-[Zen_Dots] font-bold">
                87,945
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 bg-[#C6AA84]/10 px-4 py-1.5 rounded-full backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-[#C6AA84] animate-pulse"></div>
                    <span className="text-[#C6AA84] text-sm font-semibold uppercase">Tier 5</span>
                </div>
                <button 
                  onClick={() => handleCopy('https://app.aixc.com/invite/AIXC-2025')}
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white px-3 py-1.5 rounded-full transition-all text-sm font-medium cursor-pointer active:scale-95 group"
                >
                  <span>Invite: AIxC-2024</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 group-hover:text-amber-400 transition-colors">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Chart Section with Glassmorphism */}
          <div className="bg-neutral-900/30 rounded-[7px] p-6 backdrop-blur-md relative overflow-hidden h-[672px]">
             {/* Subtle Noise Texture */}
             <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

             <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-[28px] font-medium text-white tracking-tight">Leaders</h3>
                </div>

                <div className="flex-1 overflow-hidden">
                    <div className="grid grid-cols-12 gap-1 md:gap-2 px-2 md:px-4 py-3 text-xs md:text-sm font-semibold tracking-wider text-neutral-500 border-b border-white/5">
                        <div className="col-span-2 md:col-span-1">Rank</div>
                        <div className="col-span-4 md:col-span-5">Address</div>
                        <div className="col-span-4 md:col-span-3 text-right">Points</div>
                        <div className="col-span-2 md:col-span-3 text-right">Tier</div>
                    </div>
                    <div className="overflow-y-auto h-[calc(100%-40px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {leadersData.map((user, i) => (
                            <div key={i} className="grid grid-cols-12 gap-1 md:gap-2 px-2 md:px-4 py-3 md:py-4 items-center border-b border-white/5 hover:bg-white/5 transition-colors group text-xs md:text-sm font-medium">
                                <div className="col-span-2 md:col-span-1 font-medium text-white">
                                    {user.rank}
                                </div>
                                <div className="col-span-4 md:col-span-5 flex items-center gap-2 md:gap-3">
                                    <div className={`hidden md:block shrink-0 w-3 h-3 rounded-full ${user.iconColor.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor] ${user.iconColor}`}></div>
                                    <span className="text-xs md:text-sm font-medium text-neutral-300 group-hover:text-white transition-colors truncate">
                                        <span className="md:hidden">{user.address.slice(0, 4)}...{user.address.slice(-4)}</span>
                                        <span className="hidden md:inline">{user.address}</span>
                                    </span>
                                </div>
                                <div className="col-span-4 md:col-span-3 text-right flex items-center justify-end gap-1 md:gap-2 text-white text-xs md:text-sm">
                                    <span className="tracking-tighter md:tracking-normal">{user.weekly}</span>
                                    <div className="hidden md:flex w-4 h-4 rounded-full bg-neutral-800 border border-white/20 items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <div className="col-span-2 md:col-span-3 text-right flex items-center justify-end gap-1 md:gap-2 text-white font-bold text-sm">
                                    <span className="md:hidden">T{(i % 7) + 1}</span>
                                    <span className="hidden md:inline">{user.total}</span>
                                    <div className="hidden md:flex w-4 h-4 rounded-full bg-[#543607] border border-[#C6AA84] items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Action Sidebar */}
        <div className="flex flex-col gap-2 h-full">
          {/* Buy/Sell Widget */}
          <div className="bg-neutral-900/30 rounded-[7px] p-6 backdrop-blur-md shadow-xl">
            <div className="mb-6 border-b border-white/5 pb-4">
              <h3 className="text-[28px] font-semibold text-white tracking-tight">Tier System</h3>
              <p className="text-base font-medium text-neutral-500 mt-1">Points required for each tier status</p>
            </div>
            
            <div className="space-y-2">
              {tierSystemData.map((item) => (
                <div 
                  key={item.tier}
                  className={`flex items-center justify-between p-3 rounded-[7px] border-0 transition-all ${
                    item.active 
                      ? 'bg-[#C6AA84]/10' 
                      : 'bg-neutral-900/40 hover:bg-neutral-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold capitalize ${
                       item.active ? 'bg-[#C6AA84] text-black' : 'bg-neutral-800 text-neutral-400'
                     }`}>
                       {item.tier}
                     </div>
                     <span className={`text-sm font-semibold capitalize ${item.active ? 'text-white' : 'text-neutral-300'}`}>
                       {item.label}
                     </span>
                  </div>
                  <div className={`text-sm font-semibold ${item.active ? 'text-[#C6AA84]' : 'text-neutral-500'}`}>
                    {item.points} {item.points !== 'UNLIMITED' && 'PTS'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-neutral-900/30 rounded-[7px] p-6 backdrop-blur-sm shadow-xl relative overflow-hidden group/card flex-1 flex flex-col">
            <h3 className="text-base font-semibold text-white mb-4 capitalize tracking-wider drop-shadow-md">Join Our Community</h3>
            
            <div className="flex-1 flex flex-col justify-center gap-2">
              {/* Twitter */}
              <a href="#" className="relative flex items-center justify-center p-3 rounded-[7px] bg-neutral-900/40 hover:bg-white/10 transition-all group border border-transparent hover:border-white/5">
                <div className="flex items-center gap-3 w-[120px] md:w-auto">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-black/40 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                    <XIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-neutral-200 group-hover:text-white">Twitter</span>
                </div>
                <ArrowUpRight className="absolute right-3 w-4 h-4 text-neutral-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
              </a>

              {/* Telegram */}
              <a href="#" className="relative flex items-center justify-center p-3 rounded-[7px] bg-neutral-900/40 hover:bg-[#24A1DE]/10 transition-all group border border-transparent hover:border-[#24A1DE]/20">
                <div className="flex items-center gap-3 w-[120px] md:w-auto">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-black/40 flex items-center justify-center text-neutral-400 group-hover:text-[#24A1DE] transition-colors">
                    <TelegramIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-neutral-200 group-hover:text-white">Telegram</span>
                </div>
                <ArrowUpRight className="absolute right-3 w-4 h-4 text-neutral-600 group-hover:text-[#24A1DE] transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
              </a>

              {/* Discord */}
              <a href="#" className="relative flex items-center justify-center p-3 rounded-[7px] bg-neutral-900/40 hover:bg-[#5865F2]/10 transition-all group border border-transparent hover:border-[#5865F2]/20">
                <div className="flex items-center gap-3 w-[120px] md:w-auto">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-black/40 flex items-center justify-center text-neutral-400 group-hover:text-[#5865F2] transition-colors">
                    <DiscordIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-neutral-200 group-hover:text-white">Discord</span>
                </div>
                <ArrowUpRight className="absolute right-3 w-4 h-4 text-neutral-600 group-hover:text-[#5865F2] transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
