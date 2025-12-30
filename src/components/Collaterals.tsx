import React from 'react';
import { ChevronDown, Bitcoin, Wallet, Globe, Activity, Zap, Layers, Command, Database, Link as LinkIcon, Box } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import ethLogo from 'figma:asset/b99e627bfa7e680df32f2ac116b641fd2eb1653f.png';
import xrpLogo from 'figma:asset/acbe7a95259a96271a261d7ec24a2ffa039d4161.png';
import bnbLogo from 'figma:asset/f883e72cdbf9c1dd094d7ca9e8bfc5316ae7bf32.png';
import solLogo from 'figma:asset/8fa0477dd3a33cba47ba535e118ecc596418496f.png';
import trxLogo from 'figma:asset/db8f00d3c51af453f13ad20dbb94370cf0cf36ec.png';
import dogeLogo from 'figma:asset/2a168fd388e65622726cb3b824db27a28b448d03.png';
import adaLogo from 'figma:asset/6d267b9a7abeb30bd6ffd72d5e5d9b1cbe22a3cb.png';
import linkLogo from 'figma:asset/b665821293291a61d6d1c91f5b0dcf05ffe51562.png';
import hypeLogo from 'figma:asset/3839266a993f0fcd971231d735d10e0330404339.png';

export const Collaterals = () => {
  const assets = [
    {
      id: 1,
      symbol: 'BTC',
      weight: '50%',
      price: '$89,321',
      change: '+0.2%',
      isPositive: true,
      icon: Bitcoin,
      color: 'text-orange-500'
    },
    {
      id: 2,
      symbol: 'ETH',
      weight: '24%',
      price: '$3,039',
      change: '+0.7%',
      isPositive: true,
      icon: Layers,
      image: ethLogo,
      color: 'text-indigo-400'
    },
    {
      id: 3,
      symbol: 'XRP',
      weight: '8%',
      price: '$2.03',
      change: '+0.6%',
      isPositive: true,
      icon: Activity,
      image: xrpLogo,
      color: 'text-white'
    },
    {
      id: 4,
      symbol: 'BNB',
      weight: '8%',
      price: '$892.01',
      change: '+1.2%',
      isPositive: true,
      icon: Database,
      image: bnbLogo,
      color: 'text-yellow-400'
    },
    {
      id: 5,
      symbol: 'SOL',
      weight: '5%',
      price: '$132.18',
      change: '-0.6%',
      isPositive: false,
      icon: Zap,
      image: solLogo,
      color: 'text-purple-500'
    },
    {
      id: 6,
      symbol: 'TRX',
      weight: '1%',
      price: '$0.2869',
      change: '+0.5%',
      isPositive: true,
      icon: Box,
      image: trxLogo,
      color: 'text-red-500'
    },
    {
      id: 7,
      symbol: 'DOGE',
      weight: '1%',
      price: '$0.1399',
      change: '+0.6%',
      isPositive: true,
      icon: Wallet,
      image: dogeLogo,
      color: 'text-yellow-200'
    },
    {
      id: 8,
      symbol: 'ADA',
      weight: '1%',
      price: '$0.4146',
      change: '+0.4%',
      isPositive: true,
      icon: Globe,
      image: adaLogo,
      color: 'text-blue-400'
    },
    {
      id: 9,
      symbol: 'HYPE',
      weight: '1%',
      price: '$31.09',
      change: '+1.0%',
      isPositive: true,
      icon: Command,
      image: hypeLogo,
      color: 'text-green-400'
    },
    {
      id: 10,
      symbol: 'LINK',
      weight: '1%',
      price: '$13.91',
      change: '+3.0%',
      isPositive: true,
      icon: LinkIcon,
      image: linkLogo,
      color: 'text-blue-600'
    }
  ];

  return (
    <GlassCard className="mt-2 overflow-hidden border-0 bg-neutral-900/80">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <h2 className="text-[28px] font-medium text-white tracking-tight">C10 Composition</h2>
        
        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#1a1a1a] rounded-full hover:bg-[#222] transition-colors">
            <span className="text-neutral-400">Filter:</span> All
            <ChevronDown size={14} className="text-neutral-500" />
          </button>
        </div>
      </div>

      {/* List */}
      <div className="">
        {assets.map((asset) => (
          <div key={asset.id} className="group p-6 hover:bg-white/[0.02] transition-colors duration-200 border-b border-white/5 last:border-b-0">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-2 md:gap-6 items-center">
              
              {/* Asset Name */}
              <div className="col-span-3 md:col-span-1 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center overflow-hidden ${asset.color}`}>
                  {/* @ts-ignore */}
                  {asset.image ? (
                     /* @ts-ignore */
                    <img src={asset.image} alt={asset.symbol} className="w-6 h-6 object-contain" />
                  ) : (
                    <asset.icon size={20} />
                  )}
                </div>
                <div>
                  <div className="text-lg font-medium text-white flex items-center gap-2">
                    {asset.symbol}
                  </div>
                  <div className="text-xs font-medium text-neutral-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                    Crypto Asset
                  </div>
                </div>
              </div>

              {/* Weight */}
              <div className="flex flex-col items-start md:items-start">
                <div className="text-xs font-medium text-neutral-500 mb-1">
                  Weight
                </div>
                <div className="text-lg font-medium text-white tracking-tight">
                  {asset.weight}
                </div>
              </div>

              {/* Price */}
              <div className="flex flex-col items-center md:items-start">
                <div className="text-xs font-medium text-neutral-500 mb-1">
                  Price
                </div>
                <div className="text-lg font-medium text-white tracking-tight">
                  {asset.price}
                </div>
              </div>

              {/* Change */}
              <div className="flex flex-col items-end md:items-end">
                <div className="text-xs font-medium text-neutral-500 mb-1">
                  24h Change
                </div>
                <div className={`text-lg font-medium tracking-tight flex items-center gap-2 ${asset.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                  {asset.change}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};
