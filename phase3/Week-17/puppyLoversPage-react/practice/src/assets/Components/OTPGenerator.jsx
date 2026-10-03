import React, { useState, useEffect, useRef } from "react";

export default function OTPGenerator() {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeLeft]);

  const generateOTP = () => {
    // Generate a 6-digit random number
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOtp);
    setTimeLeft(5);
    setCopied(false);
  };

  const handleCopy = () => {
    if (otp && timeLeft > 0) {
      navigator.clipboard.writeText(otp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container max-w-md w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl relative overflow-hidden text-center transition-all duration-300 mx-auto">
      {/* Decorative ambient background blur */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      {}
      <h1
        id="otp-title"
        className="text-3xl font-extrabold tracking-tight text-white mb-6 bg-clip-text bg-linear-to-r from-indigo-300 via-white to-cyan-300"
      >
        OTP Generator
      </h1>

      {}
      <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 mb-4 relative group">
        <h2
          id="otp-display"
          className={`font-mono transition-all duration-300 ${
            !otp
              ? "text-slate-400 text-base font-sans font-medium"
              : timeLeft > 0
                ? "text-3xl sm:text-4xl font-bold tracking-widest text-indigo-400 drop-shadow-[0_0_12px_rgba(129,140,248,0.3)]"
                : "text-2xl font-bold tracking-widest text-slate-500 line-through opacity-60"
          }`}
        >
          {!otp ? "Click 'Generate OTP' to get a code" : otp}
        </h2>

        {/* Copy to Clipboard overlay */}
        {otp && timeLeft > 0 && (
          <button
            onClick={handleCopy}
            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all active:scale-95"
            title="Copy OTP to Clipboard"
          >
            {copied ? (
              <span className="text-emerald-400">✓ Copied!</span>
            ) : (
              <span>📋 Copy Code</span>
            )}
          </button>
        )}

        {/* Visual Progress Bar */}
        {timeLeft > 0 && (
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-4 overflow-hidden">
            <div
              className="bg-linear-to-r from-indigo-500 to-cyan-400 h-full transition-all duration-1000 ease-linear rounded-full"
              style={{ width: `${(timeLeft / 5) * 100}%` }}
            />
          </div>
        )}
      </div>

      {}
      <div className="min-h-12 flex items-center justify-center mb-6">
        <p
          id="otp-timer"
          aria-live="polite"
          className={`text-sm font-medium transition-all duration-300 ${
            timeLeft > 0
              ? "text-cyan-400 animate-pulse"
              : otp
                ? "text-rose-400 bg-rose-500/10 px-4 py-2 rounded-xl border border-rose-500/20"
                : "text-slate-500"
          }`}
        >
          {timeLeft === 0 && otp !== ""
            ? "OTP expired. Click the button to generate a new OTP."
            : timeLeft > 0
              ? `Expires in: ${timeLeft} seconds`
              : ""}
        </p>
      </div>

      {}
      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={timeLeft > 0}
        className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide shadow-lg transition-all duration-200 ${
          timeLeft > 0
            ? "bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed opacity-60"
            : "bg-linear-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-indigo-500/20 active:scale-[0.98] border border-indigo-400/30"
        }`}
      >
        Generate OTP
      </button>
    </div>
  );
}
