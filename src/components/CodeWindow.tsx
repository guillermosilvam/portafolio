export const CodeWindow = () => (
  <div className="
    bg-black/20 backdrop-blur-xl 
    border border-white/20 
    rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.06)]
    w-full max-w-72 md:max-w-md lg:max-w-lg 
    overflow-hidden
  ">
    <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-3 bg-white/5 border-b border-white/10">
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gray-600/40" />
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gray-300/40" />
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gray-400/40" />
      <span className="ml-2 md:ml-3 text-[10px] md:text-xs text-white/30 font-mono">index.html</span>
    </div>

    <div className="p-3 md:p-5 font-mono text-[11px] md:text-sm leading-relaxed">
      <div className="flex">
        <div className="text-right pr-2 md:pr-4 text-white/20 select-none text-[10px] md:text-sm">
          <p className="pt-px">1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>

        <div>
          <p className="text-white">
            &lt;<span className="text-emerald-400">!DOCTYPE</span> <span className="text-red-300">html</span>&gt;
          </p>
          <p>
            &lt;<span className="text-emerald-400">html</span> <span className="text-red-300">lang</span>=<span className="text-cyan-500">"es"</span>&gt;
          </p>
          <p className="pl-3 md:pl-4">
            &lt;<span className="text-emerald-400">head</span>&gt;...&lt;/<span className="text-emerald-400">head</span>&gt;
          </p>
          <p className="pl-3 md:pl-4">
            &lt;<span className="text-emerald-400">body</span>&gt;
          </p>
          <p className="pl-6 md:pl-8">
            &lt;<span className="text-emerald-400">h1</span>&gt;
            <span className="text-white/80">Hola mundo</span>
            &lt;/<span className="text-emerald-400">h1</span>&gt;
          </p>
          <p className="pl-3 md:pl-4">
            &lt;/<span className="text-emerald-400">body</span>&gt;
          </p>
          <p>
            &lt;/<span className="text-emerald-400">html</span>&gt;
          </p>
          <p className="flex items-center gap-1 mt-5">
            <span className="text-white/40">$</span>
            <span className="animate-pulse text-white/70">▊</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);