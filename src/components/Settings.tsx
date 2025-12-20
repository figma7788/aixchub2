import React, { useState } from 'react';
import { 
  User, 
  Shield, 
  Key, 
  Bell, 
  Smartphone, 
  Mail, 
  Copy, 
  Eye, 
  EyeOff,
  Check,
  LogOut,
  ChevronRight,
  Trophy,
  AlertCircle
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [apiKeyVisible, setApiKeyVisible] = useState(false);
  
  const handleCopyKey = () => {
    navigator.clipboard.writeText('pk_live_51Mz2jKwd8s9d8s7d6f5g4h3j2k1l0');
    toast.success('API Key copied to clipboard');
  };

  const handleSave = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1000)),
      {
        loading: 'Saving changes...',
        success: 'Settings updated successfully',
        error: 'Error updating settings',
      }
    );
  };

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User, desc: 'Personal details and photo' },
    { id: 'security', label: 'Security', icon: Shield, desc: '2FA and password' },
    { id: 'api', label: 'API Keys', icon: Key, desc: 'Manage developer access' },
    { id: 'notifications', label: 'Notifications', icon: Bell, desc: 'Email and push alerts' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Settings</h2>
          <p className="text-neutral-400">Manage your account settings and preferences.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleSave}
            className="px-6 py-2 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Menu */}
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 group ${
                activeTab === item.id 
                ? 'bg-neutral-800 shadow-lg' 
                : 'bg-transparent hover:bg-white/5'
              }`}
            >
              <div className={`p-2 rounded-lg ${activeTab === item.id ? 'bg-white text-black' : 'bg-neutral-800 text-neutral-400 group-hover:text-white'}`}>
                <item.icon size={20} />
              </div>
              <div>
                <div className={`font-medium ${activeTab === item.id ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                  {item.label}
                </div>
                <div className="text-xs text-neutral-500">{item.desc}</div>
              </div>
              {activeTab === item.id && <ChevronRight size={16} className="ml-auto text-neutral-500" />}
            </button>
          ))}
          
          <div className="pt-8 mt-8 border-t border-white/5">
             <button className="w-full flex items-center gap-4 p-4 rounded-xl text-left hover:bg-red-500/10 transition-all group text-neutral-400 hover:text-red-400">
                <LogOut size={20} />
                <span className="font-medium">Sign Out</span>
             </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="bg-neutral-900/30 rounded-2xl p-8 backdrop-blur-sm space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
               <div className="flex items-center gap-6 pb-8 border-b border-white/5">
                 <div className="relative group cursor-pointer">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 p-[3px]">
                        <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
                           JD
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-medium text-white">Change</span>
                    </div>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white">John Doe</h3>
                    <p className="text-neutral-400 text-sm">AIxC Member since 2023</p>
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-medium text-amber-500">
                        <Trophy size={12} fill="currentColor" /> Gold Tier
                    </div>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-400">Full Name</label>
                    <input type="text" defaultValue="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-400">Email Address</label>
                    <input type="email" defaultValue="john@example.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-400">Username</label>
                    <input type="text" defaultValue="@Satoshi_Nakamoto" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-400">Phone Number</label>
                    <input type="tel" defaultValue="+1 (555) 000-0000" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50" />
                  </div>
               </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
             <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="bg-neutral-900/30 rounded-2xl p-8 backdrop-blur-sm">
                   <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                      <Shield className="text-green-500" size={20} />
                      Two-Factor Authentication
                   </h3>
                   <div className="flex items-center justify-between p-4 bg-green-500/5 rounded-xl mb-6">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                            <Check size={20} />
                         </div>
                         <div>
                            <div className="font-medium text-white">2FA is enabled</div>
                            <div className="text-sm text-neutral-400">Your account is protected with Authenticator App</div>
                         </div>
                      </div>
                      <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">Disable</button>
                   </div>
                </div>

                <div className="bg-neutral-900/30 rounded-2xl p-8 backdrop-blur-sm">
                   <h3 className="text-lg font-bold text-white mb-6">Change Password</h3>
                   <div className="space-y-4 max-w-md">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-400">Current Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-400">New Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-400">Confirm New Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50" />
                      </div>
                      <button className="mt-4 px-6 py-2 bg-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-700 transition-colors">Update Password</button>
                   </div>
                </div>
             </div>
          )}

          {/* API Keys Tab */}
          {activeTab === 'api' && (
             <div className="bg-neutral-900/30 rounded-2xl p-8 backdrop-blur-sm space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                   <h3 className="text-lg font-bold text-white mb-2">API Keys</h3>
                   <p className="text-neutral-400 text-sm">Manage your API keys for accessing AIxC programmatically. Treat your keys like passwords.</p>
                </div>

                <div className="p-4 bg-black/40 rounded-xl space-y-4">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <span className="text-sm font-bold text-white">Default Key</span>
                         <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[10px] font-bold capitalize rounded">Active</span>
                      </div>
                      <span className="text-xs text-neutral-500">Created: Oct 24, 2023</span>
                   </div>
                   
                   <div className="flex items-center gap-2">
                      <div className="flex-1 bg-neutral-900 rounded-lg px-4 py-3 text-sm text-neutral-300 relative">
                         {apiKeyVisible ? 'pk_live_51Mz2jKwd8s9d8s7d6f5g4h3j2k1l0' : 'pk_live_****************************'}
                         <div className="absolute inset-y-0 right-0 flex items-center pr-3 gap-2">
                             <button onClick={() => setApiKeyVisible(!apiKeyVisible)} className="p-1 hover:bg-white/10 rounded text-neutral-400 hover:text-white transition-colors">
                                {apiKeyVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                             </button>
                         </div>
                      </div>
                      <button onClick={handleCopyKey} className="p-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors">
                         <Copy size={18} />
                      </button>
                   </div>
                   
                   <div className="text-xs text-neutral-500 flex items-center gap-2">
                      <AlertCircle size={12} /> Never share your API keys with anyone.
                   </div>
                </div>
                
                <button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors text-white">
                   <Key size={16} /> Generate New Key
                </button>
             </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
             <div className="bg-neutral-900/30 rounded-2xl p-8 backdrop-blur-sm space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-lg font-bold text-white mb-6">Notification Preferences</h3>
                
                <div className="space-y-6">
                   <div className="flex items-start justify-between pb-6 border-b border-white/5">
                      <div className="flex gap-4">
                         <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500 h-fit">
                            <Mail size={20} />
                         </div>
                         <div>
                            <div className="font-medium text-white">Email Notifications</div>
                            <p className="text-sm text-neutral-400 mt-1 max-w-sm">Receive account updates, price alerts, and security notifications via email.</p>
                         </div>
                      </div>
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-amber-500 cursor-pointer transition-colors">
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                      </div>
                   </div>

                   <div className="flex items-start justify-between pb-6 border-b border-white/5">
                      <div className="flex gap-4">
                         <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 h-fit">
                            <Smartphone size={20} />
                         </div>
                         <div>
                            <div className="font-medium text-white">Push Notifications</div>
                            <p className="text-sm text-neutral-400 mt-1 max-w-sm">Get real-time alerts on your mobile device for transactions and price movements.</p>
                         </div>
                      </div>
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-700 cursor-pointer transition-colors">
                        <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                      </div>
                   </div>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

