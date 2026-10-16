import { useState, useMemo } from "react";
import {
    FaSearch,
    FaBriefcase,
    FaCheckCircle,
    FaHourglassHalf,
    FaBan,
    FaTrash,
    FaPlus,
    FaMapMarkerAlt,
    FaBuilding,
    FaEye,
} from "react-icons/fa";

const AdminJobs = () => {
    // Mock job listings data (In production, replace with useFetch("http://localhost:4000/jobs"))
    const [jobs, setJobs] = useState([
        {
            id: "1",
            jobTitle: "Senior Python Developer",
            companyName: "TechCorp Innovations",
            location: "San Francisco, CA",
            discretion: "Full Time",
            salary: "$120,000 - $140,000",
            status: "Active",
            postedDate: "2026-03-10",
            applicantsCount: 18,
        },
        {
            id: "2",
            jobTitle: "Android Developer (Kotlin)",
            companyName: "GGCourierGo",
            location: "Nairobi, Kenya",
            discretion: "Full Time",
            salary: "KES 150,000 - 200,000",
            status: "Active",
            postedDate: "2026-03-12",
            applicantsCount: 24,
        },
        {
            id: "3",
            jobTitle: "UI/UX Designer",
            companyName: "CreativePulse Media",
            location: "Remote",
            discretion: "Contract",
            salary: "$60 - $80 / hr",
            status: "Pending",
            postedDate: "2026-03-14",
            applicantsCount: 6,
        },
        {
            id: "4",
            jobTitle: "DevOps Engineer",
            companyName: "CloudScale Solutions",
            location: "Austin, TX",
            discretion: "Full Time",
            salary: "$110,000 - $130,000",
            status: "Paused",
            postedDate: "2026-02-28",
            applicantsCount: 12,
        },
        {
            id: "5",
            jobTitle: "Frontend Developer (React)",
            companyName: "AfriTech Solutions",
            location: "Nairobi, Kenya",
            discretion: "Part Time",
            salary: "KES 90,000 - 120,000",
            status: "Pending",
            postedDate: "2026-03-15",
            applicantsCount: 3,
        },
    ]);

    // Search and Filter States
    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [statusFilter, setStatusFilter] = useState("all");

    // Filtering Logic
    const filteredJobs = useMemo(() => {
        return jobs.filter((job) => {
            const query = searchTerm.toLowerCase().trim();
            const matchesSearch =
                !query ||
                job.jobTitle.toLowerCase().includes(query) ||
                job.companyName.toLowerCase().includes(query) ||
                job.location.toLowerCase().includes(query);

            const matchesType =
                typeFilter === "all" ||
                job.discretion.toLowerCase() === typeFilter.toLowerCase();

            const matchesStatus =
                statusFilter === "all" ||
                job.status.toLowerCase() === statusFilter.toLowerCase();

            return matchesSearch && matchesType && matchesStatus;
        });
    }, [jobs, searchTerm, typeFilter, statusFilter]);

    // Status Action Handlers
    const handleApprove = (id) => {
        setJobs((prev) =>
            prev.map((job) => (job.id === id ? { ...job, status: "Active" } : job))
        );
    };

    const handlePause = (id) => {
        setJobs((prev) =>
            prev.map((job) => (job.id === id ? { ...job, status: "Paused" } : job))
        );
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to remove this job listing?")) {
            setJobs((prev) => prev.filter((job) => job.id !== id));
        }
    };

    // Metrics Summary
    const counts = useMemo(() => {
        return {
            total: jobs.length,
            active: jobs.filter((j) => j.status === "Active").length,
            pending: jobs.filter((j) => j.status === "Pending").length,
            paused: jobs.filter((j) => j.status === "Paused").length,
        };
    }, [jobs]);

    return (
        <div className="container-fluid p-0">
            {/* Title & Action Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
                <div>
                    <h3 className="fw-bold text-dark mb-1">Job Postings Management</h3>
                    <p className="text-muted small mb-0">
                        Review, approve, pause, or remove job listings posted across SkillBridge.
                    </p>
                </div>
                <button className="btn btn-primary d-inline-flex align-items-center gap-2 shadow-sm">
                    <FaPlus /> Post New Job
                </button>
            </div>

            {/* Metrics Header Cards */}
            <div className="row g-3 mb-4">
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Total Jobs</span>
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
                                <span className="text-muted small fw-semibold">Active Jobs</span>
                                <h3 className="fw-bold text-success m-0 mt-1">{counts.active}</h3>
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
                                <span className="text-muted small fw-semibold">Pending Approval</span>
                                <h3 className="fw-bold text-warning m-0 mt-1">{counts.pending}</h3>
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
                                <span className="text-muted small fw-semibold">Paused / Closed</span>
                                <h3 className="fw-bold text-secondary m-0 mt-1">{counts.paused}</h3>
                            </div>
                            <div className="bg-secondary bg-opacity-10 p-3 rounded-circle text-secondary">
                                <FaBan className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Table Card */}
            <div className="card border-0 shadow-sm bg-body">
                {/* Filter Controls Header */}
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
                                    placeholder="Search by title, company, or location..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Filter Dropdowns */}
                        <div className="col-12 col-md-7 col-lg-6 d-flex flex-wrap align-items-center justify-content-md-end gap-3">
                            <div className="d-flex align-items-center gap-2">
                                <label htmlFor="type-filter" className="small text-muted fw-semibold mb-0">
                                    Type:
                                </label>
                                <select
                                    id="type-filter"
                                    className="form-select form-select-sm w-auto"
                                    value={typeFilter}
                                    onChange={(e) => setTypeFilter(e.target.value)}
                                >
                                    <option value="all">All Types</option>
                                    <option value="full time">Full Time</option>
                                    <option value="part time">Part Time</option>
                                    <option value="contract">Contract</option>
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
                                    <option value="active">Active</option>
                                    <option value="pending">Pending</option>
                                    <option value="paused">Paused</option>
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
                                <th scope="col" className="ps-4">Job Title & Company</th>
                                <th scope="col">Type</th>
                                <th scope="col">Location</th>
                                <th scope="col">Applicants</th>
                                <th scope="col">Status</th>
                                <th scope="col">Posted Date</th>
                                <th scope="col" className="text-end pe-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job) => (
                                    <tr key={job.id}>
                                        {/* Job Title & Company */}
                                        <td className="ps-4">
                                            <div className="fw-bold text-dark">{job.jobTitle}</div>
                                            <small className="text-muted d-flex align-items-center gap-1">
                                                <FaBuilding className="fs-8" /> {job.companyName}
                                            </small>
                                        </td>

                                        {/* Employment Type */}
                                        <td>
                                            <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1 rounded-pill">
                                                {job.discretion}
                                            </span>
                                        </td>

                                        {/* Location */}
                                        <td>
                                            <small className="text-secondary d-flex align-items-center gap-1">
                                                <FaMapMarkerAlt className="text-danger opacity-75" /> {job.location}
                                            </small>
                                        </td>

                                        {/* Applicants Counter */}
                                        <td>
                                            <span className="fw-semibold text-dark">{job.applicantsCount}</span>
                                            <span className="text-muted small ms-1">applicants</span>
                                        </td>

                                        {/* Status Badge */}
                                        <td>
                                            <span
                                                className={`badge rounded-pill px-2.5 py-1.5 ${job.status === "Active"
                                                        ? "bg-success-subtle text-success border border-success-subtle"
                                                        : job.status === "Pending"
                                                            ? "bg-warning-subtle text-warning-emphasis border border-warning-subtle"
                                                            : "bg-secondary-subtle text-secondary border border-secondary-subtle"
                                                    }`}
                                            >
                                                {job.status}
                                            </span>
                                        </td>

                                        {/* Posted Date */}
                                        <td className="text-muted small">{job.postedDate}</td>

                                        {/* Action Buttons */}
                                        <td className="text-end pe-4">
                                            <div className="btn-group btn-group-sm" role="group">
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    title="View Details"
                                                >
                                                    <FaEye />
                                                </button>
                                                {job.status !== "Active" && (
                                                    <button
                                                        className="btn btn-outline-success"
                                                        title="Approve / Activate"
                                                        onClick={() => handleApprove(job.id)}
                                                    >
                                                        <FaCheckCircle /> Approve
                                                    </button>
                                                )}
                                                {job.status === "Active" && (
                                                    <button
                                                        className="btn btn-outline-warning text-dark"
                                                        title="Pause Listing"
                                                        onClick={() => handlePause(job.id)}
                                                    >
                                                        <FaBan /> Pause
                                                    </button>
                                                )}
                                                <button
                                                    className="btn btn-outline-danger"
                                                    title="Delete Listing"
                                                    onClick={() => handleDelete(job.id)}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center py-5 text-muted">
                                        <div className="mb-2">
                                            <FaBriefcase className="fs-1 text-secondary opacity-50" />
                                        </div>
                                        <h6 className="fw-semibold mb-1">No Jobs Found</h6>
                                        <p className="small mb-0">No job postings match your current filter parameters.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer Summary */}
                <div className="card-footer bg-transparent border-top py-3 d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                        Showing <span className="fw-semibold text-dark">{filteredJobs.length}</span> of{" "}
                        <span className="fw-semibold text-dark">{jobs.length}</span> job postings
                    </small>
                </div>
            </div>
        </div>
    );
};

export default AdminJobs;