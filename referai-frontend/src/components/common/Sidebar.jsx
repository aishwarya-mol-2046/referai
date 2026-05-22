const Sidebar = ({ setPage, currentPage }) => {
  const isActive = (pageName) => currentPage === pageName;

  return (
    <div className="w-64 h-screen bg-card-surface bg-opacity-70 backdrop-blur-md p-6 border-r border-slate-900 flex flex-col" style={{ borderRightColor: "rgba(226, 232, 240, 0.06)" }}>
      <h2 className="text-lg font-semibold text-white mb-8 tracking-tight">Navigation</h2>

      <ul className="space-y-3 flex-1">
        <li
          onClick={() => setPage("recruiter")}
          className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-200 ${
            isActive("recruiter")
              ? "text-white font-bold bg-canvas"
              : "text-muted-secondary hover:text-white hover:bg-canvas"
          }`}
        >
          🏢 Recruiter Dashboard
        </li>

        <li
          onClick={() => setPage("employee")}
          className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-200 ${
            isActive("employee")
              ? "text-white font-bold bg-canvas"
              : "text-muted-secondary hover:text-white hover:bg-canvas"
          }`}
        >
          🧑‍💼 Employee View
        </li>

        <li
          onClick={() => setPage("student")}
          className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-200 ${
            isActive("student")
              ? "text-white font-bold bg-canvas"
              : "text-muted-secondary hover:text-white hover:bg-canvas"
          }`}
        >
          🎓 Student Portal
        </li>
      </ul>

      {/* Footer Info */}
      <div className="pt-6 border-t border-slate-900" style={{ borderTopColor: "rgba(226, 232, 240, 0.06)" }}>
        <p className="text-xs text-muted-secondary">Network Equity Engine v1.0</p>
        <p className="text-xs text-muted-secondary mt-1">Institutional-Grade Talent Intelligence</p>
      </div>
    </div>
  );
};

export default Sidebar;