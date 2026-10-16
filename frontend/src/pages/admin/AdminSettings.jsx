import { useState } from "react";
import {
    FaSlidersH,
    FaShieldAlt,
    FaBell,
    FaBriefcase,
    FaSave,
    FaCheckCircle,
} from "react-icons/fa";

const AdminSettings = () => {
    // Active Tab State
    const [activeTab, setActiveTab] = useState("general");
    const [savedAlert, setSavedAlert] = useState(false);

    // Settings Form State
    const [generalSettings, setGeneralSettings] = useState({
        siteName: "SkillBridge",
        supportEmail: "support@skillbridge.co.ke",
        maxJobsPerEmployer: 10,
        maintenanceMode: false,
    });

    const [securitySettings, setSecuritySettings] = useState({
        requireEmailVerification: true,
        twoFactorAdmin: false,
        sessionTimeoutMinutes: 30,
    });

    const [notificationSettings, setNotificationSettings] = useState({
        emailOnNewEmployer: true,
        emailOnJobReport: true,
        weeklyDigest: false,
    });

    const [moderationSettings, setModerationSettings] = useState({
        autoApproveJobs: false,
        flagKeywordFilter: "scam, wire transfer, send money, crypto fee",
        allowGuestJobBrowsing: true,
    });

    // Save Handler
    const handleSave = (e) => {
        e.preventDefault();
        setSavedAlert(true);
        setTimeout(() => setSavedAlert(false), 3000);
    };

    return (
        <div className="container-fluid p-0">
            {/* Title Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="fw-bold text-dark mb-1">System Settings</h3>
                    <p className="text-muted small mb-0">
                        Manage global platform configurations, security policies, and moderation rules.
                    </p>
                </div>
            </div>

            {/* Success Save Alert */}
            {savedAlert && (
                <div className="alert alert-success d-flex align-items-center gap-2 shadow-sm mb-4" role="alert">
                    <FaCheckCircle className="fs-5" />
                    <span>Settings saved successfully!</span>
                </div>
            )}

            {/* Settings Navigation Tabs */}
            <div className="card border-0 shadow-sm bg-body">
                <div className="card-header bg-transparent border-bottom p-0">
                    <ul className="nav nav-tabs card-header-tabs m-0 border-0">
                        <li className="nav-item">
                            <button
                                className={`nav-link py-3 px-4 fw-semibold border-0 rounded-0 d-flex align-items-center gap-2 ${activeTab === "general" ? "active border-bottom border-primary border-3" : "text-secondary"
                                    }`}
                                onClick={() => setActiveTab("general")}
                            >
                                <FaSlidersH /> General
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link py-3 px-4 fw-semibold border-0 rounded-0 d-flex align-items-center gap-2 ${activeTab === "security" ? "active border-bottom border-primary border-3" : "text-secondary"
                                    }`}
                                onClick={() => setActiveTab("security")}
                            >
                                <FaShieldAlt /> Security & Auth
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link py-3 px-4 fw-semibold border-0 rounded-0 d-flex align-items-center gap-2 ${activeTab === "notifications" ? "active border-bottom border-primary border-3" : "text-secondary"
                                    }`}
                                onClick={() => setActiveTab("notifications")}
                            >
                                <FaBell /> Notifications
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link py-3 px-4 fw-semibold border-0 rounded-0 d-flex align-items-center gap-2 ${activeTab === "moderation" ? "active border-bottom border-primary border-3" : "text-secondary"
                                    }`}
                                onClick={() => setActiveTab("moderation")}
                            >
                                <FaBriefcase /> Moderation Rules
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Tab Content Body */}
                <div className="card-body p-4">
                    <form onSubmit={handleSave}>
                        {/* GENERAL SETTINGS TAB */}
                        {activeTab === "general" && (
                            <div className="row g-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-semibold">Platform Title / Brand Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={generalSettings.siteName}
                                        onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-semibold">Support Contact Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={generalSettings.supportEmail}
                                        onChange={(e) => setGeneralSettings({ ...generalSettings, supportEmail: e.target.value })}
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-semibold">Max Free Postings per Employer</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={generalSettings.maxJobsPerEmployer}
                                        onChange={(e) => setGeneralSettings({ ...generalSettings, maxJobsPerEmployer: Number(e.target.value) })}
                                    />
                                </div>

                                <div className="col-12">
                                    <div className="form-check form-switch mt-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="maintenanceSwitch"
                                            checked={generalSettings.maintenanceMode}
                                            onChange={(e) => setGeneralSettings({ ...generalSettings, maintenanceMode: e.target.checked })}
                                        />
                                        <label className="form-check-label fw-semibold" htmlFor="maintenanceSwitch">
                                            Enable System Maintenance Mode
                                        </label>
                                        <div className="form-text">
                                            When enabled, non-admin users will see a banner informing them of scheduled updates.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* SECURITY SETTINGS TAB */}
                        {activeTab === "security" && (
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="form-check form-switch mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="verifyEmailSwitch"
                                            checked={securitySettings.requireEmailVerification}
                                            onChange={(e) => setSecuritySettings({ ...securitySettings, requireEmailVerification: e.target.checked })}
                                        />
                                        <label className="form-check-label fw-semibold" htmlFor="verifyEmailSwitch">
                                            Require Mandatory Email Verification
                                        </label>
                                        <div className="form-text">New registrations must verify their email before applying or posting jobs.</div>
                                    </div>

                                    <div className="form-check form-switch mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="2faSwitch"
                                            checked={securitySettings.twoFactorAdmin}
                                            onChange={(e) => setSecuritySettings({ ...securitySettings, twoFactorAdmin: e.target.checked })}
                                        />
                                        <label className="form-check-label fw-semibold" htmlFor="2faSwitch">
                                            Require 2-Factor Authentication (2FA) for Admins
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-semibold">Admin Session Inactivity Timeout (Minutes)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={securitySettings.sessionTimeoutMinutes}
                                        onChange={(e) => setSecuritySettings({ ...securitySettings, sessionTimeoutMinutes: Number(e.target.value) })}
                                    />
                                </div>
                            </div>
                        )}

                        {/* NOTIFICATIONS SETTINGS TAB */}
                        {activeTab === "notifications" && (
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="form-check form-switch mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="emailEmployerSwitch"
                                            checked={notificationSettings.emailOnNewEmployer}
                                            onChange={(e) => setNotificationSettings({ ...notificationSettings, emailOnNewEmployer: e.target.checked })}
                                        />
                                        <label className="form-check-label fw-semibold" htmlFor="emailEmployerSwitch">
                                            Email Alert on New Employer Registration
                                        </label>
                                    </div>

                                    <div className="form-check form-switch mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="jobReportSwitch"
                                            checked={notificationSettings.emailOnJobReport}
                                            onChange={(e) => setNotificationSettings({ ...notificationSettings, emailOnJobReport: e.target.checked })}
                                        />
                                        <label className="form-check-label fw-semibold" htmlFor="jobReportSwitch">
                                            Instant Email Alert on Flagged / Reported Jobs
                                        </label>
                                    </div>

                                    <div className="form-check form-switch mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="digestSwitch"
                                            checked={notificationSettings.weeklyDigest}
                                            onChange={(e) => setNotificationSettings({ ...notificationSettings, weeklyDigest: e.target.checked })}
                                        />
                                        <label className="form-check-label fw-semibold" htmlFor="digestSwitch">
                                            Receive Weekly Platform Metrics Digest
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* MODERATION SETTINGS TAB */}
                        {activeTab === "moderation" && (
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="form-check form-switch mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="autoApproveSwitch"
                                            checked={moderationSettings.autoApproveJobs}
                                            onChange={(e) => setModerationSettings({ ...moderationSettings, autoApproveJobs: e.target.checked })}
                                        />
                                        <label className="form-check-label fw-semibold" htmlFor="autoApproveSwitch">
                                            Auto-Approve Jobs from Verified Employers
                                        </label>
                                        <div className="form-text">If disabled, all job postings require manual admin approval before going live.</div>
                                    </div>

                                    <div className="form-check form-switch mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="guestBrowsingSwitch"
                                            checked={moderationSettings.allowGuestJobBrowsing}
                                            onChange={(e) => setModerationSettings({ ...moderationSettings, allowGuestJobBrowsing: e.target.checked })}
                                        />
                                        <label className="form-check-label fw-semibold" htmlFor="guestBrowsingSwitch">
                                            Allow Unauthenticated Visitors to Browse Jobs
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold">Auto-Flag Keywords (Comma-separated)</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={moderationSettings.flagKeywordFilter}
                                        onChange={(e) => setModerationSettings({ ...moderationSettings, flagKeywordFilter: e.target.value })}
                                    ></textarea>
                                    <div className="form-text">Jobs containing these terms will automatically be held for admin review.</div>
                                </div>
                            </div>
                        )}

                        {/* Submit Bar */}
                        <div className="pt-4 mt-4 border-top d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-2 shadow-sm px-4">
                                <FaSave /> Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;