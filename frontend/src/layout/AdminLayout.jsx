import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavBar from "../components/DashboardNavBar";
import SideBar from "../components/SideBar";

// Icons
import { AiOutlineDashboard } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { FaUsers, FaBriefcase, FaCog } from "react-icons/fa";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const adminLinks = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <AiOutlineDashboard />,
    },
    {
      name: "Employers",
      path: "/admin/employers",
      icon: <GrUserManager />,
    },
    {
      name: "Job Seekers",
      path: "/admin/job-seekers",
      icon: <FaUsers />,
    },
    {
      name: "Jobs",
      path: "/admin/jobs",
      icon: <FaBriefcase />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div className="d-flex vh-100 overflow-hidden bg-light">
      {/* Sidebar Section */}
      <aside
        className={`bg-primary text-light transition-all shadow-sm ${isSidebarOpen ? "d-block" : "d-none d-md-block"
          }`}
        style={{
          width: "260px",
          minWidth: "260px",
          backgroundColor: "#3368A0",
          zIndex: 1000,
        }}
      >
        <SideBar links={adminLinks} title="Admin Dashboard" />
      </aside>

      {/* Main Content Area */}
      <div className="d-flex flex-column flex-grow-1 h-100 overflow-hidden">
        {/* Top Navbar */}
        <header
          className="shadow-sm p-3 text-white"
          style={{ backgroundColor: "#66A3BF" }}
        >
          <DashboardNavBar onToggleSidebar={toggleSidebar} />
        </header>

        {/* Dynamic Outlet Body */}
        <main className="flex-grow-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;