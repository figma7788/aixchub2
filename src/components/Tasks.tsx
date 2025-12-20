import React from 'react';
import { Gift, Check, Clock, Lock, Sparkles, ExternalLink } from 'lucide-react';
import { SplineWrapper } from './SplineWrapper';
import { GlassCard } from './ui/GlassCard';


export const Tasks = () => {
  return (
    <div className="space-y-2">
      {/* Hero Section with Glow */}
      <div className="relative rounded-[7px] overflow-hidden min-h-[500px] flex items-center bg-black">
        {/* Spline Background */}
        <div className="absolute inset-0 z-0 translate-x-0">
             <SplineWrapper scene="https://prod.spline.design/nujJCFNC3ZbSXTpT/scene.splinecode" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 via-35% to-transparent z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay z-0 pointer-events-none"></div>
        
        {/* Animated Background Orbs (Optional, kept subtle) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse"></div>

        <div className="relative z-10 p-10 lg:p-14 w-full">
          <div className="max-w-3xl space-y-6 -ml-6 lg:ml-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium tracking-wide capitalize">
              <Sparkles size={12} />
              <span>Season 1 Rewards</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Complete tasks, earn points <br />and <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">level up!</span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Finish beginner and daily missions to earn points.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2">
                Start Now
              </button>
              <button className="px-6 py-3 bg-neutral-900/50 text-white font-medium rounded-full hover:bg-white/5 transition-colors flex items-center gap-2 backdrop-blur-sm">
                Learn More <ExternalLink size={16} className="text-neutral-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <GlassCard className="w-full p-4 md:p-8 space-y-8 border-0">
        {/* Header - Styled like "All Vaults" */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-[28px] font-medium text-white tracking-tight">Daily Missions</h2>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1A] rounded-full">
              <Sparkles size={14} className="text-amber-500" />
              <span className="text-xs text-neutral-300 font-medium">Season 1</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] rounded-full text-neutral-400 text-sm hover:bg-[#222] transition-colors cursor-pointer">
                <Clock size={16} />
                <span className="text-white">08:32:15</span>
             </div>
          </div>
        </div>

        {/* Mission Cards Grid - Vault Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          
          {/* Card 1: Login (Completed) */}
          <GlassCard className="group relative p-6 overflow-hidden transition-all duration-300 border-0 flex flex-col justify-between">
            {/* Green Glow - Stronger static state */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-green-500/40 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-green-500/60 group-hover:scale-125 transition-all duration-500"></div>
            
            <div className="relative z-10 w-full">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-green-900/20 rounded-[7px] text-green-500">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Daily Login</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">Core Mission</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Reward</span>
                  <div className="flex items-center gap-1.5 text-white font-medium">
                    +5 <span className="text-neutral-500 text-xs">PTS</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Status</span>
                  <span className="text-green-500 font-medium flex items-center gap-1">
                    Completed
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium flex items-center gap-1">Streak</span>
                  <span className="text-white">12 Days</span>
                </div>
              </div>
            </div>
             <div className="mt-4 w-full py-2 bg-transparent rounded-[7px] h-[34px]"></div>
          </GlassCard>

          {/* Card 2: Predictions */}
          <GlassCard className="group relative p-6 overflow-hidden transition-all duration-300 border-0 flex flex-col justify-between">
            {/* Purple Glow */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-purple-500/40 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-500/60 group-hover:scale-125 transition-all duration-500"></div>
            
            <div className="relative z-10 w-full">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-purple-900/20 rounded-[7px] text-purple-500">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Market Oracle</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">Prediction Game</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Reward</span>
                  <div className="flex items-center gap-1.5 text-white font-medium">
                    +20 <span className="text-neutral-500 text-xs">PTS</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Progress</span>
                  <span className="text-purple-500 font-medium">3/10</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Difficulty</span>
                  <span className="text-white">Medium</span>
                </div>
              </div>
              
              <div className="mt-4 h-2 w-full bg-neutral-800 rounded-full overflow-hidden mb-[15px]">
                 <div className="h-full bg-purple-500 w-[30%] rounded-full" />
              </div>
            </div>
             <div className="w-full h-[15px]"></div>
          </GlassCard>

          {/* Card 3: Streak (Gold) */}
          <GlassCard className="group relative p-6 overflow-hidden transition-all duration-300 border-0 flex flex-col justify-between">
            {/* Gold/Orange Glow */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-orange-500/40 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-500/60 group-hover:scale-125 transition-all duration-500"></div>
            
            <div className="relative z-10 w-full">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-orange-900/20 rounded-[7px] text-orange-500">
                    <Gift size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Winning Streak</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">High Rewards</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Reward</span>
                  <div className="flex items-center gap-1.5 text-white font-medium">
                    +30 <span className="text-neutral-500 text-xs">PTS</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Target</span>
                  <span className="text-white">5 Wins</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Current Best</span>
                  <span className="text-orange-500 font-medium">5 Wins</span>
                </div>
              </div>
            </div>
             <button className="mt-4 w-full py-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-xs font-medium text-white transition-colors">
                  Claim Reward
               </button>
          </GlassCard>

          {/* Card 4: Twitter */}
          <GlassCard className="group relative p-6 overflow-hidden transition-all duration-300 border-0 flex flex-col justify-between">
            {/* Blue Glow */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-blue-500/40 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-500/60 group-hover:scale-125 transition-all duration-500"></div>
            
            <div className="relative z-10 w-full">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-900/20 rounded-[7px] text-blue-500">
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Social Amplify</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">Spread the Word</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Reward</span>
                  <div className="flex items-center gap-1.5 text-white font-medium">
                    +15 <span className="text-neutral-500 text-xs">PTS</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Platform</span>
                  <span className="text-blue-400">Twitter / X</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Action</span>
                  <span className="text-white">Share Post</span>
                </div>
              </div>
            </div>
             <button className="mt-4 w-full py-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-xs font-medium text-white transition-colors">
                  Go to Task
               </button>
          </GlassCard>

          {/* Card 5: Discord */}
          <GlassCard className="group relative p-6 overflow-hidden transition-all duration-300 border-0 flex flex-col justify-between">
            {/* Indigo Glow */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-indigo-500/40 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-indigo-500/60 group-hover:scale-125 transition-all duration-500"></div>
            
            <div className="relative z-10 w-full">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-900/20 rounded-[7px] text-indigo-500">
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Community</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">Join the Discussion</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Reward</span>
                  <div className="flex items-center gap-1.5 text-white font-medium">
                    +10 <span className="text-neutral-500 text-xs">PTS</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Platform</span>
                  <span className="text-indigo-400">Discord</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Action</span>
                  <span className="text-white">Post Message</span>
                </div>
              </div>
            </div>
             <button className="mt-4 w-full py-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-xs font-medium text-white transition-colors">
                  Go to Task
               </button>
          </GlassCard>

           {/* Card 6: Coming Soon (Placeholder) */}
           <GlassCard className="group relative p-6 overflow-hidden opacity-50 hover:opacity-100 transition-all duration-300 border-0 flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-60 h-60 bg-neutral-500/20 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-neutral-500/40 group-hover:scale-125 transition-all duration-500"></div>
            
            <div className="relative z-10 flex flex-col w-full justify-between h-full">
              <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-neutral-800 rounded-[7px] text-neutral-500">
                        <Lock size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Mystery Mission</h3>
                        <p className="text-xs text-neutral-500 mt-0.5">Unlocks in 4h</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-500 font-medium">Reward</span>
                      <div className="flex items-center gap-1.5 text-white font-medium">
                        ??? <span className="text-neutral-500 text-xs">PTS</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-500 font-medium">Status</span>
                      <span className="text-neutral-400">Locked</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-500 font-medium">Difficulty</span>
                      <span className="text-white">Hard</span>
                    </div>
                  </div>
              </div>
            </div>
             <div className="mt-4 w-full py-2 bg-transparent rounded-[7px] h-[34px]"></div>
          </GlassCard>

        </div>
      </GlassCard>
    </div>
  );
};