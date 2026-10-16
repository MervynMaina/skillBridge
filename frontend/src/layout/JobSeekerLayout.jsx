import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashboardNavBar from "../components/DashboardNavBar";

// Icons for Job Seeker Navigation
import { AiFillDashboard } from "react-icons/ai";
import { FaBriefcase, FaGraduationCap, FaQuestionCircle } from "react-icons/fa";
import { IoMdCog } from "react-icons/io";

const JobSeekerLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    // Links matching App.jsx routes for /job-seeker
    const seekerLinks = [
        {
            name: "Dashboard",
            path: "/job-seeker",
            icon: <AiFillDashboard />,
        },
        {
            name: "Applied Jobs",
            path: "/job-seeker/applications",
            icon: <FaBriefcase />,
        },
        {
            name: "Skills & Profile",
            path: "/job-seeker/skills",
            icon: <FaGraduationCap />,
        },
        {
            name: "Settings",
            path: "/job-seeker/settings",
            icon: <IoMdCog />,
        },
        {
            name: "Help & Support",
            path: "/job-seeker/help",
            icon: <FaQuestionCircle />,
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
                    backgroundColor: "#1E293B", // Slate Navy Accent
                    zIndex: 1000,
                }}
            >
                <SideBar links={seekerLinks} title="Job Seeker Portal" />
            </aside>

            {/* Main Content & Top Navbar Container */}
            <div className="d-flex flex-column flex-grow-1 h-100 overflow-hidden">
                {/* Top Navbar Header */}
                <header
                    className="shadow-sm px-4 py-3 d-flex align-items-center"
                    style={{
                        backgroundColor: "#0F172A",
                        color: "#FFFFFF",
                        minHeight: "80px",
                    }}
                >
                    <DashboardNavBar
                        user={{ name: "Mervyn Maina", role: "seeker" }}
                        onSidebarToggle={toggleSidebar}
                    />
                </header>

                {/* Dynamic Nested Page Content Area */}
                <main className="flex-grow-1 p-4 overflow-y-auto bg-light">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default JobSeekerLayout;