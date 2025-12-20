import React from 'react';
import { XIcon, TelegramIcon, DiscordIcon } from './icons/SocialIcons';
import { SplineWrapper } from './SplineWrapper';

export const WhitelistCopy = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col items-center justify-center gap-4 relative overflow-hidden bg-black rounded-[7px]">
      
      {/* Background Layers - Restored the specific requested animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <SplineWrapper scene="https://prod.spline.design/yK0DJoMCuRIjGNn1/scene.splinecode" />
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-4 w-full px-4 md:px-0 top-[10%]">
        {/* Connect Wallet - Wider and shorter */}
        <button className="w-full md:w-[460px] h-12 bg-white text-black rounded-full font-medium text-lg transition-all hover:bg-neutral-200 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Connect Wallet
        </button>

        {/* Go to Leaderboard - Secondary Action */}
        <button className="w-full md:w-[460px] h-12 bg-white text-black rounded-full font-medium text-lg transition-all hover:bg-neutral-200 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Enter Invite Code
        </button>

        {/* Community Section */}
        <div className="flex flex-col items-center gap-4 mt-8">
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
