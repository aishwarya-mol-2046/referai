const Header = () => {
  return (
    <div className="w-full h-16 bg-canvas flex items-center justify-between px-8 border-b border-slate-900" style={{ borderRightColor: "rgba(226, 232, 240, 0.06)" }}>
      {/* Logo & Branding */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">N</span>
        </div>
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-white">Network Equity Engine</h1>
          <p className="text-xs text-muted-secondary">Institutional Talent Intelligence</p>
        </div>
      </div>

      {/* System Status Indicator */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-card-surface bg-opacity-70 backdrop-blur-md" style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs text-muted-primary">System Active</span>
        </div>
      </div>
    </div>
  );
};

export default Header;