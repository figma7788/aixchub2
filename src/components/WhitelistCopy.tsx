import React from 'react';
import { XIcon, TelegramIcon, DiscordIcon } from './icons/SocialIcons';
import { SplineWrapper } from './SplineWrapper';

export const WhitelistCopy = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col items-center justify-center gap-4 relative overflow-hidden bg-black rounded-[7px]">
      
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
         <SplineWrapper scene="https://prod.spline.design/yK0DJoMCuRIjGNn1/scene.splinecode" />
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 md:px-0 top-[5%]">
        
        {/* Main Content */}
        <div className="text-center space-y-4 max-w-3xl mb-12">
            <h1 className="text-4xl md:text-6xl font-normal text-white tracking-tight">AIxC Hub</h1>
            <p className="text-xl md:text-2xl text-white font-light">
                A Web3 investment education and predictive competition platform.
            </p>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto px-4">
                Learn about crypto investing through gamified forecasting, team battles, and Agent development—while earning point rewards.
            </p>
        </div>

        {/* Connect Wallet */}
        <button className="w-full md:w-[460px] h-12 bg-white text-black rounded-full font-medium text-lg transition-all hover:bg-neutral-200 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Connect Wallet
        </button>

        {/* Community Section */}
        <div className="flex flex-col items-center gap-4 mt-12">
          <span className="text-neutral-400 text-sm font-medium tracking-widest mix-blend-difference">Join Our Community</span>
          <div className="flex items-center gap-6">
            {/* X (Twitter) */}
            <a href="#" className="text-neutral-400 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <XIcon className="w-[26px] h-[26px]" />
            </a>

            {/* Telegram */}
            <a href="#" className="text-neutral-400 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <TelegramIcon className="w-[24px] h-[24px]" />
            </a>

            {/* Discord */}
            <a href="#" className="text-neutral-400 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <DiscordIcon className="w-[30px] h-[30px]" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
