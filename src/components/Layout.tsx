import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  currentView: string;
  setCurrentView: (view: string) => void;
}

export const Layout = ({ children, currentView, setCurrentView }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-black text-white overflow-hidden selection:bg-amber-500/30 p-2 gap-2">
      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar - Desktop & Mobile Drawer */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 md:relative md:transform-none md:translate-x-0 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar 
            currentView={currentView} 
            setCurrentView={setCurrentView} 
            onClose={() => setIsSidebarOpen(false)} 
        />
        {/* Mobile Close Button */}
        <button 
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white md:hidden"
        >
            <X size={20} />
        </button>
      </div>

      {/* Main Content */}
      <main className={`flex-1 flex flex-col relative w-full ${
        currentView === 'personal-ranking' ? 'overflow-hidden' : 'overflow-y-auto no-scrollbar'
      }`}>
        {/* Header */}
        <header className="h-[72px] flex items-center justify-between px-2 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-xl z-30 transition-all duration-300 shrink-0 rounded-[7px]">
          <div className="flex items-center gap-4">
            <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-[7px] md:hidden"
            >
                <Menu size={20} />
            </button>
            <div className="flex flex-col">
               <span className="text-xs text-neutral-500 font-medium capitalize tracking-wider leading-none mb-0.5">My Points</span>
               <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-lg font-bold text-white tracking-tight tabular-nums">2,450</span>
                  <span className="text-lg font-bold text-[#C6AA84]">PTS</span>
               </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all group">
            <div className="flex flex-col items-end mr-1">
              <span className="text-xs text-[#C6AA84] font-medium leading-tight group-hover:text-white transition-colors">bc1q...0wlh</span>
              <span className="text-[10px] font-semibold text-neutral-500 tracking-wider cursor-pointer hover:text-red-400 transition-colors leading-tight">Disconnect</span>
            </div>
            <div className="h-8 w-8 rounded-full cursor-pointer shadow-[0_0_10px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-shadow">
               <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center text-[10px] font-semibold text-white">
                  JD
               </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className={`w-full animate-in fade-in duration-500 slide-in-from-bottom-2 ${
          currentView === 'personal-ranking' ? 'h-[calc(100%-72px)] flex flex-col pt-2' : 'py-2'
        }`}>
          {children}

          {(currentView === 'home' || currentView === 'tasks' || currentView === 'prediction-market' || currentView === 'team-ranking') && (
            <div className="mt-2 p-4 bg-neutral-900/30 rounded-[7px] backdrop-blur-sm flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-white mb-0.5">AIxC Network</h4>
                <p className="text-xs text-neutral-500">System fully operational</p>
                <p className="text-[10px] text-neutral-600 mt-1.5">© 2025 AIxC. All rights reserved.</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#543607]/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C6AA84] animate-pulse" />
                <span className="text-xs font-medium text-[#C6AA84]">Connected</span>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
