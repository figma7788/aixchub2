import React from 'react';
import { Calendar, Clock, User, Mic, Sparkles } from 'lucide-react';

export const AMAPoster = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-8 animate-in fade-in zoom-in duration-500">
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden group shadow-2xl bg-[#09090b]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1759267190469-3d27fd461f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBmdXR1cmlzdGljJTIwYmFja2dyb3VuZCUyMHB1cnBsZSUyMGJsdWUlMjBiaXRjb2luJTIwY3J5cHRvfGVufDF8fHx8MTc2NjEzMTk2N3ww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="AMA Background" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.6] contrast-125 saturate-150"
          />
          {/* Overlay Gradients - Enhanced for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent opacity-80" />
        </div>
        
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col p-8 md:p-12">
          
          {/* Header Section */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 backdrop-blur-md text-purple-200 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                 <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                 Live Event
              </span>
              <div className="flex items-center gap-4 ml-4 text-neutral-300 text-sm font-medium bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-purple-400" />
                  <span>Oct 24</span>
                </div>
                <div className="w-px h-3 bg-white/10"></div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-purple-400" />
                  <span>14:00 UTC</span>
                </div>
              </div>
            </div>

            <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-neutral-500 tracking-tighter mb-4 drop-shadow-2xl font-sans">
              AMA
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-white/90 tracking-[0.2em] uppercase border-l-4 border-purple-500 pl-6 mb-8 drop-shadow-lg">
              Ask Me Anything
            </h2>
          </div>

          {/* Speakers Section */}
          <div className="mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
              
              {/* Host Card - Prominent */}
              <div className="md:col-span-4 relative group/host">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-2xl group-hover/host:bg-purple-600/30 transition-all duration-500"></div>
                <div className="relative bg-[#0F1115]/80 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 h-full flex flex-col justify-between overflow-hidden shadow-2xl">
                   <div className="absolute top-0 right-0 p-3 opacity-10 group-hover/host:opacity-20 transition-opacity">
                      <Mic size={80} />
                   </div>
                   
                   <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-purple-600 rounded-xl text-white shadow-lg shadow-purple-900/50"><Mic size={20}/></div>
                      <span className="text-purple-300 text-xs font-bold tracking-[0.2em] uppercase">Host</span>
                   </div>
                   
                   <div>
                      <div className="text-3xl font-bold text-white mb-1 tracking-tight">Alex Founder</div>
                      <div className="text-sm font-medium text-purple-200/70">CEO of AIxC</div>
                   </div>
                </div>
              </div>

              {/* Guests Grid */}
              <div className="md:col-span-8">
                 <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={14} className="text-yellow-400" />
                    <span className="text-neutral-400 text-xs font-bold tracking-widest uppercase">Special Guests</span>
                 </div>
                 
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Guest 1 */}
                    <div className="bg-white/5 rounded-xl p-5 backdrop-blur-md hover:bg-white/10 transition-all cursor-default group/guest shadow-lg">
                       <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg">
                             <span className="font-bold">S</span>
                          </div>
                       </div>
                       <div>
                          <div className="text-lg font-bold text-white truncate group-hover/guest:text-blue-300 transition-colors">Satoshi</div>
                          <div className="text-xs text-neutral-400 truncate">Bitcoin Creator</div>
                       </div>
                    </div>

                    {/* Guest 2 */}
                    <div className="bg-white/5 rounded-xl p-5 backdrop-blur-md hover:bg-white/10 transition-all cursor-default group/guest shadow-lg">
                       <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-lg">
                             <span className="font-bold">V</span>
                          </div>
                       </div>
                       <div>
                          <div className="text-lg font-bold text-white truncate group-hover/guest:text-emerald-300 transition-colors">Vitalik</div>
                          <div className="text-xs text-neutral-400 truncate">Ethereum Founder</div>
                       </div>
                    </div>

                    {/* Guest 3 */}
                    <div className="bg-white/5 rounded-xl p-5 backdrop-blur-md hover:bg-white/10 transition-all cursor-default group/guest shadow-lg">
                       <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center text-white shadow-lg">
                             <span className="font-bold">C</span>
                          </div>
                       </div>
                       <div>
                          <div className="text-lg font-bold text-white truncate group-hover/guest:text-orange-300 transition-colors">CZ</div>
                          <div className="text-xs text-neutral-400 truncate">Binance CEO</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};