import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaBars,
    FaBell,
    FaSignOutAlt
} from "react-icons/fa";

const DashboardNavBar = ({
    user = { name: "Mervyn", role: "admin" },
    onSidebarToggle,
    onLogout
}) => {
    const navigate = useNavigate();

    // Role Configuration Mapping
    const roleConfig = {
        admin: {
            badgeClass: "bg-danger text-white",
            subtitle: "One central place to manage platform operations and user data.",
        },
        employer: {
            badgeClass: "bg-primary text-white",
            subtitle: "Manage your active job postings and track applicant submissions.",
        },
        seeker: {
            badgeClass: "bg-success text-white",
            subtitle: "Track your job applications and explore new opportunities.",
        },
    };

    const currentRole = roleConfig[user.role?.toLowerCase()] || roleConfig.admin;

    const handleLogout = () => {
        if (onLogout) {
            onLogout();
        } else {
            navigate("/login");
        }
    };

    return (
        <nav className="d-flex align-items-center justify-content-between w-100">
            {/* Left Area: Mobile Sidebar Trigger & Greeting */}
            <div className="d-flex align-items-center gap-3">
                {/* Mobile Hamburger Toggle */}
                <button
                    onClick={onSidebarToggle}
                    className="btn btn-link text-white p-0 d-md-none border-0 shadow-none fs-4"
                    aria-label="Toggle navigation menu"
                >
                    <FaBars />
                </button>

                <div>
                    <div className="d-flex align-items-center gap-2">
                        <h5 className="fw-bold mb-0 text-white">
                            Welcome back, {user.name || "User"} 👋
                        </h5>
                        <span className={`badge rounded-pill text-uppercase px-2.5 py-1 ${currentRole.badgeClass}`} style={{ fontSize: "0.7rem" }}>
                            {user.role || "Admin"}
                        </span>
                    </div>
                    <p className="small mb-0 text-white opacity-75 d-none d-sm-block mt-1">
                        {currentRole.subtitle}
                    </p>
                </div>
            </div>

            {/* Right Area: Notifications, User Avatar & Logout */}
            <div className="d-flex align-items-center gap-2 gap-sm-3">
                {/* Notifications Icon Button */}
                <button
                    className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-2 border-0 position-relative"
                    style={{ width: "38px", height: "38px", backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    title="Notifications"
                >
                    <FaBell className="text-white fs-5" />
                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                        <span className="visually-hidden">New notifications</span>
                    </span>
                </button>

                {/* Divider */}
                <div className="vr bg-white opacity-25 d-none d-sm-block" style={{ height: "24px" }}></div>

                {/* User Profile Info & Logout Action */}
                <div className="d-flex align-items-center gap-2">
                    <div className="d-none d-lg-block text-end">
                        <div className="fw-semibold text-white small leading-tight">{user.name}</div>
                        <div className="text-white opacity-75 small" style={{ fontSize: "0.75rem" }}>
                            {user.email || "mervyn@skillbridge.co.ke"}
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="btn text-white d-inline-flex align-items-center gap-2 px-3 py-2 rounded-3 shadow-sm font-medium border-0"
                        style={{
                            backgroundColor: "#790D16",
                            transition: "all 0.2s ease-in-out",
                        }}
                    >
                        <FaSignOutAlt />
                        <span className="d-none d-sm-inline">Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavBar;