export function StoicBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient - dark vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 0%, rgba(0,0,0,0.6) 100%)'
        }}
      />

      {/* Sacred geometry pattern - visible opacity */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        style={{ opacity: 0.08 }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern 
            id="sacred-grid" 
            x="0" 
            y="0" 
            width="240" 
            height="240" 
            patternUnits="userSpaceOnUse"
          >
            {/* Concentric circles */}
            <circle cx="120" cy="120" r="100" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
            <circle cx="120" cy="120" r="80" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
            <circle cx="120" cy="120" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
            <circle cx="120" cy="120" r="40" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
            <circle cx="120" cy="120" r="20" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
            
            {/* Hexagonal structure */}
            <line x1="120" y1="20" x2="120" y2="220" stroke="#d4c4a8" strokeWidth="0.3" />
            <line x1="20" y1="120" x2="220" y2="120" stroke="#d4c4a8" strokeWidth="0.3" />
            <line x1="33.4" y1="70" x2="206.6" y2="170" stroke="#d4c4a8" strokeWidth="0.3" />
            <line x1="33.4" y1="170" x2="206.6" y2="70" stroke="#d4c4a8" strokeWidth="0.3" />
            
            {/* Outer hexagon */}
            <polygon 
              points="120,20 206.6,70 206.6,170 120,220 33.4,170 33.4,70" 
              fill="none" 
              stroke="#d4c4a8" 
              strokeWidth="0.4" 
            />
            {/* Inner hexagon */}
            <polygon 
              points="120,50 177.9,85 177.9,155 120,190 62.1,155 62.1,85" 
              fill="none" 
              stroke="#d4c4a8" 
              strokeWidth="0.3" 
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sacred-grid)" />
      </svg>

      {/* Horizontal lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-foreground/10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-foreground/10" />
      <div className="absolute top-1/4 left-0 w-full h-px bg-foreground/5" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-foreground/[0.03]" />
      <div className="absolute top-3/4 left-0 w-full h-px bg-foreground/5" />

      {/* Corner arcs - top left */}
      <svg className="absolute top-0 left-0 w-48 h-48" style={{ opacity: 0.12 }} viewBox="0 0 200 200">
        <circle cx="0" cy="0" r="180" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="140" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="100" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
      </svg>

      {/* Corner arcs - top right */}
      <svg className="absolute top-0 right-0 w-48 h-48" style={{ opacity: 0.12 }} viewBox="0 0 200 200">
        <circle cx="200" cy="0" r="180" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
        <circle cx="200" cy="0" r="140" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
        <circle cx="200" cy="0" r="100" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
        <circle cx="200" cy="0" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
      </svg>

      {/* Corner arcs - bottom left */}
      <svg className="absolute bottom-0 left-0 w-48 h-48" style={{ opacity: 0.12 }} viewBox="0 0 200 200">
        <circle cx="0" cy="200" r="180" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
        <circle cx="0" cy="200" r="140" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
        <circle cx="0" cy="200" r="100" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
        <circle cx="0" cy="200" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
      </svg>

      {/* Corner arcs - bottom right */}
      <svg className="absolute bottom-0 right-0 w-48 h-48" style={{ opacity: 0.12 }} viewBox="0 0 200 200">
        <circle cx="200" cy="200" r="180" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
      </svg>

      {/* Central mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]">
        <svg viewBox="0 0 400 400" className="w-full h-full" style={{ opacity: 0.06 }}>
          {/* Flower of Life base circles */}
          <circle cx="200" cy="200" r="180" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="90" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="30" fill="none" stroke="#d4c4a8" strokeWidth="0.5" />
          
          {/* Cross lines */}
          <line x1="20" y1="200" x2="380" y2="200" stroke="#d4c4a8" strokeWidth="0.4" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="#d4c4a8" strokeWidth="0.4" />
          <line x1="72" y1="72" x2="328" y2="328" stroke="#d4c4a8" strokeWidth="0.3" />
          <line x1="328" y1="72" x2="72" y2="328" stroke="#d4c4a8" strokeWidth="0.3" />
          
          {/* Additional radial lines */}
          <line x1="200" y1="20" x2="200" y2="380" stroke="#d4c4a8" strokeWidth="0.2" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="#d4c4a8" strokeWidth="0.2" />
          <line x1="47" y1="107" x2="353" y2="293" stroke="#d4c4a8" strokeWidth="0.2" />
          <line x1="47" y1="293" x2="353" y2="107" stroke="#d4c4a8" strokeWidth="0.2" />
          <line x1="107" y1="47" x2="293" y2="353" stroke="#d4c4a8" strokeWidth="0.2" />
          <line x1="293" y1="47" x2="107" y2="353" stroke="#d4c4a8" strokeWidth="0.2" />
          
          {/* Inner flower petals */}
          <circle cx="200" cy="140" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.3" />
          <circle cx="200" cy="260" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.3" />
          <circle cx="140" cy="200" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.3" />
          <circle cx="260" cy="200" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.3" />
          <circle cx="157" cy="157" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.3" />
          <circle cx="243" cy="157" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.3" />
          <circle cx="157" cy="243" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.3" />
          <circle cx="243" cy="243" r="60" fill="none" stroke="#d4c4a8" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
