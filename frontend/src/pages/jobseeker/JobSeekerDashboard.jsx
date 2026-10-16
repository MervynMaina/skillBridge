import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaBriefcase,
    FaCheckCircle,
    FaEye,
    FaBookmark,
    FaSearch,
    FaMapMarkerAlt,
    FaArrowRight,
    FaUserGraduate
} from "react-icons/fa";

const JobSeekerDashboard = () => {
    // Mock Stats State
    const [stats] = useState({
        appliedCount: 8,
        shortlistedCount: 3,
        profileViews: 42,
        savedJobsCount: 5,
        profileCompletion: 85,
    });

    // Recent Applications
    const [recentApplications] = useState([
        {
            id: "app-1",
            jobTitle: "Senior Python Developer",
            company: "TechCorp Innovations",
            location: "San Francisco, CA (Remote)",
            dateApplied: "2026-03-10",
            status: "Shortlisted",
            statusBadge: "bg-success-subtle text-success border border-success-subtle",
        },
        {
            id: "app-2",
            jobTitle: "Android Developer (Kotlin)",
            company: "GGCourierGo",
            location: "Nairobi, Kenya",
            dateApplied: "2026-03-12",
            status: "Under Review",
            statusBadge: "bg-warning-subtle text-warning-emphasis border border-warning-subtle",
        },
        {
            id: "app-3",
            jobTitle: "Full-Stack Web Developer",
            company: "AfriTech Logistics",
            location: "Nairobi, Kenya",
            dateApplied: "2026-03-01",
            status: "Submitted",
            statusBadge: "bg-secondary-subtle text-secondary border border-secondary-subtle",
        },
    ]);

    // Recommended Jobs List
    const [recommendedJobs] = useState([
        {
            id: "rec-1",
            title: "Backend Engineer (Python / Django)",
            company: "CloudScale Solutions",
            location: "Nairobi, Kenya",
            type: "Full-Time",
            salary: "KES 140,000 - 180,000",
            posted: "1 day ago",
        },
        {
            id: "rec-2",
            title: "Mobile App Developer (Kotlin / Firebase)",
            company: "FinTech Flow",
            location: "Remote",
            type: "Contract",
            salary: "$2,500 / month",
            posted: "2 days ago",
        },
    ]);

    return (
        <div className="container-fluid p-0">
            {/* Welcome & Search Banner */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
                <div>
                    <h3 className="fw-bold text-dark mb-1">Candidate Dashboard</h3>
                    <p className="text-muted small mb-0">
                        Welcome back! Here is an overview of your active applications and recommended positions.
                    </p>
                </div>

                <Link
                    to="/all-jobs"
                    className="btn text-white d-inline-flex align-items-center gap-2 shadow-sm"
                    style={{ backgroundColor: "#1E293B" }}
                >
                    <FaSearch /> Explore All Jobs
                </Link>
            </div>

            {/* Metrics Row */}
            <div className="row g-3 mb-4">
                {/* Applications Metric */}
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Applied Jobs</span>
                                <h3 className="fw-bold text-dark m-0 mt-1">{stats.appliedCount}</h3>
                            </div>
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                                <FaBriefcase className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shortlisted Metric */}
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Shortlisted</span>
                                <h3 className="fw-bold text-success m-0 mt-1">{stats.shortlistedCount}</h3>
                            </div>
                            <div className="bg-success bg-opacity-10 p-3 rounded-circle text-success">
                                <FaCheckCircle className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Views Metric */}
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Profile Views</span>
                                <h3 className="fw-bold text-info m-0 mt-1">{stats.profileViews}</h3>
                            </div>
                            <div className="bg-info bg-opacity-10 p-3 rounded-circle text-info">
                                <FaEye className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Saved Jobs Metric */}
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Saved Jobs</span>
                                <h3 className="fw-bold text-warning m-0 mt-1">{stats.savedJobsCount}</h3>
                            </div>
                            <div className="bg-warning bg-opacity-10 p-3 rounded-circle text-warning">
                                <FaBookmark className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Setup Completion Card */}
            <div className="card border-0 shadow-sm bg-body p-4 rounded-3 mb-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                    <div className="d-flex align-items-center gap-3">
                        <div className="bg-primary text-white rounded-circle p-3 d-none d-sm-flex">
                            <FaUserGraduate className="fs-4" />
                        </div>
                        <div>
                            <h6 className="fw-bold text-dark mb-1">
                                Profile Setup Status: {stats.profileCompletion}%
                            </h6>
                            <p className="text-muted small mb-0">
                                A complete profile increases recruiter contact rates by up to 3x.
                            </p>
                        </div>
                    </div>
                    <Link
                        to="/job-seeker/skills"
                        className="btn btn-sm btn-outline-primary fw-semibold"
                    >
                        Update Skills & Resume
                    </Link>
                </div>
                <div className="progress mt-3" style={{ height: "8px" }}>
                    <div
                        className="progress-bar bg-success rounded-pill"
                        role="progressbar"
                        style={{ width: `${stats.profileCompletion}%` }}
                        aria-valuenow={stats.profileCompletion}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>

            {/* Main Grid Section */}
            <div className="row g-3">
                {/* Recent Applications Table */}
                <div className="col-12 col-lg-7">
                    <div className="card border-0 shadow-sm bg-body h-100">
                        <div className="card-header bg-transparent border-bottom py-3 d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold text-dark mb-0">Recent Applications</h5>
                            <Link
                                to="/job-seeker/applications"
                                className="small text-decoration-none fw-semibold"
                            >
                                View All
                            </Link>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="ps-3">Role & Company</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentApplications.map((app) => (
                                        <tr key={app.id}>
                                            <td className="ps-3">
                                                <div className="fw-bold text-dark">{app.jobTitle}</div>
                                                <small className="text-muted">{app.company}</small>
                                            </td>
                                            <td className="text-muted small">{app.dateApplied}</td>
                                            <td>
                                                <span className={`badge rounded-pill px-2.5 py-1.5 ${app.statusBadge}`}>
                                                    {app.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Recommended Jobs */}
                <div className="col-12 col-lg-5">
                    <div className="card border-0 shadow-sm bg-body h-100">
                        <div className="card-header bg-transparent border-bottom py-3 d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold text-dark mb-0">Recommended for You</h5>
                            <Link to="/all-jobs" className="small text-decoration-none fw-semibold">
                                Browse
                            </Link>
                        </div>
                        <div className="card-body p-3">
                            <div className="d-flex flex-column gap-3">
                                {recommendedJobs.map((job) => (
                                    <div key={job.id} className="p-3 border rounded-3 bg-body-tertiary">
                                        <div className="d-flex justify-content-between align-items-start mb-1">
                                            <h6 className="fw-bold text-dark mb-0">{job.title}</h6>
                                            <span className="badge bg-primary-subtle text-primary">{job.type}</span>
                                        </div>
                                        <p className="text-muted small mb-2">{job.company}</p>
                                        <div className="d-flex flex-wrap align-items-center justify-content-between small text-muted">
                                            <span className="d-flex align-items-center gap-1">
                                                <FaMapMarkerAlt className="text-danger opacity-75" /> {job.location}
                                            </span>
                                            <span className="fw-semibold text-dark">{job.salary}</span>
                                        </div>
                                        <div className="mt-3 text-end">
                                            <Link
                                                to={`/job-details/${job.id}`}
                                                className="btn btn-sm btn-primary d-inline-flex align-items-center gap-1"
                                            >
                                                Apply <FaArrowRight className="fs-8" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobSeekerDashboard;