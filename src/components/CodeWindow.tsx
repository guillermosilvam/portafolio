export const CodeWindow = () => (
  <div className="
    bg-black/20 backdrop-blur-xl 
    border border-white/20 
    rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.06)]
    w-full max-w-lg 
    overflow-hidden
  ">
    {/* Barra superior con puntos en escala de grises */}
    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
      <div className="w-3 h-3 rounded-full bg-gray-600/40" />
      <div className="w-3 h-3 rounded-full bg-gray-300/40" />
      <div className="w-3 h-3 rounded-full bg-gray-400/40" />
      <span className="ml-3 text-xs text-white/30 font-mono">index.html</span>
    </div>

    {/* Área de código */}
    <div className="p-5 font-mono text-sm leading-relaxed">
      <div className="flex">
        {/* Números de línea */}
        <div className="text-right pr-4 text-white/20 select-none">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
        </div>
        {/* Código HTML */}
        <div>
          <p className="text-white/50">
            &lt;<span className="text-emerald-400">!DOCTYPE</span> <span className="text-red-300">html</span>&gt;
          </p>
          <p>
            &lt;<span className="text-emerald-400">html</span> <span className="text-red-300">lang</span>=<span className="text-cyan-500">"es"</span>&gt;
          </p>
          <p className="pl-4">
            &lt;<span className="text-emerald-400">head</span>&gt;...&lt;/<span className="text-emerald-400">head</span>&gt;
          </p>
          <p className="pl-4">
            &lt;<span className="text-emerald-400">body</span>&gt;
          </p>
          <p className="pl-8">
            &lt;<span className="text-emerald-400">h1</span>&gt;
            <span className="text-white/80">Hola mundo</span>
            &lt;/<span className="text-emerald-400">h1</span>&gt;
          </p>
          <p className="pl-4">
            &lt;/<span className="text-emerald-400">body</span>&gt;
          </p>
          <p>
            &lt;/<span className="text-emerald-400">html</span>&gt;
          </p>
          <p className="flex items-center gap-1 mt-2">
            <span className="text-white/40">$</span>
            <span className="animate-pulse text-white/70">▊</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);