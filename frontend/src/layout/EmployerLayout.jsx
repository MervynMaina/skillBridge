import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashboardNavBar from "../components/DashboardNavBar";

// Icons
import { AiFillDashboard } from "react-icons/ai";
import { FaFolderPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoMdCog } from "react-icons/io";

const EmployerLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const employerLinks = [
        {
            name: "Dashboard",
            path: "/employer",
            icon: <AiFillDashboard />,
        },
        {
            name: "Post Job",
            path: "/employer/create-job",
            icon: <FaFolderPlus />,
        },
        {
            name: "Applicants",
            path: "/employer/applicants",
            icon: <FaUsers />,
        },
        {
            name: "Settings",
            path: "/employer/settings",
            icon: <IoMdCog />,
        },
    ];

    return (
        <div className="d-flex vh-100 overflow-hidden bg-light">
            {/* Sidebar Container */}
            <aside
                className={`text-white transition-all shadow-sm ${isSidebarOpen ? "d-block" : "d-none d-md-block"
                    }`}
                style={{
                    width: "280px",
                    minWidth: "280px",
                    backgroundColor: "#790D16", // Primary Accent Color
                    zIndex: 1000,
                }}
            >
                <SideBar links={employerLinks} title="Employer Portal" />
            </aside>

            {/* Main Content & Navbar Container */}
            <div className="d-flex flex-column flex-grow-1 h-100 overflow-hidden">
                {/* Top Navbar Header */}
                <header
                    className="shadow-sm px-4 py-3 d-flex align-items-center"
                    style={{
                        backgroundColor: "#AEC4D4",
                        color: "#0F172A",
                        minHeight: "80px",
                    }}
                >
                    <DashboardNavBar
                        user={{ name: "Employer Portal", role: "employer" }}
                        onSidebarToggle={toggleSidebar}
                    />
                </header>

                {/* Dynamic Nested Page Content Area */}
                <main className="flex-grow-1 p-4 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default EmployerLayout;