import { useState } from "react";
import { toast } from "react-hot-toast";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaLock,
    FaBell,
    FaEye,
    FaSave,
    FaCheckCircle,
} from "react-icons/fa";

const JobSeekerSettings = () => {
    // Account Information State
    const [profileData, setProfileData] = useState({
        fullName: "Mervyn Maina",
        email: "mervyn@dev.co.ke",
        phone: "+254 712 345 678",
        location: "Nairobi, Kenya",
        jobSearchStatus: "Actively Looking", // 'Actively Looking', 'Open to Offers', 'Not Available'
    });

    // Password / Security State
    const [securityData, setSecurityData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    // Notification Preferences
    const [notifications, setNotifications] = useState({
        emailJobAlerts: true,
        emailApplicationUpdates: true,
        newsletter: false,
    });

    const [loading, setLoading] = useState(false);

    // Profile Change Handler
    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    // Security Change Handler
    const handleSecurityChange = (e) => {
        const { name, value } = e.target;
        setSecurityData((prev) => ({ ...prev, [name]: value }));
    };

    // Notification Toggle Handler
    const handleNotificationToggle = (key) => {
        setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    // Save Settings Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Password validation if changed
        if (securityData.newPassword || securityData.confirmPassword) {
            if (securityData.newPassword !== securityData.confirmPassword) {
                toast.error("New passwords do not match.");
                return;
            }
            if (securityData.newPassword.length < 6) {
                toast.error("Password must be at least 6 characters.");
                return;
            }
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSecurityData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
            toast.success("Account settings updated successfully!");
        }, 800);
    };

    return (
        <div className="container-fluid p-0">
            {/* Title Header */}
            <div className="mb-4">
                <h3 className="fw-bold text-dark mb-1">Account & Privacy Settings</h3>
                <p className="text-muted small mb-0">
                    Manage your contact credentials, job search visibility status, and account security.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Personal Details & Job Availability */}
                <div className="card border-0 shadow-sm bg-body p-4 rounded-3 mb-4">
                    <h5 className="fw-semibold text-dark d-flex align-items-center gap-2 mb-3">
                        <FaUser className="text-primary" /> Personal Credentials
                    </h5>

                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={profileData.fullName}
                                onChange={handleProfileChange}
                                className="form-control"
                                placeholder="Enter full name"
                                required
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleProfileChange}
                                className="form-control"
                                placeholder="Enter email address"
                                required
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={profileData.phone}
                                onChange={handleProfileChange}
                                className="form-control"
                                placeholder="Enter phone number"
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Current Location</label>
                            <input
                                type="text"
                                name="location"
                                value={profileData.location}
                                onChange={handleProfileChange}
                                className="form-control"
                                placeholder="e.g. Nairobi, Kenya"
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Job Search Availability</label>
                            <select
                                name="jobSearchStatus"
                                value={profileData.jobSearchStatus}
                                onChange={handleProfileChange}
                                className="form-select"
                            >
                                <option value="Actively Looking">Actively Looking (Visible to Employers)</option>
                                <option value="Open to Offers">Open to Offers (Passive)</option>
                                <option value="Not Available">Not Available (Hidden)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Security & Password Change */}
                <div className="card border-0 shadow-sm bg-body p-4 rounded-3 mb-4">
                    <h5 className="fw-semibold text-dark d-flex align-items-center gap-2 mb-3">
                        <FaLock className="text-primary" /> Security & Password
                    </h5>

                    <div className="row g-3">
                        <div className="col-12 col-md-4">
                            <label className="form-label fw-semibold">Current Password</label>
                            <input
                                type="password"
                                name="currentPassword"
                                value={securityData.currentPassword}
                                onChange={handleSecurityChange}
                                className="form-control"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="col-12 col-md-4">
                            <label className="form-label fw-semibold">New Password</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={securityData.newPassword}
                                onChange={handleSecurityChange}
                                className="form-control"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="col-12 col-md-4">
                            <label className="form-label fw-semibold">Confirm New Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={securityData.confirmPassword}
                                onChange={handleSecurityChange}
                                className="form-control"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>
                </div>

                {/* Notification Preferences */}
                <div className="card border-0 shadow-sm bg-body p-4 rounded-3 mb-4">
                    <h5 className="fw-semibold text-dark d-flex align-items-center gap-2 mb-3">
                        <FaBell className="text-primary" /> Email Alerts & Notifications
                    </h5>

                    <div className="d-flex flex-column gap-3">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="emailJobAlerts"
                                checked={notifications.emailJobAlerts}
                                onChange={() => handleNotificationToggle("emailJobAlerts")}
                            />
                            <label className="form-check-label fw-semibold text-dark" htmlFor="emailJobAlerts">
                                Receive New Matching Job Alerts
                            </label>
                            <div className="form-text">Get notified when new jobs match your skills and location preferences.</div>
                        </div>

                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="emailApplicationUpdates"
                                checked={notifications.emailApplicationUpdates}
                                onChange={() => handleNotificationToggle("emailApplicationUpdates")}
                            />
                            <label className="form-check-label fw-semibold text-dark" htmlFor="emailApplicationUpdates">
                                Application Status Updates
                            </label>
                            <div className="form-text">Instant email notifications when an employer reviews or shortlists your submission.</div>
                        </div>
                    </div>
                </div>

                {/* Submit Action Bar */}
                <div className="d-flex justify-content-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn text-white px-4 py-2 d-inline-flex align-items-center gap-2 shadow-sm"
                        style={{ backgroundColor: "#1E293B" }}
                    >
                        <FaSave />
                        <span>{loading ? "Saving..." : "Save Settings"}</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobSeekerSettings;