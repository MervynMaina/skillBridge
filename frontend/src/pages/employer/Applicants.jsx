import { useState, useMemo } from "react";
import {
    FaSearch,
    FaFileDownload,
    FaCheckCircle,
    FaTimesCircle,
    FaEye,
    FaEnvelope,
    FaBriefcase,
    FaUsers,
    FaUserCheck,
    FaHourglassHalf,
} from "react-icons/fa";

const Applicants = () => {
    // Mock Applicants State (In production, replace with fetch to JSON Server / API)
    const [applicants, setApplicants] = useState([
        {
            id: "101",
            applicantName: "Jane Wanjiku",
            jobTitle: "Senior Python Developer",
            jobId: "job-1",
            email: "jane.wanjiku@tech.or.ke",
            dateApplied: "2026-03-14",
            status: "Under Review",
            experience: "5 Years",
            coverLetter:
                "I have extensive experience building scalable Python backends with Django and FastAPI. Excited to contribute to your team!",
            resumeUrl: "#",
        },
        {
            id: "102",
            applicantName: "Brian Ochieng",
            jobTitle: "Android Developer (Kotlin)",
            jobId: "job-2",
            email: "brian.o@cloudsolutions.com",
            dateApplied: "2026-03-12",
            status: "Shortlisted",
            experience: "3 Years",
            coverLetter:
                "Built and published multiple production Kotlin apps with Jetpack Compose and Firebase integration.",
            resumeUrl: "#",
        },
        {
            id: "103",
            applicantName: "Kevin Kiptoo",
            jobTitle: "UI/UX Designer",
            jobId: "job-3",
            email: "kevin.k@neteng.co.ke",
            dateApplied: "2026-03-10",
            status: "Applied",
            experience: "2 Years",
            coverLetter:
                "Passionate about creating modern, accessible user interfaces and wireframes in Figma.",
            resumeUrl: "#",
        },
        {
            id: "104",
            applicantName: "Mercy Wambui",
            jobTitle: "Senior Python Developer",
            jobId: "job-1",
            email: "mercy.w@devs.co.ke",
            dateApplied: "2026-03-15",
            status: "Rejected",
            experience: "1 Year",
            coverLetter:
                "Junior developer looking to step into backend microservices development.",
            resumeUrl: "#",
        },
    ]);

    // Search, Job Filter, and Modal States
    const [searchTerm, setSearchTerm] = useState("");
    const [jobFilter, setJobFilter] = useState("all");
    const [statusFilter, setStatusFilter] = useState("all");
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    // Unique list of jobs for filter dropdown
    const uniqueJobs = useMemo(() => {
        const map = new Map();
        applicants.forEach((a) => map.set(a.jobId, a.jobTitle));
        return Array.from(map.entries()).map(([id, title]) => ({ id, title }));
    }, [applicants]);

    // Filtering Logic
    const filteredApplicants = useMemo(() => {
        return applicants.filter((app) => {
            const query = searchTerm.toLowerCase().trim();
            const matchesSearch =
                !query ||
                app.applicantName.toLowerCase().includes(query) ||
                app.email.toLowerCase().includes(query) ||
                app.jobTitle.toLowerCase().includes(query);

            const matchesJob = jobFilter === "all" || app.jobId === jobFilter;
            const matchesStatus =
                statusFilter === "all" ||
                app.status.toLowerCase() === statusFilter.toLowerCase();

            return matchesSearch && matchesJob && matchesStatus;
        });
    }, [applicants, searchTerm, jobFilter, statusFilter]);

    // Action Handlers
    const handleUpdateStatus = (id, newStatus) => {
        setApplicants((prev) =>
            prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
        );
    };

    // Metrics Summary
    const counts = useMemo(() => {
        return {
            total: applicants.length,
            shortlisted: applicants.filter((a) => a.status === "Shortlisted").length,
            underReview: applicants.filter((a) => a.status === "Under Review" || a.status === "Applied").length,
        };
    }, [applicants]);

    return (
        <div className="container-fluid p-0">
            {/* Title Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
                <div>
                    <h3 className="fw-bold text-dark mb-1">Job Applicants</h3>
                    <p className="text-muted small mb-0">
                        Review, evaluate, and shortlist candidates who applied to your open positions.
                    </p>
                </div>
            </div>

            {/* Summary Metrics */}
            <div className="row g-3 mb-4">
                <div className="col-12 col-sm-4">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Total Applicants</span>
                                <h3 className="fw-bold text-dark m-0 mt-1">{counts.total}</h3>
                            </div>
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                                <FaUsers className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-4">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Shortlisted</span>
                                <h3 className="fw-bold text-success m-0 mt-1">{counts.shortlisted}</h3>
                            </div>
                            <div className="bg-success bg-opacity-10 p-3 rounded-circle text-success">
                                <FaUserCheck className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-4">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Pending Review</span>
                                <h3 className="fw-bold text-warning m-0 mt-1">{counts.underReview}</h3>
                            </div>
                            <div className="bg-warning bg-opacity-10 p-3 rounded-circle text-warning">
                                <FaHourglassHalf className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Table Card */}
            <div className="card border-0 shadow-sm bg-body">
                {/* Search and Filters Header */}
                <div className="card-header bg-transparent border-bottom py-3">
                    <div className="row g-3 justify-content-between align-items-center">
                        {/* Search Input */}
                        <div className="col-12 col-md-4">
                            <div className="input-group input-group-sm">
                                <span className="input-group-text bg-body-tertiary text-muted border-end-0">
                                    <FaSearch />
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-start-0 bg-body-tertiary"
                                    placeholder="Search applicant name, email, job..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Dropdown Filters */}
                        <div className="col-12 col-md-8 d-flex flex-wrap align-items-center justify-content-md-end gap-3">
                            <div className="d-flex align-items-center gap-2">
                                <label htmlFor="job-filter" className="small text-muted fw-semibold mb-0">
                                    Job:
                                </label>
                                <select
                                    id="job-filter"
                                    className="form-select form-select-sm w-auto"
                                    value={jobFilter}
                                    onChange={(e) => setJobFilter(e.target.value)}
                                >
                                    <option value="all">All Jobs</option>
                                    {uniqueJobs.map((j) => (
                                        <option key={j.id} value={j.id}>
                                            {j.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="d-flex align-items-center gap-2">
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
                </div>

                {/* Data Table */}
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th scope="col" className="ps-4">
                                    #
                                </th>
                                <th scope="col">Applicant Name</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Date Applied</th>
                                <th scope="col">Status</th>
                                <th scope="col" className="text-end pe-4">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredApplicants.length > 0 ? (
                                filteredApplicants.map((app, index) => (
                                    <tr key={app.id}>
                                        <td className="ps-4 text-muted small">{index + 1}</td>

                                        {/* Applicant Identity */}
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div
                                                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                                    style={{ width: "36px", height: "36px", minWidth: "36px" }}
                                                >
                                                    {app.applicantName.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="fw-bold text-dark">{app.applicantName}</div>
                                                    <small className="text-muted d-flex align-items-center gap-1">
                                                        <FaEnvelope className="fs-8" /> {app.email}
                                                    </small>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Job Title */}
                                        <td>
                                            <span className="fw-semibold text-secondary d-flex align-items-center gap-1">
                                                <FaBriefcase className="opacity-50" /> {app.jobTitle}
                                            </span>
                                        </td>

                                        {/* Date Applied */}
                                        <td className="text-muted small">{app.dateApplied}</td>

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

                                        {/* Action Controls */}
                                        <td className="text-end pe-4">
                                            <div className="btn-group btn-group-sm" role="group">
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    title="View Application Details"
                                                    onClick={() => setSelectedApplicant(app)}
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#applicantModal"
                                                >
                                                    <FaEye /> View
                                                </button>

                                                {app.status !== "Shortlisted" && (
                                                    <button
                                                        className="btn btn-outline-success"
                                                        title="Shortlist Applicant"
                                                        onClick={() => handleUpdateStatus(app.id, "Shortlisted")}
                                                    >
                                                        <FaCheckCircle /> Shortlist
                                                    </button>
                                                )}

                                                {app.status !== "Rejected" && (
                                                    <button
                                                        className="btn btn-outline-danger"
                                                        title="Reject Application"
                                                        onClick={() => handleUpdateStatus(app.id, "Rejected")}
                                                    >
                                                        <FaTimesCircle /> Reject
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-5 text-muted">
                                        <div className="mb-2">
                                            <FaUsers className="fs-1 text-secondary opacity-50" />
                                        </div>
                                        <h6 className="fw-semibold mb-1">No Applications Found</h6>
                                        <p className="small mb-0">No candidate submissions match your filters.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer Summary */}
                <div className="card-footer bg-transparent border-top py-3 d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                        Showing <span className="fw-semibold text-dark">{filteredApplicants.length}</span> of{" "}
                        <span className="fw-semibold text-dark">{applicants.length}</span> applications
                    </small>
                </div>
            </div>

            {/* Applicant Detail View Modal */}
            {selectedApplicant && (
                <div
                    className="modal fade"
                    id="applicantModal"
                    tabIndex="-1"
                    aria-labelledby="applicantModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow">
                            <div className="modal-header border-bottom">
                                <h5 className="modal-title fw-bold" id="applicantModalLabel">
                                    Applicant Details
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
                                    <h6 className="fw-bold text-dark m-0">{selectedApplicant.applicantName}</h6>
                                    <span className="text-muted small">{selectedApplicant.email}</span>
                                </div>

                                <div className="mb-3">
                                    <span className="fw-semibold text-muted small d-block">Applied Position:</span>
                                    <span className="fw-semibold text-primary">{selectedApplicant.jobTitle}</span>
                                </div>

                                <div className="mb-3">
                                    <span className="fw-semibold text-muted small d-block">Experience:</span>
                                    <span>{selectedApplicant.experience}</span>
                                </div>

                                <div className="mb-3">
                                    <span className="fw-semibold text-muted small d-block">Cover Note:</span>
                                    <p className="small bg-light p-3 rounded border mb-0 text-secondary">
                                        {selectedApplicant.coverLetter}
                                    </p>
                                </div>
                            </div>
                            <div className="modal-footer border-top justify-content-between">
                                <a
                                    href={selectedApplicant.resumeUrl}
                                    className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-2"
                                >
                                    <FaFileDownload /> Download Resume
                                </a>
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

export default Applicants;