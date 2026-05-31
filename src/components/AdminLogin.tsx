import React, { useState } from 'react';
import { Key, ShieldAlert, Lock, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

interface AdminLoginProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export default function AdminLogin({ onSuccess, onCancel }: AdminLoginProps) {
  const [passcode, setPasscode] = useState('');
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'admin' || passcode.trim() === 'azizul2026') {
      setErrorStatus(null);
      onSuccess();
    } else {
      setErrorStatus('The credential sequence did not register with security certificates. Refine passcode.');
    }
  };

  return (
    <div className="py-24 bg-[#FAF9F6] text-[#1A1A1A] flex items-center justify-center min-h-[750px] animate-fadeIn">
      <div className="max-w-md w-full bg-white border border-black/10 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
        
        {/* Abstract background subtle glow */}
        <div className="absolute -right-16 -top-16 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl"></div>

        {/* Studio Icon Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex h-12 w-12 bg-black text-[#FAF9F6] rounded-full items-center justify-center font-display text-sm font-bold shadow-md">
            AH
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-black uppercase">
            STUDIO LOG SYSTEM
          </h2>
          <p className="text-black/50 text-[11px] font-mono uppercase tracking-widest leading-relaxed">
            RESTRICTED INTELLECTUAL WORKSPACE • MD. AZIZUL HAKIM 
          </p>
        </div>

        {/* Secure Form */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          
          <div className="space-y-2">
            <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold">
              Secure Terminal Passcode:
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-black/30">
                <Lock className="h-4 w-4" />
              </span>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setErrorStatus(null);
                }}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs sm:text-sm font-mono tracking-widest focus:outline-none focus:border-black/50 text-black transition-all"
              />
            </div>
            
            {errorStatus ? (
              <div className="text-[10px] text-red-600 font-medium flex items-center gap-1.5 pt-1">
                <ShieldAlert className="h-4 w-4 text-red-500" />
                <span>{errorStatus}</span>
              </div>
            ) : (
              <span className="text-[9px] text-[#1A1A1A]/40 font-sans block pt-1 leading-relaxed">
                Enter your administrative key to manage live courses, sales, asset downloads, database entries, and client messages.
              </span>
            )}
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-black hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md group"
            >
              <span>Verify Access Level</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={onCancel}
              className="w-full text-center text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A]/40 hover:text-black font-bold pt-1 block"
            >
              Cancel & Return Home
            </button>
          </div>

        </form>

        {/* Interactive hint toggle */}
        <div className="mt-8 pt-6 border-t border-black/5">
          <div className="bg-[#FAF9F6] border border-black/5 p-3 rounded-xl">
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-1.5 text-[10px] font-bold text-amber-800 uppercase tracking-wider focus:outline-none"
            >
              <HelpCircle className="h-4 w-4 text-amber-600" />
              <span>{showHint ? 'Hide demonstration passcode details' : 'Reveal demo credential'}</span>
            </button>

            {showHint && (
              <p className="mt-2 text-[10px] text-black/60 leading-relaxed font-mono">
                💡 Key in either <strong className="text-black underline">admin</strong> or <strong className="text-black underline">azizul2026</strong> as the password to unlock the premium live dashboard.
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
