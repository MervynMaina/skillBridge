import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
    FaSearch,
    FaBriefcase,
    FaCheckCircle,
    FaHourglassHalf,
    FaTimesCircle,
    FaBuilding,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaEye,
    FaExternalLinkAlt,
} from "react-icons/fa";

const AppliedJobs = () => {
    // Mock Applied Jobs Data (In production, replace with useFetch/axios call to JSON Server)
    const [applications] = useState([
        {
            id: "app-101",
            jobId: "1",
            jobTitle: "Senior Python Developer",
            companyName: "TechCorp Innovations",
            location: "San Francisco, CA (Remote)",
            type: "Full Time",
            salary: "$120,000 - $140,000",
            appliedDate: "2026-03-10",
            status: "Shortlisted",
            coverNote:
                "I have 5+ years of Python web application development experience with Django, FastAPI, and PostgreSQL integrations.",
        },
        {
            id: "app-102",
            jobId: "2",
            jobTitle: "Android Developer (Kotlin)",
            companyName: "GGCourierGo",
            location: "Nairobi, Kenya",
            type: "Full Time",
            salary: "KES 150,000 - 200,000",
            appliedDate: "2026-03-12",
            status: "Under Review",
            coverNote:
                "Built logistics tracking mobile applications in Kotlin with Firebase real-time database.",
        },
        {
            id: "app-103",
            jobId: "3",
            jobTitle: "UI/UX Designer",
            companyName: "CreativePulse Media",
            location: "Remote",
            type: "Contract",
            salary: "$60 - $80 / hr",
            appliedDate: "2026-03-01",
            status: "Applied",
            coverNote:
                "Specialized in Figma wireframing, design systems, and responsive web accessibility.",
        },
        {
            id: "app-104",
            jobId: "4",
            jobTitle: "Frontend Developer (React)",
            companyName: "AfriTech Solutions",
            location: "Nairobi, Kenya",
            type: "Part Time",
            salary: "KES 90,000 - 120,000",
            appliedDate: "2026-02-20",
            status: "Rejected",
            coverNote:
                "Experienced in React v18, Bootstrap 5, and state management using Redux and Context API.",
        },
    ]);

    // Search & Filter States
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [selectedApp, setSelectedApp] = useState(null);

    // Filtering Logic
    const filteredApplications = useMemo(() => {
        return applications.filter((app) => {
            const query = searchTerm.toLowerCase().trim();
            const matchesSearch =
                !query ||
                app.jobTitle.toLowerCase().includes(query) ||
                app.companyName.toLowerCase().includes(query) ||
                app.location.toLowerCase().includes(query);

            const matchesStatus =
                statusFilter === "all" ||
                app.status.toLowerCase() === statusFilter.toLowerCase();

            return matchesSearch && matchesStatus;
        });
    }, [applications, searchTerm, statusFilter]);

    // Metrics Summary
    const counts = useMemo(() => {
        return {
            total: applications.length,
            shortlisted: applications.filter((a) => a.status === "Shortlisted").length,
            underReview: applications.filter((a) => a.status === "Under Review" || a.status === "Applied").length,
            rejected: applications.filter((a) => a.status === "Rejected").length,
        };
    }, [applications]);

    return (
        <div className="container-fluid p-0">
            {/* Title Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
                <div>
                    <h3 className="fw-bold text-dark mb-1">My Job Applications</h3>
                    <p className="text-muted small mb-0">
                        Track your submission status, review cover notes, and follow up on active job applications.
                    </p>
                </div>
                <Link
                    to="/all-jobs"
                    className="btn text-white d-inline-flex align-items-center gap-2 shadow-sm"
                    style={{ backgroundColor: "#1E293B" }}
                >
                    <FaSearch /> Browse More Jobs
                </Link>
            </div>

            {/* Metrics Summary Cards */}
            <div className="row g-3 mb-4">
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Total Submitted</span>
                                <h3 className="fw-bold text-dark m-0 mt-1">{counts.total}</h3>
                            </div>
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                                <FaBriefcase className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Shortlisted</span>
                                <h3 className="fw-bold text-success m-0 mt-1">{counts.shortlisted}</h3>
                            </div>
                            <div className="bg-success bg-opacity-10 p-3 rounded-circle text-success">
                                <FaCheckCircle className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">In Progress</span>
                                <h3 className="fw-bold text-warning m-0 mt-1">{counts.underReview}</h3>
                            </div>
                            <div className="bg-warning bg-opacity-10 p-3 rounded-circle text-warning">
                                <FaHourglassHalf className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Not Selected</span>
                                <h3 className="fw-bold text-danger m-0 mt-1">{counts.rejected}</h3>
                            </div>
                            <div className="bg-danger bg-opacity-10 p-3 rounded-circle text-danger">
                                <FaTimesCircle className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Table Card */}
            <div className="card border-0 shadow-sm bg-body">
                {/* Search & Filter Header */}
                <div className="card-header bg-transparent border-bottom py-3">
                    <div className="row g-3 justify-content-between align-items-center">
                        {/* Search Input */}
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="input-group input-group-sm">
                                <span className="input-group-text bg-body-tertiary text-muted border-end-0">
                                    <FaSearch />
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-start-0 bg-body-tertiary"
                                    placeholder="Search role, company, location..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Status Dropdown Filter */}
                        <div className="col-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-md-end gap-2">
                            <label htmlFor="status-filter" className="small text-muted fw-semibold mb-0">
                                Status:
                            </label>
                            <select
                                id="status-filter"
                                className="form-select form-select-sm w-auto"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">All Statuses</option>
                                <option value="applied">Applied</option>
                                <option value="under review">Under Review</option>
                                <option value="shortlisted">Shortlisted</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Data Table */}
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th scope="col" className="ps-4">Job Role & Company</th>
                                <th scope="col">Type</th>
                                <th scope="col">Location</th>
                                <th scope="col">Date Applied</th>
                                <th scope="col">Status</th>
                                <th scope="col" className="text-end pe-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredApplications.length > 0 ? (
                                filteredApplications.map((app) => (
                                    <tr key={app.id}>
                                        {/* Role & Company */}
                                        <td className="ps-4">
                                            <div className="fw-bold text-dark">{app.jobTitle}</div>
                                            <small className="text-muted d-flex align-items-center gap-1">
                                                <FaBuilding className="fs-8" /> {app.companyName}
                                            </small>
                                        </td>

                                        {/* Employment Type */}
                                        <td>
                                            <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1 rounded-pill">
                                                {app.type}
                                            </span>
                                        </td>

                                        {/* Location */}
                                        <td>
                                            <small className="text-secondary d-flex align-items-center gap-1">
                                                <FaMapMarkerAlt className="text-danger opacity-75" /> {app.location}
                                            </small>
                                        </td>

                                        {/* Date Applied */}
                                        <td>
                                            <small className="text-muted d-flex align-items-center gap-1">
                                                <FaCalendarAlt className="opacity-50" /> {app.appliedDate}
                                            </small>
                                        </td>

                                        {/* Status Badge */}
                                        <td>
                                            <span
                                                className={`badge rounded-pill px-2.5 py-1.5 ${app.status === "Shortlisted"
                                                    ? "bg-success-subtle text-success border border-success-subtle"
                                                    : app.status === "Rejected"
                                                        ? "bg-danger-subtle text-danger border border-danger-subtle"
                                                        : app.status === "Under Review"
                                                            ? "bg-warning-subtle text-warning-emphasis border border-warning-subtle"
                                                            : "bg-secondary-subtle text-secondary border border-secondary-subtle"
                                                    }`}
                                            >
                                                {app.status}
                                            </span>
                                        </td>

                                        {/* View Action Modal */}
                                        <td className="text-end pe-4">
                                            <button
                                                className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
                                                onClick={() => setSelectedApp(app)}
                                                data-bs-toggle="modal"
                                                data-bs-target="#applicationModal"
                                            >
                                                <FaEye /> View
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-5 text-muted">
                                        <div className="mb-2">
                                            <FaBriefcase className="fs-1 text-secondary opacity-50" />
                                        </div>
                                        <h6 className="fw-semibold mb-1">No Applications Found</h6>
                                        <p className="small mb-0">No job submissions match your current search criteria.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer Summary */}
                <div className="card-footer bg-transparent border-top py-3 d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                        Showing <span className="fw-semibold text-dark">{filteredApplications.length}</span> of{" "}
                        <span className="fw-semibold text-dark">{applications.length}</span> application records
                    </small>
                </div>
            </div>

            {/* Application Detail View Modal */}
            {selectedApp && (
                <div
                    className="modal fade"
                    id="applicationModal"
                    tabIndex="-1"
                    aria-labelledby="applicationModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow">
                            <div className="modal-header border-bottom">
                                <h5 className="modal-title fw-bold text-dark" id="applicationModalLabel">
                                    Application Summary
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <h6 className="fw-bold text-dark mb-1">{selectedApp.jobTitle}</h6>
                                    <p className="text-muted small mb-0 d-flex align-items-center gap-2">
                                        <span><FaBuilding /> {selectedApp.companyName}</span>
                                        <span>•</span>
                                        <span><FaMapMarkerAlt /> {selectedApp.location}</span>
                                    </p>
                                </div>

                                <div className="p-3 bg-light rounded-3 border mb-3">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="small text-muted fw-semibold">Status</span>
                                        <span
                                            className={`badge rounded-pill px-2.5 py-1 ${selectedApp.status === "Shortlisted"
                                                ? "bg-success text-white"
                                                : selectedApp.status === "Rejected"
                                                    ? "bg-danger text-white"
                                                    : selectedApp.status === "Under Review"
                                                        ? "bg-warning text-dark"
                                                        : "bg-secondary text-white"
                                                }`}
                                        >
                                            {selectedApp.status}
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center small">
                                        <span className="text-muted">Submitted Date</span>
                                        <span className="fw-semibold text-dark">{selectedApp.appliedDate}</span>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <span className="fw-semibold text-muted small d-block mb-1">Cover Note:</span>
                                    <p className="small bg-body-tertiary p-3 rounded border mb-0 text-secondary">
                                        {selectedApp.coverNote}
                                    </p>
                                </div>
                            </div>
                            <div className="modal-footer border-top justify-content-between">
                                <Link
                                    to={`/job-details/${selectedApp.jobId}`}
                                    className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-1"
                                >
                                    <FaExternalLinkAlt /> View Job Details
                                </Link>
                                <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AppliedJobs;