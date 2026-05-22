import { useState } from "react";
import Layout from "./components/common/Layout";
import Student from "./pages/Student";
import Employee from "./pages/Employee";
import Recruiter from "./pages/Recruiter";

function App() {
  const [page, setPage] = useState("student");

  const renderPage = () => {
    if (page === "student") return <Student />;
    if (page === "employee") return <Employee />;
    if (page === "recruiter") return <Recruiter />;
  };

  return (
    <Layout setPage={setPage} currentPage={page}>
      {renderPage()}
    </Layout>
  );
}

export default App;