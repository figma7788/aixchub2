import React from 'react';
import { Star, Battery, Gift, Send, Mail, Wallet } from 'lucide-react';
import { SplineWrapper } from './SplineWrapper';

export const Profile = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[28px] font-medium text-white mb-2">Profile</h2>
          <p className="text-neutral-400">Manage your AIxC points and account settings.</p>
        </div>
        <button className="whitespace-nowrap self-start mt-1.5 md:mt-0 md:self-center rounded-full font-medium transition-all text-xs px-3 py-1 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 md:text-sm md:px-4 md:py-1.5 md:bg-white md:text-black md:hover:bg-neutral-200 md:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Card Visual & Balance */}
        <div className="h-full">
          {/* The Card */}
          <div className="w-full aspect-[1.586/1] rounded-[7px] bg-white/5 relative overflow-hidden group">
                {/* Content Overlay */}
                <SplineWrapper scene="https://prod.spline.design/ZgJfIVZIGUnDWWiZ/scene.splinecode" className="absolute inset-0 z-0" interactive={true} />
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between z-10 pointer-events-none">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-neutral-400 text-xs font-medium tracking-wider mb-1">Personal Points</div>
                            <div className="text-3xl font-bold text-white tracking-tight">87,945</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[#C6AA84] font-bold text-3xl italic tracking-wider">AIxC</div>
                        </div>
                    </div>
                    
                    <div className="mt-auto">
                        <div className="hidden md:flex items-center gap-2 mb-6">
                            <div className="text-white font-mono tracking-widest text-2xl">0x354c...01b8</div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="text-[12px] text-neutral-500 tracking-widest mb-1">Genesis Player</div>
                                <div className="text-white font-medium tracking-wider text-sm">ALEX MORGAN</div>
                                <div className="md:hidden text-neutral-400 font-mono tracking-widest text-[10px] mt-0.5">0x354c...01b8</div>
                            </div>
                            <div className="text-right">
                                <div className="text-[12px] text-neutral-500 tracking-widest mb-1">Team</div>
                                <div className="text-white font-medium tracking-wider text-sm">Cyber Titans</div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>

        {/* Rewards & Stats */}
        <div className="h-full">
            <div className="grid grid-cols-2 gap-2 h-full">
                <div className="bg-white/5 rounded-[7px] p-5 transition-all cursor-pointer group relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
                    
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.15)]">
                            <Star size={20} className="text-blue-400 fill-blue-400/20" />
                        </div>
                        <div className="flex items-center gap-1 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                             <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                             <span className="text-[10px] font-medium text-blue-300 tracking-wider">Active</span>
                        </div>
                    </div>
                    
                    <div className="relative z-10">
                        <div className="text-neutral-400 text-xs font-medium tracking-wider mb-1">Total Points</div>
                        <div className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-100 transition-colors">1,450</div>
                        <div className="text-xs font-medium text-neutral-500 mt-2 flex items-center gap-1">
                            <span className="text-green-400 bg-green-400/10 px-1 rounded">+120</span>
                            <span>This Week</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white/5 rounded-[7px] p-5 transition-all cursor-pointer group relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/10 blur-[40px] rounded-full group-hover:bg-purple-500/20 transition-colors"></div>
                    
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.15)]">
                            <Battery size={20} className="text-purple-400 fill-purple-400/20" />
                        </div>
                         <div className="flex items-center gap-1 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                             <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                             <span className="text-[10px] font-medium text-purple-300 tracking-wider">Full</span>
                        </div>
                    </div>
                    
                    <div className="relative z-10">
                        <div className="text-neutral-400 text-xs font-medium tracking-wider mb-1">Battery Level</div>
                        <div className="text-2xl font-bold text-white tracking-tight group-hover:text-purple-100 transition-colors">100%</div>
                         <div className="text-[10px] text-neutral-500 mt-2 flex items-center gap-1">
                            <span className="text-xs font-medium text-purple-400">Optimization Active</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 rounded-[7px] p-5 transition-all cursor-pointer group relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#5865F2]/10 blur-[40px] rounded-full group-hover:bg-[#5865F2]/20 transition-colors"></div>
                    
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#5865F2]/10 flex items-center justify-center group-hover:scale-110 transition-transform border border-[#5865F2]/20 shadow-[0_0_10px_rgba(88,101,242,0.15)]">
                             <svg className="w-5 h-5 text-[#5865F2] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.5328-9.7135-3.5281-13.6841a.061.061 0 0 0-.032-.0277ZM8.52 14.9732c-1.1314 0-2.0525-1.0563-2.0525-2.351 0-1.2946.911-2.351 2.0525-2.351 1.151 0 2.062 1.0563 2.0525 2.351 0 1.2947-.9115 2.351-2.0525 2.351Zm5.4932 0c-1.1314 0-2.0526-1.0563-2.0526-2.351 0-1.2946.9112-2.351 2.0526-2.351 1.1511 0 2.0621 1.0563 2.0526 2.351 0 1.2947-.9115 2.351-2.0526 2.351Z" />
                            </svg>
                        </div>
                        <div className="flex items-center gap-1 bg-[#5865F2]/10 px-2 py-0.5 rounded-full border border-[#5865F2]/20">
                             <span className="w-1.5 h-1.5 rounded-full bg-[#5865F2]"></span>
                             <span className="text-[10px] font-medium text-[#5865F2] tracking-wider">Linked</span>
                        </div>
                    </div>
                    
                    <div className="relative z-10">
                        <div className="text-neutral-400 text-xs font-medium tracking-wider mb-1">Community Role</div>
                        <div className="text-2xl font-bold text-white tracking-tight group-hover:text-[#aeb5ff] transition-colors">Bronze</div>
                        <div className="text-[10px] text-neutral-500 mt-2 flex items-center gap-1">
                             <span className="text-xs font-medium">Next: Silver (50 XP)</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 rounded-[7px] p-5 transition-all cursor-pointer group relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-rose-500/10 blur-[40px] rounded-full group-hover:bg-rose-500/20 transition-colors"></div>
                    
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center group-hover:scale-110 transition-transform border border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.15)]">
                            <Gift size={20} className="text-rose-400 fill-rose-400/20" />
                        </div>
                         <div className="flex items-center gap-1 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                             <span className="text-[10px] font-medium text-rose-300 tracking-wider">Boost</span>
                        </div>
                    </div>
                    
                    <div className="relative z-10">
                         <div className="text-neutral-400 text-xs font-medium tracking-wider mb-1">Multiplier</div>
                        <div className="text-2xl font-bold text-white tracking-tight group-hover:text-rose-100 transition-colors">1.0x</div>
                        <div className="text-[10px] text-neutral-500 mt-2 flex items-center gap-1">
                             <span className="text-xs font-medium text-rose-400">+0.1x Via Tasks</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-[7px] overflow-hidden backdrop-blur-sm">
        <div className="p-6 flex items-center gap-3">
            <h3 className="text-[28px] font-medium text-white">Connected Accounts</h3>
        </div>
        <div className="divide-y divide-white/5">
            {/* Discord */}
            <div className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#5865F2] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.5328-9.7135-3.5281-13.6841a.061.061 0 0 0-.032-.0277ZM8.52 14.9732c-1.1314 0-2.0525-1.0563-2.0525-2.351 0-1.2946.911-2.351 2.0525-2.351 1.151 0 2.062 1.0563 2.0525 2.351 0 1.2947-.9115 2.351-2.0525 2.351Zm5.4932 0c-1.1314 0-2.0526-1.0563-2.0526-2.351 0-1.2946.9112-2.351 2.0526-2.351 1.1511 0 2.0621 1.0563 2.0526 2.351 0 1.2947-.9115 2.351-2.0526 2.351Z" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-white font-medium">Discord</div>
                        <div className="text-xs text-neutral-500">Not Connected</div>
                    </div>
                </div>
                <button className="bg-[#5865F2] text-white text-sm font-bold px-4 py-1.5 rounded-full tracking-wide hover:bg-[#4752c4] transition-colors">
                    Connect +20 Points
                </button>
            </div>

            {/* Twitter */}
             <div className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-white font-medium">Twitter / X</div>
                        <div className="text-xs text-neutral-500">Not Connected</div>
                    </div>
                </div>
                <button className="bg-white/10 text-white text-sm font-bold px-4 py-1.5 rounded-full tracking-wide hover:bg-white/20 transition-colors">
                    Connect +20 Points
                </button>
            </div>

            {/* Telegram */}
            <div className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0088cc]/20 flex items-center justify-center">
                         <Send size={20} className="text-[#0088cc] ml-[-2px] mt-[2px]" />
                    </div>
                    <div>
                        <div className="text-white font-medium">Telegram</div>
                        <div className="text-xs text-neutral-500">Not Connected</div>
                    </div>
                </div>
                <button className="bg-[#0088cc] text-white text-sm font-bold px-4 py-1.5 rounded-full tracking-wide hover:bg-[#0077b5] transition-colors">
                    Connect +20 Points
                </button>
            </div>

            {/* Email */}
            <div className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Mail size={20} className="text-white" />
                    </div>
                    <div>
                        <div className="text-white font-medium">Email</div>
                        <div className="text-xs text-neutral-500">Not Connected</div>
                    </div>
                </div>
                <button className="bg-white text-black text-sm font-bold px-4 py-1.5 rounded-full tracking-wide hover:bg-neutral-200 transition-colors">
                    Connect +20 Points
                </button>
            </div>

             {/* Wallet */}
            <div className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C6AA84]/10 flex items-center justify-center">
                        <Wallet size={20} className="text-[#C6AA84]" />
                    </div>
                    <div>
                        <div className="text-white font-medium flex items-center gap-2">
                            Wallet <span className="text-[10px] text-[#C6AA84] font-bold tracking-wide">• Connected</span>
                        </div>
                        <div className="text-xs text-neutral-500">0x354c...01b8</div>
                    </div>
                </div>
                <button className="text-[#C6AA84] text-sm font-bold px-3 py-1.5 tracking-wide hover:text-white transition-colors">
                    Change
                </button>
            </div>
        </div>
         <div className="p-6 text-center bg-white/5">
             <p className="text-white font-medium mb-1">Connect More Accounts</p>
             <p className="text-xs text-neutral-500">Each connection gives you bonus credits and unlocks special tasks!</p>
        </div>
      </div>


    </div>
  );
};