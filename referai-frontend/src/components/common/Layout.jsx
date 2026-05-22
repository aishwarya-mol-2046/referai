import Navbar from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, setPage, currentPage }) => {
  return (
    <div className="flex bg-canvas" style={{ backgroundColor: "#090D16" }}>
      <Sidebar setPage={setPage} currentPage={currentPage} />

      <div className="flex-1">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;