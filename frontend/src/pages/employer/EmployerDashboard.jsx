import { useState } from "react";
import { Link } from "react-router-dom";
import {
    MdWork,
    MdPeople,
    MdAddCircleOutline,
    MdCheckCircle,
    MdRemoveRedEye,
    MdArrowForward
} from "react-icons/md";
import { FaBuilding, FaUserCheck } from "react-icons/fa";

const EmployerDashboard = () => {
    // Mock metrics and state (Replace with JSON Server endpoint calls in production)
    const [dashboardStats] = useState({
        activeJobs: 4,
        totalApplicants: 32,
        shortlisted: 8,
        profileViews: 145,
    });

    const [postedJobs] = useState([
        {
            id: "1",
            title: "Senior Python Developer",
            type: "Full-Time",
            applicants: 14,
            status: "Active",
            datePosted: "2026-03-10",
        },
        {
            id: "2",
            title: "Android Developer (Kotlin)",
            type: "Full-Time",
            applicants: 12,
            status: "Active",
            datePosted: "2026-03-12",
        },
        {
            id: "3",
            title: "UI/UX Designer",
            type: "Contract",
            applicants: 6,
            status: "Active",
            datePosted: "2026-03-14",
        },
    ]);

    const [recentApplicants] = useState([
        {
            id: "101",
            name: "Jane Wanjiku",
            role: "Senior Python Developer",
            appliedDate: "2 hours ago",
            status: "Under Review",
        },
        {
            id: "102",
            name: "Brian Ochieng",
            role: "Android Developer (Kotlin)",
            appliedDate: "5 hours ago",
            status: "Shortlisted",
        },
        {
            id: "103",
            name: "Kevin Kiptoo",
            role: "UI/UX Designer",
            appliedDate: "1 day ago",
            status: "New",
        },
    ]);

    return (
        <div className="container-fluid p-0">
            {/* Header Banner */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
                <div>
                    <h3 className="fw-bold text-dark mb-1">Employer Overview</h3>
                    <p className="text-muted small mb-0">
                        Welcome back! Manage your company's open requisitions and candidate pipeline.
                    </p>
                </div>
                <Link
                    to="/employer/create-job"
                    className="btn text-white d-inline-flex align-items-center gap-2 shadow-sm"
                    style={{ backgroundColor: "#790D16" }}
                >
                    <MdAddCircleOutline size={20} />
                    <span>Post a New Job</span>
                </Link>
            </div>

            {/* Metrics Row */}
            <div className="row g-3 mb-4">
                {/* Active Jobs Card */}
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Active Jobs</span>
                                <h3 className="fw-bold text-dark m-0 mt-1">{dashboardStats.activeJobs}</h3>
                            </div>
                            <div
                                className="p-3 rounded-circle d-flex align-items-center justify-content-center"
                                style={{ backgroundColor: "#E8F0F8", color: "#3368A0" }}
                            >
                                <MdWork size={26} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total Applicants Card */}
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Total Applicants</span>
                                <h3 className="fw-bold text-dark m-0 mt-1">{dashboardStats.totalApplicants}</h3>
                            </div>
                            <div
                                className="p-3 rounded-circle d-flex align-items-center justify-content-center"
                                style={{ backgroundColor: "#E8F5EE", color: "#27804A" }}
                            >
                                <MdPeople size={26} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shortlisted Candidates Card */}
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Shortlisted</span>
                                <h3 className="fw-bold text-dark m-0 mt-1">{dashboardStats.shortlisted}</h3>
                            </div>
                            <div className="p-3 rounded-circle bg-warning bg-opacity-10 text-warning d-flex align-items-center justify-content-center">
                                <FaUserCheck size={22} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Views Card */}
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Profile Views</span>
                                <h3 className="fw-bold text-dark m-0 mt-1">{dashboardStats.profileViews}</h3>
                            </div>
                            <div className="p-3 rounded-circle bg-info bg-opacity-10 text-info d-flex align-items-center justify-content-center">
                                <MdRemoveRedEye size={26} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Grid: Active Postings & Recent Applications */}
            <div className="row g-3 mb-4">
                {/* Posted Jobs Table Section */}
                <div className="col-12 col-lg-8">
                    <div className="card border-0 shadow-sm bg-body h-100">
                        <div className="card-header bg-transparent border-bottom py-3 d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold text-dark mb-0">Active Job Postings</h5>
                            <Link to="/employer/applicants" className="btn btn-sm btn-outline-secondary">
                                Manage All
                            </Link>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="ps-3">Job Title</th>
                                        <th>Type</th>
                                        <th>Applicants</th>
                                        <th>Status</th>
                                        <th className="text-end pe-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {postedJobs.map((job) => (
                                        <tr key={job.id}>
                                            <td className="ps-3 fw-semibold text-dark">{job.title}</td>
                                            <td>
                                                <span className="badge bg-primary-subtle text-primary rounded-pill px-2 py-1">
                                                    {job.type}
                                                </span>
                                            </td>
                                            <td className="fw-bold text-secondary">{job.applicants}</td>
                                            <td>
                                                <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-2 py-1">
                                                    {job.status}
                                                </span>
                                            </td>
                                            <td className="text-end pe-3">
                                                <Link
                                                    to="/employer/applicants"
                                                    className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
                                                >
                                                    Applicants <MdArrowForward />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Recent Applicants Sidebar */}
                <div className="col-12 col-lg-4">
                    <div className="card border-0 shadow-sm bg-body h-100">
                        <div className="card-header bg-transparent border-bottom py-3 d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold text-dark mb-0">Recent Applicants</h5>
                            <Link to="/employer/applicants" className="small text-decoration-none fw-semibold">
                                View All
                            </Link>
                        </div>
                        <div className="card-body p-0">
                            <div className="list-group list-group-flush">
                                {recentApplicants.map((app) => (
                                    <div key={app.id} className="list-group-item p-3 border-bottom">
                                        <div className="d-flex justify-content-between align-items-start mb-1">
                                            <h6 className="fw-bold mb-0 text-dark">{app.name}</h6>
                                            <small className="text-muted">{app.appliedDate}</small>
                                        </div>
                                        <p className="small text-muted mb-2">{app.role}</p>
                                        <span
                                            className={`badge ${app.status === "Shortlisted"
                                                ? "bg-success"
                                                : app.status === "Under Review"
                                                    ? "bg-warning text-dark"
                                                    : "bg-info text-dark"
                                                }`}
                                        >
                                            {app.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="card border-0 shadow-sm p-4 bg-body">
                <h5 className="fw-semibold text-dark mb-2">Quick Platform Shortcuts</h5>
                <p className="text-muted small mb-3">
                    Frequently used management actions for your corporate account.
                </p>

                <div className="d-flex flex-wrap gap-2">
                    <Link
                        to="/employer/create-job"
                        className="btn btn-sm text-white d-inline-flex align-items-center gap-1"
                        style={{ backgroundColor: "#3368A0" }}
                    >
                        <MdAddCircleOutline size={18} />
                        Post a New Job
                    </Link>

                    <Link
                        to="/employer/applicants"
                        className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-1"
                    >
                        <MdPeople size={18} />
                        Review Submissions
                    </Link>

                    <Link
                        to="/employer/settings"
                        className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-1"
                    >
                        <FaBuilding size={14} />
                        Update Company Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmployerDashboard;