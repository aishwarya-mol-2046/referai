import { useEffect, useState } from "react";
import Layout from "./components/common/Layout";
import Auth from "./pages/Auth";
import Jobs from "./pages/Jobs";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Student from "./pages/Student";

function App() {
  const [view, setView] = useState("landing");
  const [authMode, setAuthMode] = useState("login");
  const [page, setPage] = useState("opportunities");
  const [pendingJobDesc, setPendingJobDesc] = useState("");
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("referai-theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("referai-theme", theme);
  }, [theme]);

  const openAuth = (mode) => {
    setAuthMode(mode);
    setView("auth");
  };

  const handleAuth = (account) => {
    setUser(account);
    setPage("opportunities");
    setView("app");
  };

  const handleUserUpdate = (updatedUser) => setUser(updatedUser);

  const logout = () => {
    setUser(null);
    setView("landing");
  };

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  if (view === "landing") {
    return <Landing onAuth={openAuth} theme={theme} onToggleTheme={toggleTheme} />;
  }

  if (view === "auth") {
    return (
      <Auth
        mode={authMode}
        onSubmit={handleAuth}
        onBack={() => setView("landing")}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    );
  }

  return (
    <Layout
      setPage={setPage}
      currentPage={page}
      user={user}
      onLogout={logout}
      theme={theme}
      onToggleTheme={toggleTheme}
    >
      <div className={page === "opportunities" ? "" : "hidden"}>
        <Student user={user} pendingJobDesc={pendingJobDesc} onClearPendingJobDesc={() => setPendingJobDesc("")} />
      </div>
      <div className={page === "jobs" ? "" : "hidden"}>
        <Jobs user={user} onFindReferrer={(desc) => { setPendingJobDesc(desc); setPage("opportunities"); }} />
      </div>
      <div className={page === "profile" ? "" : "hidden"}>
        <Profile user={user} onUserUpdate={handleUserUpdate} />
      </div>
    </Layout>
  );
}

export default App;
