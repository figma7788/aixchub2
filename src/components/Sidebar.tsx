import React from 'react';
import { Settings, LogOut, TrendingUp, Gift, Trophy, ListChecks, Gamepad2, Crown, User, Home } from 'lucide-react';
import logoImage from 'figma:asset/3d488fb2e12fa24ca2d15e2675abf7157bc4716b.png';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  onClose?: () => void;
}

export const Sidebar = ({ currentView, setCurrentView, onClose }: SidebarProps) => {
  const handleNavClick = (id: string) => {
    setCurrentView(id);
    if (onClose) onClose();
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'prediction-market', label: 'C10 Prediction Market', icon: TrendingUp },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'tasks', label: 'Tasks', icon: Gift },
    { id: 'team-ranking', label: 'Team Ranking', icon: Trophy },
    { id: 'personal-ranking', label: 'Personal Ranking', icon: Crown },
    { id: 'playground', label: 'Playground', icon: Gamepad2 },
  ];

  return (
    <aside className="w-64 h-full bg-neutral-900/50 backdrop-blur-xl flex flex-col transition-all duration-300 rounded-2xl">
      <div className="p-6 flex items-center gap-3 border-b border-white/5 md:border-transparent">
        <img src={logoImage} alt="AIxC Logo" className="h-6" />
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-[15px] font-semibold rounded-lg transition-all duration-200 group ${
              currentView === item.id
                ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon size={18} className={`transition-colors ${currentView === item.id ? 'text-[#C6AA84]' : 'text-neutral-500 group-hover:text-neutral-300'}`} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5 bg-black/20">
          <div className="flex items-center justify-between px-2 py-4 mb-2">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                 <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.211.258-1.911.177-.183 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.333-1.386 4.026-1.627 4.477-1.635.1 0 .32.02.47.14.12.1.17.32.16.48z"/>
              </svg>
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
          <Settings size={18} />
          Settings
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
          <LogOut size={18} />
          Log Out
        </button>
      </div>
    </aside>
  );
};
